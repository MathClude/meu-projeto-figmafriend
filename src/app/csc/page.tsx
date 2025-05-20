// src/app/csc/page.tsx
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { CSCDashboard } from '@/components/csc-dashboard/CSCDashboard';

interface CSCPageProps {
  searchParams?: {
    startDate?: string;
    endDate?: string;
  };
}

export default function CSCPage({ searchParams }: CSCPageProps) {
  const startDate = searchParams?.startDate;
  const endDate = searchParams?.endDate;
  return (
    <DashboardLayout>
      <CSCDashboard startDate={startDate} endDate={endDate} />
    </DashboardLayout>
  );
}
