
import { Button } from "@/components/ui/button";
import { ArrowDown, PlayCircle, Users } from "lucide-react";
import Link from "next/link";
import { LottiePlayer } from '@/components/lottie-player';

// ACTION REQUIRED (if you switch to local JSON):
// 1. Create a folder named 'lottie' inside 'src/lib/' if it doesn't exist.
// 2. Place your Lottie JSON file (e.g., 'my-animation.json') in 'src/lib/lottie/'.
// 3. Uncomment the import below and update the path if your filename is different.
// import exampleLottieData from '@/lib/lottie/example-animation.json';

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10 animated-gradient">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
              Welcome to <span className="text-accent">EcoTok</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto md:mx-0 text-lg text-foreground/80 sm:text-xl md:text-2xl">
              Share your green vibes! Post 30-60 second videos on eco-friendly tips, sustainable hacks, and conscious product reviews. Let&apos;s build a greener future, one video at a time.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
              <Button size="lg" asChild className="shadow-lg hover:shadow-xl transition-shadow">
                <Link href="#submit">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Submit Your Video
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="shadow-lg hover:shadow-xl transition-shadow">
                <Link href="#community">
                  <Users className="mr-2 h-5 w-5" />
                  Join Our Community
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center items-center row-start-1 md:row-auto">
            {/* 
              OPTION 1 (Current): Use a URL.
              The URL below has been updated with your provided asset link.
            */}
            <LottiePlayer 
              animationUrl="https://assets1.lottiefiles.com/packages/lf20_swnrn2oy.json" 
              // animationData={exampleLottieData} // <-- OPTION 2: Uncomment this and comment out animationUrl if using local JSON
              className="w-full max-w-sm sm:max-w-md md:max-w-lg h-auto"
              fallbackText="Loading amazing animation..."
            />
            {/*
              To use OPTION 2 (local Lottie JSON):
              1. Place your Lottie JSON file (e.g., 'example-animation.json') in 'src/lib/lottie/'.
              2. Uncomment the 'exampleLottieData' import at the top of this file.
              3. Comment out the 'animationUrl' prop above.
              4. Uncomment the 'animationData={exampleLottieData}' prop above.
                 (Remember to replace 'exampleLottieData' if your import name is different).
            */}
          </div>
        </div>
        <div className="mt-16 text-center animate-bounce">
          <ArrowDown className="h-8 w-8 mx-auto text-primary/70" />
        </div>
      </div>
    </section>
  );
}
