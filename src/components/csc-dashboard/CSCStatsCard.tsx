// src/components/csc-dashboard/CSCStatsCard.tsx
"use client";

import { Card, CardContent } from '@/components/ui/card';

interface SectorStat {
  name: string;
  cost: string;
  percentage: string;
}

const sectorStats: SectorStat[] = [
  { name: "Saúde", cost: "R$ 500.000", percentage: "50%" },
  { name: "MKT", cost: "R$ 500.000", percentage: "50%" },
  { name: "T.I", cost: "R$ 500.000", percentage: "50%" },
  { name: "Comercial", cost: "R$ 500.000", percentage: "50%" },
  { name: "Administrativo", cost: "R$ 500.000", percentage: "50%" },
];

interface CSCStatsCardProps {
  startDate?: string;
  endDate?: string;
}

export function CSCStatsCard({ startDate, endDate }: CSCStatsCardProps) {
  // useEffect(() => {
  //   console.log("CSCStatsCard dates:", { startDate, endDate });
  // }, [startDate, endDate]);

  return (
    <Card className="bg-primary text-primary-foreground p-6 rounded-lg shadow-xl" data-ai-hint="csc cost summary">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left side: Total Custo CSC */}
          <div className="md:col-span-1 space-y-1">
            <p className="text-sm text-primary-foreground/80">Custo CSC</p>
            <p className="text-3xl font-bold">R$ 1.000.000,00</p>
            <p className="text-sm text-primary-foreground/80 mt-2">% Custo CSC</p>
            <p className="text-3xl font-bold">25%</p>
          </div>

          {/* Right side: Sub-stats grid for sectors */}
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-4">
            {sectorStats.map((sector) => (
              <div key={sector.name}>
                <h4 className="text-sm font-semibold text-primary-foreground/90">{sector.name}</h4>
                <p className="text-lg font-semibold text-primary-foreground">{sector.cost}</p>
                <p className="text-xs text-primary-foreground/80">{sector.percentage}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
