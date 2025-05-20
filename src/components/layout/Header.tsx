import Link from 'next/link';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { UserAvatarMenu } from '@/components/health-dashboard/UserAvatarMenu'; // Updated path
import { Button } from '@/components/ui/button';
import { HeaderDatePicker } from '@/components/health-dashboard/HeaderDatePicker'; // New component

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-card px-4 md:px-6 shadow-sm">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="md:hidden" />
        {/* Icon link removed as per mockup */}
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Eventos de Saúde
        </h1>
      </div>
      <div className="ml-auto flex items-center gap-4">
        <HeaderDatePicker />
        <UserAvatarMenu />
      </div>
    </header>
  );
}
