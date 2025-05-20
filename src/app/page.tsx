import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { HealthDashboard } from '@/components/health-dashboard/HealthDashboard'; // Updated path

export default function HomePage() {
  return (
    <DashboardLayout>
      <HealthDashboard />
    </DashboardLayout>
  );
}
