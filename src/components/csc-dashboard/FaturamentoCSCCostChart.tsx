// src/components/csc-dashboard/FaturamentoCSCCostChart.tsx
"use client";

import { FaturamentoCSCCostChartClient } from "./FaturamentoCSCCostChartClient";
import { useEffect } from 'react';

const chartData = [
  { month: "JAN", Faturamento: 1200000, CSC: 300000 },
  { month: "FEV", Faturamento: 1300000, CSC: 320000 },
  { month: "MAR", Faturamento: 1100000, CSC: 280000 },
  { month: "ABR", Faturamento: 1400000, CSC: 350000 },
  { month: "MAI", Faturamento: 1350000, CSC: 330000 },
  { month: "JUN", Faturamento: 1500000, CSC: 380000 },
  { month: "JUL", Faturamento: 1250000, CSC: 310000 },
  { month: "AGO", Faturamento: 1600000, CSC: 400000 },
  { month: "SET", Faturamento: 1450000, CSC: 360000 },
  { month: "OUT", Faturamento: 1700000, CSC: 420000 },
  { month: "NOV", Faturamento: 1550000, CSC: 390000 },
  { month: "DEZ", Faturamento: 1100000, CSC: 270000 },
];

interface FaturamentoCSCCostChartProps {
  startDate?: string;
  endDate?: string;
}

export function FaturamentoCSCCostChart({ startDate, endDate }: FaturamentoCSCCostChartProps) {
  useEffect(() => {
    // console.log('FaturamentoCSCCostChart received dates:', { startDate, endDate });
    // TODO: Filter chartData based on startDate and endDate
  }, [startDate, endDate]);
  
  const dataForClient = chartData; 
  return <FaturamentoCSCCostChartClient data={dataForClient} startDate={startDate} endDate={endDate} />;
}
