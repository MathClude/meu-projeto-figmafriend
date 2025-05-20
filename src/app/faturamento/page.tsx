
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { FaturamentoDashboard } from '@/components/faturamento-dashboard/FaturamentoDashboard';

export default function FaturamentoPage() {
  return (
    <DashboardLayout>
      <FaturamentoDashboard />
    </DashboardLayout>
  );
}
