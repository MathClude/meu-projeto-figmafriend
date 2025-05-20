// src/components/layout/SidebarContent.tsx
"use client"; 

import { SidebarContent as ShadSidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarSeparator } from '@/components/ui/sidebar';
import { HeartPulse, DollarSign, LineChart, ShieldAlert, FileText, Settings } from 'lucide-react'; // Changed Users to FileText
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 

export function AppSidebarContent() {
  const pathname = usePathname(); 

  const menuItems = [
    { href: "/faturamento", icon: <DollarSign />, label: "Faturamento", tooltip: "Faturamento" },
    { href: "/", icon: <LineChart />, label: "Eventos de Saúde", tooltip: "Eventos de Saúde" },
    { href: "/sinistro", icon: <ShieldAlert />, label: "Sinistro", tooltip: "Sinistro" },
    { href: "/csc", icon: <FileText />, label: "CSC", tooltip: "CSC" }, // Changed from Empresas to CSC
  ];

  return (
    <ShadSidebarContent className="flex flex-col p-0 bg-sidebar text-sidebar-foreground">
      <SidebarHeader className="p-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-sidebar-foreground hover:text-sidebar-accent-foreground">
          <HeartPulse className="h-7 w-7" />
          <span>Clude Saúde</span>
        </Link>
      </SidebarHeader>
      <SidebarSeparator className="bg-sidebar-border" />
      <SidebarMenu className="flex-1 overflow-y-auto p-2">
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.href}>
            <SidebarMenuButton
              tooltip={item.tooltip}
              asChild
              isActive={pathname === item.href}
              className={
                pathname === item.href
                ? "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90"
                : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              }
            >
              <Link href={item.href}>
                {item.icon}
                <span>{item.label}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
      {/* Optional Footer for settings or user */}
      {/* <SidebarSeparator className="mt-auto bg-sidebar-border"/>
      <SidebarMenu className="p-2">
        <SidebarMenuItem>
            <SidebarMenuButton tooltip="Configurações" asChild className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                <Link href="/settings">
                    <Settings/>
                    <span>Configurações</span>
                </Link>
            </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu> */}
    </ShadSidebarContent>
  );
}
