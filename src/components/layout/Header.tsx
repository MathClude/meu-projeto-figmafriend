
"use client"; // Added because usePathname is used

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname
import { SidebarTrigger } from '@/components/ui/sidebar';
import { UserAvatarMenu } from '@/components/health-dashboard/UserAvatarMenu';
import { Button } from '@/components/ui/button';
import { HeaderDatePicker } from '@/components/health-dashboard/HeaderDatePicker'; 

export function Header() {
  const pathname = usePathname();
  let pageTitle = "Eventos de Saúde"; // Default title

  if (pathname === '/faturamento') {
    pageTitle = "Faturamento";
  } else if (pathname === '/sinistro') {
    pageTitle = "Sinistro";
  } else if (pathname === '/') {
    pageTitle = "Eventos de Saúde";
  }
  // Add more conditions for other pages if needed

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-card px-4 md:px-6 shadow-sm">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="md:hidden" />
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          {pageTitle}
        </h1>
      </div>
      <div className="ml-auto flex items-center gap-4">
        <HeaderDatePicker />
        <UserAvatarMenu />
      </div>
    </header>
  );
}
