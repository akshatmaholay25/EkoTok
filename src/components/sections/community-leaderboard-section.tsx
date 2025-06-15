
'use client';

import { useEffect, useState } from 'react';
import type { LeaderboardEntry } from '@/types';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle, Award, Users, Zap, CheckCircle, Trophy } from "lucide-react";
import Image from "next/image";

const communityBenefits = [
  { icon: <Users className="h-5 w-5 text-primary" />, text: "Connect with like-minded eco-enthusiasts." },
  { icon: <Zap className="h-5 w-5 text-primary" />, text: "Share ideas, get feedback, and collaborate." },
  { icon: <Award className="h-5 w-5 text-primary" />, text: "Stay updated on GreenVibes news and events." },
  { icon: <CheckCircle className="h-5 w-5 text-primary" />, text: "Participate in exclusive community challenges." },
];

export function CommunityLeaderboardSection() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchLeaderboard() {
      try {
        setIsLoading(true);
        const response = await fetch('/leaderboard.json');
        if (!response.ok) {
          throw new Error(`Failed to fetch leaderboard: ${response.status}`);
        }
        const data = await response.json();
        setLeaderboard(data.slice(0, 3)); // Ensure only top 3 are shown
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        console.error("Error fetching leaderboard:", err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchLeaderboard();
  }, []);

  return (
    <section id="community" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Trophy className="h-12 w-12 mx-auto text-primary mb-4" />
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Join Our Vibrant Community & See Who's Leading!
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/70">
            Connect, share, and climb the ranks in the EcoTok community. Your contributions make a difference!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Community Engagement Column */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow_transform hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                 <MessageCircle className="h-8 w-8 text-accent" />
                <CardTitle className="font-headline text-2xl text-accent">Connect & Grow</CardTitle>
              </div>
              <CardDescription>
                Our Discord server is the hub for all things EcoTok. Here’s why you should join:
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-center my-6">
                {/* 
                  The Lottie animation previously here was causing a 403 error.
                  Replaced with a placeholder. Please update with a working Lottie URL 
                  or a self-hosted Lottie file.
                  Example of dotlottie-player if you get a new URL:
                  <dotlottie-player
                    src="YOUR_NEW_LOTTIE_URL_HERE"
                    background="transparent"
                    speed="1"
                    style={{ width: '250px', height: '250px' }}
                    loop
                    autoplay
                  ></dotlottie-player>
                */}
                <Image 
                  src="https://placehold.co/250x250.png" 
                  alt="Community animation placeholder" 
                  width={250} 
                  height={250}
                  data-ai-hint="community animation" 
                />
              </div>
              <ul className="space-y-3">
                {communityBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    {benefit.icon}
                    <span className="text-foreground/80">{benefit.text}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" asChild className="w-full shadow-md hover:shadow-lg transition-shadow">
                <a href="https://discord.gg/your-discord-link" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Join Our Discord Server
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Leaderboard Column */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow_transform hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Award className="h-8 w-8 text-accent" />
                <CardTitle className="font-headline text-2xl text-accent">Top Eco-Innovators</CardTitle>
              </div>
              <CardDescription>
                Meet the top 3 contributors inspiring sustainable change.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading && (
                <div className="space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex items-center space-x-4 p-3 bg-muted/50 rounded-md animate-pulse">
                      <div className="h-12 w-12 rounded-full bg-muted"></div>
                      <div className="flex-1 space-y-2">
                        <div className="h-4 bg-muted rounded w-3/4"></div>
                        <div className="h-3 bg-muted rounded w-1/2"></div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {error && <p className="text-destructive text-center">Error loading leaderboard: {error}</p>}
              {!isLoading && !error && leaderboard.length === 0 && (
                <p className="text-muted-foreground text-center py-8">Leaderboard is currently empty. Be the first to shine!</p>
              )}
              {!isLoading && !error && leaderboard.length > 0 && (
                <ul className="space-y-4">
                  {leaderboard.map((user, index) => (
                    <li
                      key={user.id}
                      className="flex items-center space-x-4 p-4 border rounded-lg bg-card hover:bg-muted/50 transition-colors"
                    >
                      <Avatar className="h-12 w-12 border-2 border-primary">
                        <AvatarImage src={user.avatarUrl} alt={user.name} data-ai-hint={user.aiHint || "profile avatar"} />
                        <AvatarFallback>{user.name.substring(0, 1)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-semibold text-primary">{index + 1}. {user.name}</p>
                        <p className="text-sm text-muted-foreground">{user.points.toLocaleString()} Points</p>
                      </div>
                      {index === 0 && <Trophy className="h-6 w-6 text-yellow-500" />}
                      {index === 1 && <Trophy className="h-6 w-6 text-slate-400" />}
                      {index === 2 && <Trophy className="h-6 w-6 text-yellow-700" />}
                    </li>
                  ))}
                </ul>
              )}
               <p className="mt-6 text-xs text-muted-foreground text-center">
                Leaderboard data is updated periodically. Keep up the great work!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
