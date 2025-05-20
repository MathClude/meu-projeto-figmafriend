
"use client";

import { FaturamentoChartClient } from "./FaturamentoChartClient";

const chartData = [
  { month: "JAN", Faturamento: 2100000 },
  { month: "FEV", Faturamento: 1800000 },
  { month: "MAR", Faturamento: 2500000 },
  { month: "ABR", Faturamento: 2200000 },
  { month: "MAI", Faturamento: 1900000 },
  { month: "JUN", Faturamento: 2300000 },
  { month: "JUL", Faturamento: 2600000 },
  { month: "AGO", Faturamento: 2800000 },
  { month: "SET", Faturamento: 2300000 },
  { month: "OUT", Faturamento: 2700000 },
  { month: "NOV", Faturamento: 2400000 },
  { month: "DEZ", Faturamento: 2000000 },
];

interface FaturamentoChartProps {
  startDate?: string;
  endDate?: string;
}

export function FaturamentoChart({ startDate, endDate }: FaturamentoChartProps) {
  // TODO: Filter chartData based on startDate and endDate
  // console.log('FaturamentoChart received dates:', { startDate, endDate });
  const dataForClient = chartData; // Use original hardcoded data for now
  return <FaturamentoChartClient data={dataForClient} startDate={startDate} endDate={endDate} />;
}
