
// Renamed and adapted from figma-friend/Dashboard.tsx
import { StatCard, SubStatDisplay } from './StatCard';
import { TotalConsultationsChart } from './TotalConsultationsChart';
import { SpecialtyConsultationsChart } from './SpecialtyConsultationsChart';
import { CompanyDetailsTable } from './CompanyDetailsTable';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { BarChart3, ListChecks } from 'lucide-react';

interface HealthDashboardProps {
  startDate?: string;
  endDate?: string;
}

export function HealthDashboard({ startDate, endDate }: HealthDashboardProps) {
  // console.log("HealthDashboard dates:", { startDate, endDate }); // For debugging
  return (
    <div className="space-y-6 md:space-y-8">
      {/* Main Stats Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Purple Card */}
        <Card className="lg:col-span-2 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl" data-ai-hint="total consultations summary">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left side: Total Consultas */}
            <div className="md:col-span-1 space-y-1">
              <p className="text-sm text-primary-foreground/80">Total de Consultas</p>
              <p className="text-4xl font-bold">10.000</p>
              <p className="text-xs text-primary-foreground/80">Custo total de consultas</p>
              <p className="text-2xl font-semibold">R$150.000,00</p>
              <p className="text-xs text-primary-foreground/80">Custo Médio</p>
              <p className="text-2xl font-semibold">R$15,00</p>
            </div>
            {/* Right side: Sub-stats grid */}
            <div className="md:col-span-2 grid grid-cols-2 gap-x-6 gap-y-4">
              <SubStatDisplay label="Psicologia" value="5.000" percentage="50%" cost="R$ 5,00" />
              <SubStatDisplay label="Nutrição" value="5.000" percentage="50%" cost="R$ 5,00" />
              <SubStatDisplay label="Enfermagem" value="5.000" percentage="33,33%" cost="R$ 5,00" />
              <SubStatDisplay label="Médico" value="5.000" percentage="33,33%" cost="R$ 5,00" />
              <SubStatDisplay label="Personal" value="5.000" percentage="50%" cost="R$ 5,00" />
            </div>
          </div>
        </Card>

        {/* Total de Chat Card */}
        <StatCard
          title="Total de Chat"
          value="15.000"
          description="Custo Médio R$ 0,95"
          className="bg-card text-card-foreground shadow-lg"
          titleClassName="text-muted-foreground"
          valueClassName="text-foreground text-3xl"
          contentClassName="pt-1"
          data-ai-hint="chat statistics"
        />
      </div>

      {/* Charts Row */}
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        <Card className="transition-all hover:shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              Total de Consultas
            </CardTitle>
          </CardHeader>
          <CardContent className="pl-0">
            <TotalConsultationsChart startDate={startDate} endDate={endDate} />
          </CardContent>
        </Card>
        
        <Card className="transition-all hover:shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              Consultas pro especialidades
            </CardTitle>
          </CardHeader>
          <CardContent>
            <SpecialtyConsultationsChart startDate={startDate} endDate={endDate} />
          </CardContent>
        </Card>
      </div>

      {/* Data Table Row */}
      <Card className="transition-all hover:shadow-lg">
        <CardContent className="p-0 pt-4">
          <CompanyDetailsTable startDate={startDate} endDate={endDate} />
        </CardContent>
      </Card>
    </div>
  );
}
