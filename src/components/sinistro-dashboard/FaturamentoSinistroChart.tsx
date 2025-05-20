
"use client"; 

import { FaturamentoSinistroChartClient } from "./FaturamentoSinistroChartClient";
import { useEffect } from 'react';

const chartData = [
  { month: "JAN", Faturamento: 2800000, Sinistro: 1200000 },
  { month: "FEV", Faturamento: 2000000, Sinistro: 900000 },
  { month: "MAR", Faturamento: 2500000, Sinistro: 1800000 },
  { month: "APR", Faturamento: 2200000, Sinistro: 1000000 },
  { month: "MAI", Faturamento: 2600000, Sinistro: 1500000 },
  { month: "JUN", Faturamento: 2400000, Sinistro: 1700000 },
  { month: "JUL", Faturamento: 2700000, Sinistro: 1900000 },
  { month: "AGO", Faturamento: 2300000, Sinistro: 1200000 },
  { month: "SET", Faturamento: 2100000, Sinistro: 1100000 },
  { month: "OUT", Faturamento: 2900000, Sinistro: 2100000 },
  { month: "NOV", Faturamento: 1800000, Sinistro: 800000 },
  { month: "DEZ", Faturamento: 1500000, Sinistro: 700000 },
];

interface FaturamentoSinistroChartProps {
  startDate?: string;
  endDate?: string;
}

export function FaturamentoSinistroChart({ startDate, endDate }: FaturamentoSinistroChartProps) {
  useEffect(() => {
    // console.log('FaturamentoSinistroChart received dates:', { startDate, endDate });
    // TODO: Filter chartData based on startDate and endDate
  }, [startDate, endDate]);
  
  const dataForClient = chartData; 
  return <FaturamentoSinistroChartClient data={dataForClient} startDate={startDate} endDate={endDate} />;
}
