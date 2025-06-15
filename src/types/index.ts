export interface LeaderboardEntry {
  id: string;
  name: string;
  points: number;
  avatarUrl: string;
  aiHint?: string; // For placeholder avatar image generation
}
