import { SidebarContent as ShadSidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarSeparator } from '@/components/ui/sidebar';
import { LayoutDashboard, Palette } from 'lucide-react';
import Link from 'next/link';

export function AppSidebarContent() {
  return (
    <ShadSidebarContent className="flex flex-col p-0">
      <SidebarHeader className="p-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-primary">
          <Palette className="h-6 w-6" />
          <span>FigmaFriend</span>
        </Link>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarMenu className="flex-1 overflow-y-auto p-2">
        <SidebarMenuItem>
          <SidebarMenuButton tooltip="Dashboard" asChild isActive={true}>
            <Link href="/">
              <LayoutDashboard />
              <span>Dashboard</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </ShadSidebarContent>
  );
}
