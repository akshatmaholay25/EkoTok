
'use client';

import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
// import { handleVideoValidation, type ValidationFormState } from '@/app/actions';
import { Loader2, Info } from 'lucide-react';
// import { CheckCircle, AlertCircle } from 'lucide-react';


// SubmitButton is defined outside ContentValidationForm
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Validate Content
    </Button>
  );
}

export function ContentValidationForm() {
  // const initialState: ValidationFormState = null;
  // const [state, formAction] = useFormState(handleVideoValidation, initialState);

  return (
    <Card className="w-full shadow-xl">
      <CardHeader>
        <CardTitle className="font-headline text-accent">AI Content Validation (Demo)</CardTitle>
        <CardDescription>
          Enter video details to check for originality and relevance to sustainability themes using our AI tool.
        </CardDescription>
      </CardHeader>
      {/* <form action={formAction}> */}
      <form onSubmit={(e) => e.preventDefault()}> {/* Simplified form handling for now */}
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="videoUrl">Video URL</Label>
            <Input
              id="videoUrl"
              name="videoUrl"
              type="url"
              placeholder="https://example.com/your-video"
              // defaultValue={state?.fields?.videoUrl}
              aria-describedby="videoUrl-error"
              required
            />
            {/* Error display logic removed for simplification */}
          </div>
          <div className="space-y-2">
            <Label htmlFor="videoDescription">Video Description</Label>
            <Textarea
              id="videoDescription"
              name="videoDescription"
              placeholder="Describe the video content, its purpose, and key Echo-friendly aspects."
              rows={4}
              // defaultValue={state?.fields?.videoDescription}
              aria-describedby="videoDescription-error"
              required
            />
            {/* Error display logic removed for simplification */}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-muted-foreground flex items-center">
            <Info className="h-4 w-4 mr-1.5 shrink-0" />
            This is a demonstration of the AI validation capabilities.
          </p>
          <SubmitButton />
        </CardFooter>
      </form>

      {/* Result display logic removed for simplification */}
      {/* {state?.data && (
        <div className="p-6 pt-0">
          <Alert variant={state.data.isOriginal && state.data.isRelevant ? "default" : "destructive"} className="mt-6">
             {state.data.isOriginal && state.data.isRelevant ? <CheckCircle className="h-5 w-5" /> : <AlertCircle className="h-5 w-5 />}
            <AlertTitle className="font-headline">Validation Result</AlertTitle>
            <AlertDescription className="space-y-2">
              <p><strong>Originality:</strong> {state.data.isOriginal ? 'Original' : 'Not Original (or unclear)'}</p>
              <p><strong>Relevance to Sustainability:</strong> {state.data.isRelevant ? 'Relevant' : 'Not Relevant (or unclear)'}</p>
              <p><strong>Reasoning:</strong> {state.data.reasoning}</p>
            </AlertDescription>
          </Alert>
        </div>
      )} */}
    </Card>
  );
}
