
'use client';

import Lottie from 'lottie-react';
import type { LottieComponentProps } from 'lottie-react';
import { useEffect, useState } from 'react';

interface LottiePlayerProps extends Omit<LottieComponentProps, 'animationData'> {
  animationUrl?: string;
  animationData?: object; // Direct Lottie JSON data
  fallbackText?: string;
}

const PLACEHOLDER_URL = "YOUR_LOTTIE_ANIMATION_URL_HERE";

export function LottiePlayer({ animationUrl, animationData: providedAnimationData, fallbackText = "Loading animation...", ...props }: LottiePlayerProps) {
  const [animationJson, setAnimationJson] = useState<object | null>(providedAnimationData || null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(!providedAnimationData && !!animationUrl && animationUrl !== PLACEHOLDER_URL);

  useEffect(() => {
    if (providedAnimationData) {
      setAnimationJson(providedAnimationData);
      setIsLoading(false);
      setError(null);
      return;
    }

    if (animationUrl === PLACEHOLDER_URL) {
      setAnimationJson(null);
      setError(null);
      setIsLoading(false);
      return; 
    }

    if (animationUrl) {
      setIsLoading(true);
      setError(null);
      fetch(animationUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Failed to fetch Lottie animation: ${response.status} ${response.statusText}`);
          }
          return response.json();
        })
        .then(data => {
          setAnimationJson(data);
          setIsLoading(false);
        })
        .catch(err => {
          console.error("Lottie fetch error:", err);
          setError(err.message || "Could not load animation.");
          setIsLoading(false);
        });
    } else {
        // No URL and no provided data (and not placeholder)
        setAnimationJson(null);
        setIsLoading(false);
    }
  }, [animationUrl, providedAnimationData]);

  if (isLoading) {
    return <div className="flex items-center justify-center h-full w-full"><p>{fallbackText}</p></div>;
  }

  if (error) {
    return <div className="flex items-center justify-center h-full w-full"><p className="text-destructive">{error}</p></div>;
  }

  if (!animationJson) {
    // This message shows if no animationUrl or animationData is provided,
    // or if the animationUrl is the placeholder.
    // It prompts the user to add the URL or data.
    return <div className="flex items-center justify-center h-64 w-64 bg-muted/20 rounded-lg"><p className="text-center text-sm text-muted-foreground p-4">To display an animation, please provide an <code className='text-xs bg-muted p-1 rounded'>animationUrl</code> or <code className='text-xs bg-muted p-1 rounded'>animationData</code> prop in HeroSection.tsx.</p></div>;
  }

  return <Lottie animationData={animationJson} loop={true} autoplay={true} {...props} />;
}
