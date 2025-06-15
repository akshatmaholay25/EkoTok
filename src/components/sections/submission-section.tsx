
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// Removed: import { UploadCloud } from "lucide-react";

export function SubmissionSection() {
  return (
    <section id="submit" className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Replaced UploadCloud icon with dotlottie-player */}
          <div className="flex justify-center mb-4">
            <dotlottie-player
              src="https://lottie.host/5f5e0176-a979-4089-8f65-8b2f919105ae/yqgJ2aM0XN.lottie" // Replace with your desired Lottie animation URL
              background="transparent"
              speed="1"
              style={{ width: '100px', height: '100px' }} // Adjusted size, can be further customized
              loop
              autoplay
            ></dotlottie-player>
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Share Your Eco-Friendly Video
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
            Got a great tip, hack, or review? Submit your 30-60 second video through the form below. We can&apos;t wait to see your GreenVibes!
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
            <div className="aspect-w-16 aspect-h-9 md:aspect-h-7">
              {/* Replace YOUR_GOOGLE_FORM_EMBED_URL with your actual Google Form embed link */}
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSe_placeholder_form_id_for_ecotok/viewform?embedded=true"
                width="100%"
                height="700"
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
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
