import { StatCard } from './StatCard';
import { SalesChart } from './SalesChart';
import { ProjectTable } from './ProjectTable';
import { QuickActions } from './QuickActions';
import { Activity, Users, DollarSign, TrendingUp, Package, BarChart3, ListChecks, Settings2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export function Dashboard() {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* Stats Cards Row */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Projects"
          value="1,234"
          icon={<Package className="h-5 w-5 text-muted-foreground" />}
          description="+20.1% from last month"
          data-ai-hint="projects analytics"
        />
        <StatCard
          title="Active Users"
          value="589"
          icon={<Users className="h-5 w-5 text-muted-foreground" />}
          description="+180 since last week"
          data-ai-hint="users analytics"
        />
        <StatCard
          title="Revenue"
          value="$25,849"
          icon={<DollarSign className="h-5 w-5 text-muted-foreground" />}
          description="+12% from last quarter"
          data-ai-hint="revenue finance"
        />
        <StatCard
          title="Conversion Rate"
          value="12.5%"
          icon={<TrendingUp className="h-5 w-5 text-muted-foreground" />}
          description="Up by 2.1% this month"
          data-ai-hint="conversion statistics"
        />
      </div>

      {/* Main Row with Chart and Quick Actions/Recent Activity */}
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-7">
        <Card className="lg:col-span-4 transition-all hover:shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Sales Overview
            </CardTitle>
            <CardDescription>Recent sales performance and trends.</CardDescription>
          </CardHeader>
          <CardContent>
            <SalesChart />
          </CardContent>
        </Card>
        
        <div className="lg:col-span-3 space-y-4">
          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings2 className="h-5 w-5 text-primary" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <QuickActions />
            </CardContent>
          </Card>
          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><span className="text-muted-foreground">User John Doe</span> updated <span className="font-medium">Project Alpha</span>.</li>
                <li className="flex items-center gap-2"><span className="text-muted-foreground">New task</span> added to <span className="font-medium">Marketing Campaign</span>.</li>
                <li className="flex items-center gap-2"><span className="text-muted-foreground">Invoice #INV003</span> paid by <span className="font-medium">Client Corp</span>.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Data Table Row */}
      <Card className="transition-all hover:shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ListChecks className="h-5 w-5 text-primary" />
            Project Status
          </CardTitle>
          <CardDescription>Overview of ongoing projects and their current status.</CardDescription>
        </CardHeader>
        <CardContent>
          <ProjectTable />
        </CardContent>
      </Card>
    </div>
  );
}
