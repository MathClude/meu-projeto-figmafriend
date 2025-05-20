// src/components/csc-dashboard/CustoPorSetorChart.tsx
"use client";

import { CustoPorSetorChartClient } from "./CustoPorSetorChartClient";
import { useEffect } from 'react';

// Using destructive color for red bars as per mockup
const chartData = [
  { name: "Saúde", value: 80000, color: "hsl(var(--destructive))" },
  { name: "MKT", value: 100000, color: "hsl(var(--destructive))" },
  { name: "T.I", value: 60000, color: "hsl(var(--destructive))" },
  { name: "Comercial", value: 70000, color: "hsl(var(--destructive))" },
  { name: "Administrativo", value: 30000, color: "hsl(var(--destructive))" },
];

interface CustoPorSetorChartProps {
  startDate?: string;
  endDate?: string;
}

export function CustoPorSetorChart({ startDate, endDate }: CustoPorSetorChartProps) {
 useEffect(() => {
    // console.log('CustoPorSetorChart received dates:', { startDate, endDate });
    // TODO: Filter chartData based on startDate and endDate
  }, [startDate, endDate]);

  const dataForClient = chartData; 
  return <CustoPorSetorChartClient data={dataForClient} startDate={startDate} endDate={endDate} />;
}
