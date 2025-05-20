"use client";
import { SpecialtyConsultationsChartClient } from "./SpecialtyConsultationsChartClient";

const chartData = [
  { name: "Médica", value: 1200, color: "hsl(var(--chart-2))" },
  { name: "Enfermagem", value: 1400, color: "hsl(var(--chart-3))" },
  { name: "Psicologia", value: 2200, color: "hsl(var(--chart-4))" },
  { name: "Nutrição", value: 1500, color: "hsl(var(--chart-5))" },
  { name: "Personal", value: 1700, color: "hsl(var(--chart-6))" },
];

export function SpecialtyConsultationsChart() {
  return <SpecialtyConsultationsChartClient data={chartData} />;
}
