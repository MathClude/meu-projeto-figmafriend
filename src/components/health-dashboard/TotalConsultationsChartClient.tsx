// Adapted from figma-friend/SalesChartClient.tsx
"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartConfig, ChartContainer, ChartTooltipContent } from "@/components/ui/chart"; // ChartTooltip removed as it's a direct recharts component
import { useEffect, useState } from 'react';

interface ChartData {
  month: string;
  Consultas: number;
}

interface TotalConsultationsChartClientProps {
  data: ChartData[];
}

const chartConfig = {
  Consultas: {
    label: "Consultas",
    color: "hsl(var(--primary))", // Using primary color from theme
  },
} satisfies ChartConfig

export function TotalConsultationsChartClient({ data }: TotalConsultationsChartClientProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="h-[300px] w-full bg-muted animate-pulse rounded-md" data-ai-hint="chart placeholder"></div>;
  }

  return (
    <div className="h-[300px] w-full" data-ai-hint="total consultations chart">
       <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 0, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="month" 
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              fontSize={12}
              stroke="hsl(var(--foreground))"
            />
            <YAxis 
              tickLine={false}
              axisLine={false}
              fontSize={12}
              stroke="hsl(var(--foreground))"
              // tickFormatter={(value) => `${value / 1000}k`} // Example formatter
            />
            <Tooltip
              cursor={{ fill: 'hsl(var(--accent)/0.3)' }}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Legend content={({payload}) => {
              if (!payload) return null;
              return (
                <div className="flex items-center justify-start gap-4 pt-3 pl-2">
                  {payload.map((entry) => (
                     <div key={entry.value} className="flex items-center gap-1.5 text-xs">
                       <span className="h-2.5 w-2.5 rounded-full" style={{backgroundColor: entry.color}}></span>
                       <span style={{color: 'hsl(var(--foreground))'}}>{entry.value}</span>
                     </div>
                  ))}
                </div>
              )
            }} />
            <Bar dataKey="Consultas" fill="var(--color-Consultas)" radius={[4, 4, 0, 0]} barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
}
