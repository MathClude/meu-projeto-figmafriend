// src/components/csc-dashboard/CSCDashboard.tsx
"use client"; 

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StatCard } from '@/components/health-dashboard/StatCard'; 
import { CSCStatsCard } from './CSCStatsCard';
import { LineChart as LineChartIcon } from 'lucide-react'; // Using LineChartIcon for Faturamento Total
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';
import { useEffect } from 'react';

const DynamicFaturamentoCSCCostChart = dynamic(
  () => import('./FaturamentoCSCCostChart').then((mod) => mod.FaturamentoCSCCostChart),
  {
    loading: () => <Skeleton className="h-[300px] w-full rounded-md" />,
    ssr: false, 
  }
);

const DynamicCustoPorSetorChart = dynamic(
  () => import('./CustoPorSetorChart').then((mod) => mod.CustoPorSetorChart),
  {
    loading: () => <Skeleton className="h-[300px] w-full rounded-md" />,
    ssr: false, 
  }
);

const DynamicCSCSectorTable = dynamic(
  () => import('./CSCSectorTable').then((mod) => mod.CSCSectorTable),
  {
    loading: () => <Skeleton className="h-[300px] w-full rounded-md" />,
    ssr: false, 
  }
);

interface CSCDashboardProps {
  startDate?: string;
  endDate?: string;
}

export function CSCDashboard({ startDate, endDate }: CSCDashboardProps) {
  useEffect(() => {
    // console.log("CSCDashboard dates:", { startDate, endDate }); 
  }, [startDate, endDate]);

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Top Stats Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <CSCStatsCard startDate={startDate} endDate={endDate} />
        </div>
        <StatCard
          title="Faturamento Total"
          value="R$ 2.000.000,00"
          icon={<LineChartIcon className="h-6 w-6 text-primary" />}
          className="bg-card text-card-foreground shadow-lg"
          titleClassName="text-muted-foreground"
          valueClassName="text-3xl text-foreground"
          data-ai-hint="total billing"
        />
      </div>

      {/* Charts Row */}
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        <Card className="transition-all hover:shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg">Faturamento x CSC</CardTitle>
          </CardHeader>
          <CardContent className="pl-0">
            <DynamicFaturamentoCSCCostChart startDate={startDate} endDate={endDate} />
          </CardContent>
        </Card>
        
        <Card className="transition-all hover:shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg">Custo por setor</CardTitle>
          </CardHeader>
          <CardContent>
            <DynamicCustoPorSetorChart startDate={startDate} endDate={endDate} />
          </CardContent>
        </Card>
      </div>

      {/* Data Table Row */}
      <Card className="transition-all hover:shadow-lg">
        <CardHeader>
           <CardTitle className="text-lg">Detalhes por Setor</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <DynamicCSCSectorTable startDate={startDate} endDate={endDate} />
        </CardContent>
      </Card>
    </div>
  );
}
