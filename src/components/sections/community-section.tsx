import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import Image from "next/image";

export function CommunitySection() {
  return (
    <section id="community" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center md:text-left">
            <MessageCircle className="h-12 w-12 text-primary mb-4 mx-auto md:mx-0" />
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Join the GreenVibes Community!
            </h2>
            <p className="mt-6 text-lg text-foreground/70">
              Connect with fellow eco-enthusiasts on our Discord server. Share ideas, get feedback, participate in discussions, and stay updated on the latest GreenVibes news and events.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild className="shadow-lg hover:shadow-xl transition-shadow">
                {/* Replace # with your actual Discord server invite link */}
                <a href="https://discord.gg/your-discord-link" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Join Our Discord
                </a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://placehold.co/500x350.png"
              alt="Community interaction illustration"
              width={500}
              height={350}
              className="rounded-lg shadow-xl"
              data-ai-hint="community online discussion"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
