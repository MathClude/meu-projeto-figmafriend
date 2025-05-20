// src/components/csc-dashboard/CustoPorSetorChartClient.tsx
"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, Legend } from 'recharts';
import { ChartConfig, ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { useEffect, useState } from 'react';

interface ChartData {
  name: string;
  value: number;
  color: string;
}

interface CustoPorSetorChartClientProps {
  data: ChartData[];
  startDate?: string;
  endDate?: string;
}

const chartConfig = {
  value: {
    label: "Custo", 
    color: "hsl(var(--destructive))", // Red as per mockup
  },
} satisfies ChartConfig;

export function CustoPorSetorChartClient({ data, startDate, endDate }: CustoPorSetorChartClientProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // console.log('CustoPorSetorChartClient dates:', { startDate, endDate });
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
    <div className="h-[300px] w-full" data-ai-hint="cost by sector chart">
       <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
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
            <Legend content={({payload}) => {
                 if (!payload || !payload.length) return null;
                 const entry = payload.find(p => p.dataKey === 'value'); // Assuming 'value' is the dataKey for the bars
                 if (!entry) return null;

                 return (
                    <div className="flex items-center justify-start gap-1.5 text-xs pl-10 pt-2">
                       <span className="h-2.5 w-2.5 rounded-full" style={{backgroundColor: chartConfig.value.color}}></span>
                       <span style={{color: 'hsl(var(--foreground))'}}>{chartConfig.value.label}</span>
                     </div>
                 );
            }}/>
            <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={20}>
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
