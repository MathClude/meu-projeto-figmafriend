
"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { ChartConfig, ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { useEffect, useState } from 'react';

interface ChartData {
  name: string;
  value: number;
  color: string;
}

interface SpecialtyConsultationsChartClientProps {
  data: ChartData[];
  startDate?: string;
  endDate?: string;
}

const chartConfig = {
  value: {
    label: "Consultas",
  },
} satisfies ChartConfig;

export function SpecialtyConsultationsChartClient({ data, startDate, endDate }: SpecialtyConsultationsChartClientProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // console.log('SpecialtyConsultationsChartClient dates:', { startDate, endDate });
    // TODO: If data fetching/filtering were client-side, use startDate and endDate here
  }, [startDate, endDate]);

  if (!isMounted) {
    return <div className="h-[300px] w-full bg-muted animate-pulse rounded-md" data-ai-hint="chart placeholder"></div>;
  }
  
  return (
    <div className="h-[300px] w-full" data-ai-hint="specialty consultations chart">
       <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis 
              type="number" 
              axisLine={false} 
              tickLine={false} 
              fontSize={12}
              stroke="hsl(var(--foreground))"
            />
            <YAxis 
              dataKey="name" 
              type="category" 
              axisLine={false} 
              tickLine={false} 
              fontSize={12}
              width={80} 
              stroke="hsl(var(--foreground))"
            />
            <Tooltip
              cursor={{ fill: 'hsl(var(--accent)/0.3)' }}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={25}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
}
