
"use client"; // Marking wrapper as client to allow console.log for debugging if needed
import { SpecialtyConsultationsChartClient } from "./SpecialtyConsultationsChartClient";

const chartData = [
  { name: "Médica", value: 1200, color: "hsl(var(--chart-2))" },
  { name: "Enfermagem", value: 1400, color: "hsl(var(--chart-3))" },
  { name: "Psicologia", value: 2200, color: "hsl(var(--chart-4))" },
  { name: "Nutrição", value: 1500, color: "hsl(var(--chart-5))" },
  { name: "Personal", value: 1700, color: "hsl(var(--chart-6))" },
];

interface SpecialtyConsultationsChartProps {
  startDate?: string;
  endDate?: string;
}

export function SpecialtyConsultationsChart({ startDate, endDate }: SpecialtyConsultationsChartProps) {
  // TODO: Filter chartData based on startDate and endDate
  // console.log('SpecialtyConsultationsChart received dates:', { startDate, endDate });
  const dataForClient = chartData; // Use original hardcoded data for now
  return <SpecialtyConsultationsChartClient data={dataForClient} startDate={startDate} endDate={endDate} />;
}
