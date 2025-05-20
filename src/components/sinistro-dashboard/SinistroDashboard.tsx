
"use client"; 

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StatCard } from '@/components/health-dashboard/StatCard'; 
import { LineChart as LineChartIcon, AlertTriangle } from 'lucide-react';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';
import { useEffect } from 'react';

const DynamicFaturamentoSinistroChart = dynamic(
  () => import('./FaturamentoSinistroChart').then((mod) => mod.FaturamentoSinistroChart),
  {
    loading: () => <Skeleton className="h-[300px] w-full rounded-md" />,
    ssr: false, 
  }
);

const DynamicSinistroEspecialidadeChart = dynamic(
  () => import('./SinistroEspecialidadeChart').then((mod) => mod.SinistroEspecialidadeChart),
  {
    loading: () => <Skeleton className="h-[300px] w-full rounded-md" />,
    ssr: false, 
  }
);

const DynamicSinistroTable = dynamic(
  () => import('./SinistroTable').then((mod) => mod.SinistroTable),
  {
    loading: () => <Skeleton className="h-[300px] w-full rounded-md" />,
    ssr: false, 
  }
);

interface SinistroDashboardProps {
  startDate?: string;
  endDate?: string;
}

export function SinistroDashboard({ startDate, endDate }: SinistroDashboardProps) {
  useEffect(() => {
    // console.log("SinistroDashboard dates:", { startDate, endDate }); 
  }, [startDate, endDate]);

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Stat Cards Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <StatCard
          title="Sinistro Total"
          value="R$ 100.000,00"
          className="bg-primary text-primary-foreground shadow-xl"
          titleClassName="text-primary-foreground/90"
          valueClassName="text-3xl"
          data-ai-hint="total claims"
        />
        <StatCard
          title="% de sinistro"
          value="7%"
          className="bg-card text-card-foreground shadow-lg"
          titleClassName="text-muted-foreground"
          valueClassName="text-3xl text-foreground"
          data-ai-hint="claims percentage"
        />
        <StatCard
          title="Faturamento"
          value="R$ 2.000.000,00"
          icon={<LineChartIcon className="h-6 w-6 text-muted-foreground" />}
          className="bg-card text-card-foreground shadow-lg"
          titleClassName="text-muted-foreground"
          valueClassName="text-3xl text-foreground"
          data-ai-hint="billing amount"
        />
      </div>

      {/* Charts Row */}
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        <Card className="transition-all hover:shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg">Faturamento x Sinistro</CardTitle>
          </CardHeader>
          <CardContent className="pl-0">
            <DynamicFaturamentoSinistroChart startDate={startDate} endDate={endDate} />
          </CardContent>
        </Card>
        
        <Card className="transition-all hover:shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg">Sinistro por especialidade</CardTitle>
          </CardHeader>
          <CardContent>
            <DynamicSinistroEspecialidadeChart startDate={startDate} endDate={endDate} />
          </CardContent>
        </Card>
      </div>

      {/* Data Table Row */}
      <Card className="transition-all hover:shadow-lg">
        <CardHeader>
           <CardTitle className="text-lg">Detalhes por Empresa</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <DynamicSinistroTable startDate={startDate} endDate={endDate} />
        </CardContent>
      </Card>
    </div>
  );
}
