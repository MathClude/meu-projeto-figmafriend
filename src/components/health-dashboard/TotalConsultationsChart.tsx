
"use client"; // Marking wrapper as client to allow console.log for debugging if needed
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

interface TotalConsultationsChartProps {
  startDate?: string;
  endDate?: string;
}

export function TotalConsultationsChart({ startDate, endDate }: TotalConsultationsChartProps) {
  // TODO: Filter chartData based on startDate and endDate if this component were handling data fetching/filtering
  // console.log('TotalConsultationsChart received dates:', { startDate, endDate });
  
  // For now, use the original hardcoded data or adapt it if filtering logic is added here.
  // This example assumes filtering would modify `dataForClient`.
  const dataForClient = chartData.map(item => ({ ...item })); // Create a copy to avoid mutating original

  // Example: if startDate and endDate were actual Date objects and month was parseable:
  // if (startDate && endDate) {
  //   dataForClient = chartData.filter(item => {
  //     const itemMonth = new Date( Date.parse(item.month +" 1, 2024") ); // Simplistic month parsing
  //     return itemMonth >= new Date(startDate) && itemMonth <= new Date(endDate);
  //   });
  // }

  return <TotalConsultationsChartClient data={dataForClient} startDate={startDate} endDate={endDate} />;
}
