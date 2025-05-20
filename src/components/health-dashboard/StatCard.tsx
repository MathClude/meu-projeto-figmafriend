// This file is moved and adapted from src/components/figma-friend/StatCard.tsx
// It will serve as a general StatCard, but HealthDashboard will implement specific card structures.
import type { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils"; // Added import for cn

interface StatCardProps {
  title: string;
  value: string;
  icon?: ReactNode;
  description?: string;
  className?: string;
  titleClassName?: string;
  valueClassName?: string;
  contentClassName?: string;
  "data-ai-hint"?: string;
}

export function StatCard({ 
  title, 
  value, 
  icon, 
  description, 
  className,
  titleClassName,
  valueClassName,
  contentClassName,
  "data-ai-hint": dataAiHint 
}: StatCardProps) {
  return (
    <Card className={cn("transition-all hover:shadow-lg", className)} data-ai-hint={dataAiHint}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className={cn("text-sm font-medium text-muted-foreground", titleClassName)}>
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent className={cn(contentClassName)}>
        <div className={cn("text-2xl font-bold", valueClassName)}>{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground pt-1">{description}</p>
        )}
      </CardContent>
    </Card>
  );
}

// Specific stat display for the main purple card
interface SubStatProps {
  label: string;
  value: string;
  percentage?: string;
  cost: string;
  className?: string;
}
export function SubStatDisplay({ label, value, percentage, cost, className }: SubStatProps) {
  return (
    <div className={cn("text-primary-foreground", className)}>
      <h4 className="text-sm font-semibold">{label}</h4>
      <div className="flex items-baseline gap-2">
        <p className="text-lg font-bold">{value}</p>
        {percentage && <p className="text-xs">{percentage}</p>}
      </div>
      <p className="text-xs">{cost}</p>
    </div>
  )
}
