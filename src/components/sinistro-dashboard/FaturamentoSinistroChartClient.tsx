
"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartConfig, ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { useEffect, useState } from 'react';

interface ChartData {
  month: string;
  Faturamento: number;
  Sinistro: number;
}

interface FaturamentoSinistroChartClientProps {
  data: ChartData[];
  startDate?: string;
  endDate?: string;
}

const chartConfig = {
  Faturamento: {
    label: "Faturamento",
    color: "hsl(var(--chart-1))", // Primary color (Purple)
  },
  Sinistro: {
    label: "Sinistro",
    color: "hsl(var(--chart-4))", // Pinkish color
  },
} satisfies ChartConfig;

export function FaturamentoSinistroChartClient({ data, startDate, endDate }: FaturamentoSinistroChartClientProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // console.log('FaturamentoSinistroChartClient dates:', { startDate, endDate });
  }, [startDate, endDate]);

  if (!isMounted) {
    return <div className="h-[300px] w-full bg-muted animate-pulse rounded-md" data-ai-hint="chart placeholder"></div>;
  }

  const formatCurrency = (value: number) => {
    if (value >= 1000000) return `R$${(value / 1000000).toFixed(1)}M`;
    if (value >= 1000) return `R$${(value / 1000).toFixed(0)}K`;
    return `R$${value}`;
  };
  
  const tooltipFormatter = (value: number) => `R$ ${Number(value).toLocaleString('pt-BR')}`;

  return (
    <div className="h-[300px] w-full" data-ai-hint="billing vs claims chart">
       <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 0, left: -10, bottom: 5 }}>
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
              tickFormatter={formatCurrency}
            />
            <Tooltip
              cursor={{ fill: 'hsl(var(--accent)/0.3)' }}
              content={<ChartTooltipContent indicator="dot" formatter={tooltipFormatter} />}
            />
            <Legend content={({payload}) => {
              if (!payload) return null;
              return (
                <div className="flex items-center justify-start gap-4 pt-3 pl-6">
                  {payload.map((entry) => (
                     <div key={entry.dataKey} className="flex items-center gap-1.5 text-xs">
                       <span className="h-2.5 w-2.5 rounded-full" style={{backgroundColor: entry.color}}></span>
                       <span style={{color: 'hsl(var(--foreground))'}}>{chartConfig[entry.dataKey as keyof typeof chartConfig]?.label}</span>
                     </div>
                  ))}
                </div>
              )
            }} />
            <Bar dataKey="Faturamento" fill="var(--color-Faturamento)" radius={[4, 4, 0, 0]} barSize={15} />
            <Bar dataKey="Sinistro" fill="var(--color-Sinistro)" radius={[4, 4, 0, 0]} barSize={15} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
}
