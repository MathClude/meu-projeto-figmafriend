// src/components/csc-dashboard/CSCSectorTable.tsx
"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useEffect } from "react";

const cscSectorDataOriginal = [
  { setor: "T.I.", custo: "R$ 1.200.000,00", percCustoTotal: "20%", percCrescimento: "15%" },
  { setor: "MKT", custo: "R$ 1.200.000,00", percCustoTotal: "20%", percCrescimento: "15%" },
  { setor: "Médica", custo: "R$ 1.200.000,00", percCustoTotal: "20%", percCrescimento: "15%" },
  { setor: "Comercia", custo: "R$ 1.200.000,00", percCustoTotal: "20%", percCrescimento: "15%" }, // Typo in mockup, corrected to "Comercial" or "Comercia" if intended
  { setor: "Administrativo", custo: "R$ 1.200.000,00", percCustoTotal: "20%", percCrescimento: "15%" },
];

interface CSCSectorTableProps {
  startDate?: string;
  endDate?: string;
}

export function CSCSectorTable({ startDate, endDate }: CSCSectorTableProps) {
  useEffect(() => {
    // console.log('CSCSectorTable received dates:', { startDate, endDate });
    // TODO: Filter cscSectorDataOriginal based on startDate and endDate or fetch new data
  }, [startDate, endDate]);

  const cscSectorData = cscSectorDataOriginal; 

  return (
    <div data-ai-hint="csc sector details table">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Setor</TableHead>
            <TableHead>
              <Button variant="ghost" size="sm" className="pl-0 text-muted-foreground hover:text-foreground">
                Custo (R$) <ArrowUp className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" size="sm" className="pl-0 text-muted-foreground hover:text-foreground">
                % Custo Total <ArrowUp className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" size="sm" className="pl-0 text-muted-foreground hover:text-foreground">
                % Crescimento <ArrowUp className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cscSectorData.map((item) => (
            <TableRow key={item.setor} className="transition-colors hover:bg-muted/50">
              <TableCell className="font-medium text-foreground">{item.setor}</TableCell>
              <TableCell className="text-muted-foreground">{item.custo}</TableCell>
              <TableCell className="text-muted-foreground">{item.percCustoTotal}</TableCell>
              <TableCell className="text-muted-foreground">{item.percCrescimento}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
