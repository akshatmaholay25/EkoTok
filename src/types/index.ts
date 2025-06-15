export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  uploader: string;
  category: string;
  tags: string[];
  duration: string; // e.g., "0:45"
  views?: number;
  featured?: boolean;
  aiHint: string; // For placeholder image generation
}
