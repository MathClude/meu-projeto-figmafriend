
// Adapted from figma-friend/ProjectTable.tsx
"use client"; // Marking as client to allow console.log for debugging if needed

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowUp } from "lucide-react";
import { Button as ShadButton } from "@/components/ui/button"; // Renamed to avoid conflict
import { useEffect } from "react";

const companiesData = [
  { empresa: "Shouders", faturamento: "R$ 1.200.000,00", totalConsultas: "20%", sinistralidade: "15%" },
  { empresa: "OABRJ", faturamento: "R$ 1.200.000,00", totalConsultas: "20%", sinistralidade: "15%" },
  { empresa: "D2PAR", faturamento: "R$ 1.200.000,00", totalConsultas: "20%", sinistralidade: "15%" },
  { empresa: "CICLIC - Saúde Protegida", faturamento: "R$ 1.200.000,00", totalConsultas: "20%", sinistralidade: "15%" },
  { empresa: "Marinha", faturamento: "R$ 1.200.000,00", totalConsultas: "20%", sinistralidade: "15%" },
  { empresa: "Flash V1", faturamento: "R$ 1.200.000,00", totalConsultas: "20%", sinistralidade: "15%" },
  { empresa: "Flash V2", faturamento: "R$ 1.200.000,00", totalConsultas: "20%", sinistralidade: "15%" },
  { empresa: "B2B Balcão", faturamento: "R$ 1.200.000,00", totalConsultas: "20%", sinistralidade: "15%" },
  { empresa: "B2C", faturamento: "R$ 1.200.000,00", totalConsultas: "20%", sinistralidade: "15%" },
  { empresa: "Mercantil", faturamento: "R$ 1.200.000,00", totalConsultas: "20%", sinistralidade: "15%" },
];

interface CompanyDetailsTableProps {
  startDate?: string;
  endDate?: string;
}

export function CompanyDetailsTable({ startDate, endDate }: CompanyDetailsTableProps) {
  useEffect(() => {
    // console.log('CompanyDetailsTable received dates:', { startDate, endDate });
    // TODO: Filter companiesData based on startDate and endDate or fetch new data
  }, [startDate, endDate]);

  const companies = companiesData; // Use original hardcoded data for now

  return (
    <div data-ai-hint="company details table">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">
              <ShadButton variant="ghost" size="sm" className="pl-0 text-muted-foreground hover:text-foreground">
                Empresa <ArrowUp className="ml-2 h-4 w-4" />
              </ShadButton>
            </TableHead>
            <TableHead>
              <ShadButton variant="ghost" size="sm" className="pl-0 text-muted-foreground hover:text-foreground">
                Faturamento <ArrowUp className="ml-2 h-4 w-4" />
              </ShadButton>
            </TableHead>
            <TableHead>
              <ShadButton variant="ghost" size="sm" className="pl-0 text-muted-foreground hover:text-foreground">
                Total de Consultas <ArrowUp className="ml-2 h-4 w-4" />
              </ShadButton>
            </TableHead>
            <TableHead>
              <ShadButton variant="ghost" size="sm" className="pl-0 text-muted-foreground hover:text-foreground">
                % Sinistralidade <ArrowUp className="ml-2 h-4 w-4" />
              </ShadButton>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companies.map((company) => (
            <TableRow key={company.empresa} className="transition-colors hover:bg-muted/50">
              <TableCell className="font-medium text-foreground">{company.empresa}</TableCell>
              <TableCell className="text-muted-foreground">{company.faturamento}</TableCell>
              <TableCell className="text-muted-foreground">{company.totalConsultas}</TableCell>
              <TableCell className="text-muted-foreground">{company.sinistralidade}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
