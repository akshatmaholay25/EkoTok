import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { MissionSection } from "@/components/sections/mission-section";
import { SubmissionSection } from "@/components/sections/submission-section";
import { CommunitySection } from "@/components/sections/community-section";
import { VideoGallerySection } from "@/components/sections/video-gallery-section";
import { ContentValidationSection } from "@/components/sections/content-validation-section";
import { Separator } from "@/components/ui/separator";


export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <MissionSection />
        <Separator className="my-0 h-px bg-border/20" />
        <SubmissionSection />
        <Separator className="my-0 h-px bg-border/20" />
        <VideoGallerySection />
        <Separator className="my-0 h-px bg-border/20" />
        <CommunitySection />
        <Separator className="my-0 h-px bg-border/20" />
        <ContentValidationSection />
      </main>
      <Footer />
    </div>
  );
}
