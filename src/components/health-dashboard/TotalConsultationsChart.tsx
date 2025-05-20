// Adapted from figma-friend/SalesChart.tsx
// This will be the "Total de Consultas" chart (monthly bar chart)
import { TotalConsultationsChartClient } from "./TotalConsultationsChartClient";

const chartData = [
  { month: "JAN", Consultas: 600 },
  { month: "FEV", Consultas: 1900 },
  { month: "MAR", Consultas: 1500 },
  { month: "ABR", Consultas: 2100 },
  { month: "MAI", Consultas: 1600 },
  { month: "JUN", Consultas: 1700 },
  { month: "JUL", Consultas: 1200 },
  { month: "AGO", Consultas: 1400 },
  { month: "SET", Consultas: 1200 },
  { month: "OUT", Consultas: 1300 },
  { month: "NOV", Consultas: 1300 },
  { month: "DEZ", Consultas: 1400 },
];

export function TotalConsultationsChart() {
  return <TotalConsultationsChartClient data={chartData} />;
}
