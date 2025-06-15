import { Leaf } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 px-4 sm:px-6 lg:px-8 md:flex-row max-w-7xl">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Leaf className="h-6 w-6 text-primary" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {currentYear} EcoTok by GreenVibes. All rights reserved.
          </p>
        </div>
        <p className="text-center text-sm text-muted-foreground md:text-right">
          Future rewards program envisioned, potentially funded by affiliate partnerships.
        </p>
      </div>
    </footer>
  );
}
