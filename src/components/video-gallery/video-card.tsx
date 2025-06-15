import type { Video } from "@/types";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Clock, UserCircle, Tag } from "lucide-react";

interface VideoCardProps {
  video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="aspect-video relative">
          <Image
            src={video.thumbnailUrl}
            alt={video.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={video.aiHint}
          />
          {video.featured && (
            <Badge variant="destructive" className="absolute top-2 right-2 shadow-md">Featured</Badge>
          )}
           <Badge variant="secondary" className="absolute bottom-2 left-2 shadow-md">{video.duration}</Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <CardTitle className="font-headline text-lg mb-2 text-accent leading-tight hover:underline cursor-pointer">
          {video.title}
        </CardTitle>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-3">{video.description}</p>
        <div className="flex items-center text-xs text-muted-foreground mb-1">
          <UserCircle className="h-4 w-4 mr-1.5" /> By {video.uploader}
        </div>
        <div className="flex items-center text-xs text-muted-foreground">
          <Tag className="h-4 w-4 mr-1.5" /> {video.category}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        {video.views && (
          <div className="flex items-center text-xs text-muted-foreground">
            <Eye className="h-4 w-4 mr-1" /> {video.views.toLocaleString()} views
          </div>
        )}
        <div className="flex flex-wrap gap-1 mt-1">
          {video.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
