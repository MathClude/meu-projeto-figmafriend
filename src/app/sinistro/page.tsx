
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { SinistroDashboard } from '@/components/sinistro-dashboard/SinistroDashboard';

interface SinistroPageProps {
  searchParams?: {
    startDate?: string;
    endDate?: string;
  };
}

export default function SinistroPage({ searchParams }: SinistroPageProps) {
  const startDate = searchParams?.startDate;
  const endDate = searchParams?.endDate;
  return (
    <DashboardLayout>
      <SinistroDashboard startDate={startDate} endDate={endDate} />
    </DashboardLayout>
  );
}
