
"use client"; 

import { SinistroEspecialidadeChartClient } from "./SinistroEspecialidadeChartClient";
import { useEffect } from 'react';

const chartData = [
  { name: "Médica", value: 25000, color: "hsl(var(--chart-2))" },
  { name: "Enfermagem", value: 30000, color: "hsl(var(--chart-3))" },
  { name: "Psicologia", value: 20000, color: "hsl(var(--chart-4))" },
  { name: "Nutrição", value: 15000, color: "hsl(var(--chart-5))" },
  { name: "Personal", value: 10000, color: "hsl(var(--chart-6))" },
];

interface SinistroEspecialidadeChartProps {
  startDate?: string;
  endDate?: string;
}

export function SinistroEspecialidadeChart({ startDate, endDate }: SinistroEspecialidadeChartProps) {
 useEffect(() => {
    // console.log('SinistroEspecialidadeChart received dates:', { startDate, endDate });
    // TODO: Filter chartData based on startDate and endDate
  }, [startDate, endDate]);

  const dataForClient = chartData; 
  return <SinistroEspecialidadeChartClient data={dataForClient} startDate={startDate} endDate={endDate} />;
}
