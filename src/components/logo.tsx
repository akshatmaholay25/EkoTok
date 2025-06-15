import { Leaf } from 'lucide-react';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary font-headline hover:opacity-80 transition-opacity">
      <Leaf className="h-7 w-7" />
      <span>EcoTok</span>
    </Link>
  );
}
