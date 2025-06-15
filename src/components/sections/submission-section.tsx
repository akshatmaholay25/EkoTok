// This component is now a client component to handle state for form visibility
'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlayCircle } from 'lucide-react'; // Added for the button icon

export function SubmissionSection() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  return (
    <section id="submit" className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            {/* The existing Lottie player */}
            <dotlottie-player
              src="https://lottie.host/c42465a3-ba54-4c68-8529-bfcfc9bc5107/1zvYars6Qn.lottie"
              background="transparent"
              speed="1"
              style={{ width: '300px', height: '300px' }}
              loop
              autoplay
            ></dotlottie-player>
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Share Your Hacks Via Video
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
            Got a great tip, hack, or review? Click the button below to open the submission form. We can&apos;t wait to see your GreenVibes!
          </p>
        </div>
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="font-headline text-accent">Video Submission Form</CardTitle>
            <CardDescription>
              Please fill out all fields to submit your video. Ensure your video is between 30-60 seconds and focuses on sustainability.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!isFormVisible && (
              <div className="text-center py-6">
                <Button
                  onClick={() => setIsFormVisible(true)}
                  size="lg"
                  className="shadow-lg hover:shadow-xl transition-shadow font-semibold"
                >
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Show The Form
                </Button>
              </div>
            )}
            <div
              className={`
                transition-[max-height,opacity] duration-700 ease-in-out
                ${isFormVisible ? 'max-h-[1100px] opacity-100' : 'max-h-0 opacity-0'}
                overflow-hidden
              `}
            >
              {/* This div wrapper ensures the iframe itself doesn't have conflicting transition styles initially */}
              <div>
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSeJtrPPKfuuoqJgkH4TUjgsu4IFYkESpndEch0QWKDYJIghPw/viewform?embedded=true"
                  width="100%"
                  height="1028"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="rounded-md"
                  title="EcoTok Video Submission Form"
                  aria-label="EcoTok Video Submission Form"
                >
                  Loading…
                </iframe>
              </div>
              <p className="mt-4 text-xs text-muted-foreground text-center">
                If the form doesn&apos;t load, please ensure you have third-party cookies enabled or try opening it in a new tab.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
