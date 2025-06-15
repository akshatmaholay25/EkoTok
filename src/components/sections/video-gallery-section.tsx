'use client';

import { useState } from 'react';
import type { Video } from '@/types';
import { VideoCard } from '@/components/video-gallery/video-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Grid, ListFilter } from "lucide-react";

const sampleVideos: Video[] = [
  { id: '1', title: 'DIY Compost Bin in 5 Minutes', description: 'Turn kitchen scraps into black gold for your garden with this super easy compost bin.', thumbnailUrl: 'https://placehold.co/600x400.png', uploader: 'EcoWarrior Jane', category: 'DIY & Hacks', tags: ['composting', 'gardening', 'zero waste'], duration: "0:55", views: 12050, aiHint: "gardening compost" },
  { id: '2', title: 'Top 5 Sustainable Tech Gadgets 2024', description: 'Check out these innovative gadgets that help you live more sustainably without sacrificing convenience.', thumbnailUrl: 'https://placehold.co/600x400.png', uploader: 'TechForFuture', category: 'Tech Reviews', tags: ['eco tech', 'gadgets', 'sustainability'], duration: "1:00", views: 8700, featured: true, aiHint: "tech gadgets" },
  { id: '3', title: 'Zero Waste Bathroom Swaps', description: 'Simple product swaps to make your bathroom routine more eco-friendly.', thumbnailUrl: 'https://placehold.co/600x400.png', uploader: 'MinimalistLiving', category: 'Lifestyle Tips', tags: ['zero waste', 'bathroom', 'eco living'], duration: "0:48", views: 22300, aiHint: "bathroom products" },
  { id: '4', title: 'Upcycled Jean Tote Bag Tutorial', description: 'Give old jeans a new life! Create a stylish and durable tote bag.', thumbnailUrl: 'https://placehold.co/600x400.png', uploader: 'CraftyGreen', category: 'DIY & Hacks', tags: ['upcycling', 'fashion', 'crafts'], duration: "0:52", views: 15000, aiHint: "denim bag" },
  { id: '5', title: 'Solar Powered Phone Charger Review', description: 'Is this solar charger worth it for off-grid adventures and daily use?', thumbnailUrl: 'https://placehold.co/600x400.png', uploader: 'GadgetGuru', category: 'Tech Reviews', tags: ['solar power', 'charger', 'review'], duration: "0:58", views: 7500, aiHint: "solar charger" },
  { id: '6', title: 'Natural All-Purpose Cleaner Recipe', description: 'Ditch the chemicals! Make an effective all-purpose cleaner with simple household ingredients.', thumbnailUrl: 'https://placehold.co/600x400.png', uploader: 'CleanGreen', category: 'Lifestyle Tips', tags: ['diy cleaner', 'natural living', 'home'], duration: "0:45", views: 18900, featured: true, aiHint: "cleaning spray" },
];

const categories = ["All", "DIY & Hacks", "Tech Reviews", "Lifestyle Tips", "Featured", "Popular"];

export function VideoGallerySection() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredVideos = sampleVideos.filter(video => {
    if (activeTab === "All") return true;
    if (activeTab === "Featured") return video.featured;
    if (activeTab === "Popular") return (video.views || 0) > 10000; // Arbitrary threshold for popular
    return video.category === activeTab;
  });

  return (
    <section id="gallery" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <Grid className="h-12 w-12 mx-auto text-primary mb-4" />
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            EcoTok Video Gallery
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
            Explore inspiring eco-friendly videos shared by our community.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <div className="flex justify-center">
            <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap gap-2 h-auto">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="w-full md:w-auto">
                  {category === "Popular" && "🌟 "}
                  {category === "Featured" && "🏆 "}
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </Tabs>
        
        {filteredVideos.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {filteredVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <ListFilter className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <p className="text-xl text-muted-foreground">No videos found for &quot;{activeTab}&quot;.</p>
            <p className="text-sm text-muted-foreground mt-2">Try selecting a different category or check back later!</p>
          </div>
        )}
      </div>
    </section>
  );
}
