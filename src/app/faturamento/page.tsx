
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { FaturamentoDashboard } from '@/components/faturamento-dashboard/FaturamentoDashboard';

interface FaturamentoPageProps {
  searchParams?: {
    startDate?: string;
    endDate?: string;
  };
}

export default function FaturamentoPage({ searchParams }: FaturamentoPageProps) {
  const startDate = searchParams?.startDate;
  const endDate = searchParams?.endDate;
  return (
    <DashboardLayout>
      <FaturamentoDashboard startDate={startDate} endDate={endDate} />
    </DashboardLayout>
  );
}
