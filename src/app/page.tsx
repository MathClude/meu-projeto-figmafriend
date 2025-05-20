
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { HealthDashboard } from '@/components/health-dashboard/HealthDashboard'; 

interface HomePageProps {
  searchParams?: {
    startDate?: string;
    endDate?: string;
  };
}

export default function HomePage({ searchParams }: HomePageProps) {
  const startDate = searchParams?.startDate;
  const endDate = searchParams?.endDate;

  return (
    <DashboardLayout>
      <HealthDashboard startDate={startDate} endDate={endDate} />
    </DashboardLayout>
  );
}
