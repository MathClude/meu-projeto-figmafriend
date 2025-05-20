
"use client"; 

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StatCard } from '@/components/health-dashboard/StatCard'; 
import { LineChart as LineChartIcon } from 'lucide-react';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';
import { useEffect } from 'react';

const DynamicFaturamentoChart = dynamic(
  () => import('./FaturamentoChart').then((mod) => mod.FaturamentoChart),
  {
    loading: () => <Skeleton className="h-[300px] w-full rounded-md" />,
    ssr: false, 
  }
);

const DynamicFaturamentoCustoResultadoChart = dynamic(
  () => import('./FaturamentoCustoResultadoChart').then((mod) => mod.FaturamentoCustoResultadoChart),
  {
    loading: () => <Skeleton className="h-[300px] w-full rounded-md" />,
    ssr: false, 
  }
);

const DynamicFaturamentoTable = dynamic(
  () => import('./FaturamentoTable').then((mod) => mod.FaturamentoTable),
  {
    loading: () => <Skeleton className="h-[300px] w-full rounded-md" />,
    ssr: false, 
  }
);

interface FaturamentoDashboardProps {
  startDate?: string;
  endDate?: string;
}

export function FaturamentoDashboard({ startDate, endDate }: FaturamentoDashboardProps) {
  useEffect(() => {
    // console.log("FaturamentoDashboard dates:", { startDate, endDate }); // For debugging
  }, [startDate, endDate]);

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Stat Cards Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <StatCard
          title="Faturamento Total"
          value="R$ 2.000.000,00"
          icon={<LineChartIcon className="h-6 w-6 text-primary-foreground/80" />}
          className="bg-primary text-primary-foreground shadow-xl"
          titleClassName="text-primary-foreground/90"
          valueClassName="text-3xl"
          data-ai-hint="total billing"
        />
        <StatCard
          title="% Crescimento"
          value="12%"
          className="bg-card text-card-foreground shadow-lg"
          titleClassName="text-muted-foreground"
          valueClassName="text-3xl text-foreground"
          data-ai-hint="growth percentage"
        />
        <StatCard
          title="Resultado Bruto"
          value="8%"
          className="bg-card text-card-foreground shadow-lg"
          titleClassName="text-muted-foreground"
          valueClassName="text-3xl text-foreground"
          data-ai-hint="gross result"
        />
      </div>

      {/* Charts Row */}
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        <Card className="transition-all hover:shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg">Faturamento</CardTitle>
          </CardHeader>
          <CardContent className="pl-0">
            <DynamicFaturamentoChart startDate={startDate} endDate={endDate} />
          </CardContent>
        </Card>
        
        <Card className="transition-all hover:shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg">Faturamento X Custo X Resultado Bruto</CardTitle>
          </CardHeader>
          <CardContent className="pl-0">
            <DynamicFaturamentoCustoResultadoChart startDate={startDate} endDate={endDate} />
          </CardContent>
        </Card>
      </div>

      {/* Data Table Row */}
      <Card className="transition-all hover:shadow-lg">
        <CardHeader>
           <CardTitle className="text-lg">Detalhes por Empresa</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <DynamicFaturamentoTable startDate={startDate} endDate={endDate} />
        </CardContent>
      </Card>
    </div>
  );
}
