
"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { useTheme } from 'next-themes'; // Example for potential theme awareness if needed, not strictly used here for colors
import { useEffect, useState } from 'react';

interface SalesChartClientProps {
  data: { month: string; desktop: number; mobile: number }[];
}

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function SalesChartClient({ data }: SalesChartClientProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // You can render a placeholder or skeleton here
    return <div className="h-[350px] w-full bg-muted animate-pulse rounded-md" data-ai-hint="chart placeholder"></div>;
  }

  return (
    <div className="h-[350px] w-full" data-ai-hint="sales chart">
       <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 0, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="month" 
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              fontSize={12}
            />
            <YAxis 
              tickLine={false}
              axisLine={false}
              fontSize={12}
              tickFormatter={(value) => `$${value}`}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Legend content={({payload}) => {
              if (!payload) return null;
              return (
                <div className="flex items-center justify-center gap-4 pt-4">
                  {payload.map((entry) => (
                     <div key={entry.value} className="flex items-center gap-1.5 text-xs">
                       <span className="h-2.5 w-2.5 rounded-full" style={{backgroundColor: entry.color}}></span>
                       {entry.value === 'desktop' ? 'Desktop' : 'Mobile'}
                     </div>
                  ))}
                </div>
              )
            }} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
}

