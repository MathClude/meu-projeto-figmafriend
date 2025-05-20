import Link from 'next/link';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { UserAvatarMenu } from '@/components/figma-friend/UserAvatarMenu';
import { Button } from '@/components/ui/button';
import { Palette } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-card px-4 md:px-6 shadow-sm">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="md:hidden" />
        <Button variant="ghost" size="icon" asChild className="hidden md:flex text-primary hover:text-primary/90">
          <Link href="/">
            <Palette className="h-7 w-7" />
            <span className="sr-only">FigmaFriend Home</span>
          </Link>
        </Button>
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          FigmaFriend
        </h1>
      </div>
      <div className="ml-auto flex items-center gap-4">
        <UserAvatarMenu />
      </div>
    </header>
  );
}
