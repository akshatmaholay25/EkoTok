'use server';

import { z } from 'zod';
import { validateVideoContent, type ValidateVideoContentInput } from '@/ai/flows/validate-video-content';

const VideoValidationSchema = z.object({
  videoDescription: z.string().min(10, 'Description must be at least 10 characters long.'),
  videoUrl: z.string().url('Please enter a valid URL.'),
});

export type ValidationFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  data?: {
    isOriginal: boolean;
    isRelevant: boolean;
    reasoning: string;
  };
} | null;

export async function handleVideoValidation(
  prevState: ValidationFormState,
  formData: FormData
): Promise<ValidationFormState> {
  const videoDescription = formData.get('videoDescription') as string;
  const videoUrl = formData.get('videoUrl') as string;

  const validatedFields = VideoValidationSchema.safeParse({
    videoDescription,
    videoUrl,
  });

  if (!validatedFields.success) {
    const issues = validatedFields.error.issues.map((issue) => issue.message);
    return {
      message: 'Validation failed. Please check your inputs.',
      fields: { videoDescription, videoUrl },
      issues,
    };
  }

  try {
    const input: ValidateVideoContentInput = {
      videoDescription: validatedFields.data.videoDescription,
      videoUrl: validatedFields.data.videoUrl,
    };
    
    const result = await validateVideoContent(input);

    return {
      message: 'Validation successful!',
      data: result,
    };
  } catch (error) {
    console.error('AI Validation Error:', error);
    return {
      message: 'An error occurred during AI validation. Please try again.',
      fields: { videoDescription, videoUrl },
      issues: [error instanceof Error ? error.message : 'Unknown error'],
    };
  }
}
