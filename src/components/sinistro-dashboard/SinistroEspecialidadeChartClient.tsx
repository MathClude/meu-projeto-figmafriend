
"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { ChartConfig, ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { useEffect, useState } from 'react';

interface ChartData {
  name: string;
  value: number;
  color: string;
}

interface SinistroEspecialidadeChartClientProps {
  data: ChartData[];
  startDate?: string;
  endDate?: string;
}

const chartConfig = {
  value: {
    label: "Sinistro", // Label for tooltip
  },
  // Individual specialty colors are defined in the data itself
} satisfies ChartConfig;

export function SinistroEspecialidadeChartClient({ data, startDate, endDate }: SinistroEspecialidadeChartClientProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // console.log('SinistroEspecialidadeChartClient dates:', { startDate, endDate });
  }, [startDate, endDate]);

  if (!isMounted) {
    return <div className="h-[300px] w-full bg-muted animate-pulse rounded-md" data-ai-hint="chart placeholder"></div>;
  }
  
  const formatCurrency = (value: number) => {
    if (value >= 1000) return `R$${(value / 1000).toFixed(0)} mil`;
    return `R$${value}`;
  };

  const tooltipFormatter = (value: number) => `R$ ${Number(value).toLocaleString('pt-BR')}`;

  return (
    <div className="h-[300px] w-full" data-ai-hint="claims by specialty chart">
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
              tickFormatter={formatCurrency}
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
              content={<ChartTooltipContent indicator="dot" formatter={tooltipFormatter} />}
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
