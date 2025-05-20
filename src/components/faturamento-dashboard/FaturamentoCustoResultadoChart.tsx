
"use client";

import { FaturamentoCustoResultadoChartClient } from "./FaturamentoCustoResultadoChartClient";

const chartData = [
  { month: "JAN", Faturamento: 2800000, Custo: 1500000, ResultadoBruto: 1300000 },
  { month: "FEV", Faturamento: 2600000, Custo: 1400000, ResultadoBruto: 1200000 },
  { month: "MAR", Faturamento: 3000000, Custo: 1600000, ResultadoBruto: 1400000 },
  { month: "ABR", Faturamento: 2700000, Custo: 1450000, ResultadoBruto: 1250000 },
  { month: "MAI", Faturamento: 2900000, Custo: 1550000, ResultadoBruto: 1350000 },
  { month: "JUN", Faturamento: 3100000, Custo: 1700000, ResultadoBruto: 1400000 },
  { month: "JUL", Faturamento: 3200000, Custo: 1800000, ResultadoBruto: 1400000 },
  { month: "AGO", Faturamento: 3400000, Custo: 1900000, ResultadoBruto: 1500000 },
  { month: "SET", Faturamento: 3000000, Custo: 1600000, ResultadoBruto: 1400000 },
  { month: "OUT", Faturamento: 3300000, Custo: 1850000, ResultadoBruto: 1450000 },
  { month: "NOV", Faturamento: 2900000, Custo: 1500000, ResultadoBruto: 1400000 },
  { month: "DEZ", Faturamento: 2700000, Custo: 1400000, ResultadoBruto: 1300000 },
];

interface FaturamentoCustoResultadoChartProps {
  startDate?: string;
  endDate?: string;
}

export function FaturamentoCustoResultadoChart({ startDate, endDate }: FaturamentoCustoResultadoChartProps) {
  // TODO: Filter chartData based on startDate and endDate
  // console.log('FaturamentoCustoResultadoChart received dates:', { startDate, endDate });
  const dataForClient = chartData; // Use original hardcoded data for now
  return <FaturamentoCustoResultadoChartClient data={dataForClient} startDate={startDate} endDate={endDate} />;
}
