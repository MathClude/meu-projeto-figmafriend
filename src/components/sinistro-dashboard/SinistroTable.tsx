
"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useEffect } from "react";

const sinistroDataOriginal = [
  { empresa: "Shouders", faturamento: "R$ 1.200.000,00", sinistro: "20%", percSinistralidade: "15%" },
  { empresa: "OABRJ", faturamento: "R$ 1.200.000,00", sinistro: "20%", percSinistralidade: "15%" },
  { empresa: "D2PAR", faturamento: "R$ 1.200.000,00", sinistro: "20%", percSinistralidade: "15%" },
  { empresa: "CICLIC - Saúde Protegida", faturamento: "R$ 1.200.000,00", sinistro: "20%", percSinistralidade: "15%" },
  { empresa: "Marinha", faturamento: "R$ 1.200.000,00", sinistro: "20%", percSinistralidade: "15%" },
  { empresa: "Flash V1", faturamento: "R$ 1.200.000,00", sinistro: "20%", percSinistralidade: "15%" },
  { empresa: "Flash V2", faturamento: "R$ 1.200.000,00", sinistro: "20%", percSinistralidade: "15%" },
  { empresa: "B2B Balcão", faturamento: "R$ 1.200.000,00", sinistro: "20%", percSinistralidade: "15%" },
  { empresa: "B2C", faturamento: "R$ 1.200.000,00", sinistro: "20%", percSinistralidade: "15%" },
  { empresa: "Mercantil", faturamento: "R$ 1.200.000,00", sinistro: "20%", percSinistralidade: "15%" },
];

interface SinistroTableProps {
  startDate?: string;
  endDate?: string;
}

export function SinistroTable({ startDate, endDate }: SinistroTableProps) {
  useEffect(() => {
    // console.log('SinistroTable received dates:', { startDate, endDate });
    // TODO: Filter sinistroDataOriginal based on startDate and endDate or fetch new data
  }, [startDate, endDate]);

  const sinistroData = sinistroDataOriginal; 

  return (
    <div data-ai-hint="claims details table">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[250px]">Empresa</TableHead>
            <TableHead>
              <Button variant="ghost" size="sm" className="pl-0 text-muted-foreground hover:text-foreground">
                Faturamento <ArrowUp className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" size="sm" className="pl-0 text-muted-foreground hover:text-foreground">
                Sinistro <ArrowUp className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" size="sm" className="pl-0 text-muted-foreground hover:text-foreground">
                % Sinistralidade <ArrowUp className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sinistroData.map((item) => (
            <TableRow key={item.empresa} className="transition-colors hover:bg-muted/50">
              <TableCell className="font-medium text-foreground">{item.empresa}</TableCell>
              <TableCell className="text-muted-foreground">{item.faturamento}</TableCell>
              <TableCell className="text-muted-foreground">{item.sinistro}</TableCell>
              <TableCell className="text-muted-foreground">{item.percSinistralidade}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

