
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sprout, Users, Zap, Award } from "lucide-react";

const missionPoints = [
  {
    icon: <Sprout className="h-10 w-10 text-primary" />,
    title: "Inspire Action",
    description: "Encourage small, everyday changes that collectively make a big impact on our planet's health.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Build Community",
    description: "Foster a supportive network of eco-conscious individuals sharing knowledge and motivation.",
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Promote Innovation",
    description: "Showcase creative eco-hacks, sustainable technologies, and reviews of planet-friendly products.",
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "Recognize Contributions",
    description: "Value every shared tip and plan for future rewards to celebrate our community's GreenVibes.",
  }
];

export function MissionSection() {
  return (
    <section id="mission" className="pt-10 md:pt-16 pb-16 md:pb-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <dotlottie-player
              src="https://lottie.host/c98cca49-1936-472a-9393-20ec4f2b483a/LRmNg5MVgf.lottie"
              background="transparent"
              speed="1"
              style={{ width: '100px', height: '100px' }}
              loop
              autoplay
            ></dotlottie-player>
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Our GreenVibes Mission
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
            At GreenVibes, we believe in the power of shared knowledge to create a sustainable world. Our platform, EcoTok, is dedicated to:
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {missionPoints.map((point) => (
            <Card key={point.title} className="text-center shadow-lg hover:shadow-xl transition-shadow_transform hover:-translate-y-1">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  {point.icon}
                </div>
                <CardTitle className="font-headline text-xl text-accent">{point.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
