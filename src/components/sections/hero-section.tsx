
import { Button } from "@/components/ui/button";
import { ArrowDown, PlayCircle, Users } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative pt-20 md:pt-32 pb-4 md:pb-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10 animated-gradient">
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
            <dotlottie-player
              src="https://lottie.host/b2fcf8ce-77af-4869-8ace-3fbec2990e16/3eOOeSvpwW.lottie"
              background="transparent"
              speed="1"
              style={{ width: '450px', height: '450px' }}
              loop
              autoplay
            ></dotlottie-player>
          </div>
        </div>
        <div className="mt-6 text-center animate-bounce">
          <ArrowDown className="h-8 w-8 mx-auto text-primary/70" />
        </div>
      </div>
    </section>
  );
}
