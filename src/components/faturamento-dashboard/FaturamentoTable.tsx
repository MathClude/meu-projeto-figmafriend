
"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useEffect } from "react";

const faturamentoDataOriginal = [
  { empresa: "Shouders", faturamento: "R$ 1.200.000,00", percTotal: "20%", percResultado: "15%", percCrescimento: "+ 5%" },
  { empresa: "OABRJ", faturamento: "R$ 1.200.000,00", percTotal: "20%", percResultado: "15%", percCrescimento: "+ 5%" },
  { empresa: "D2PAR", faturamento: "R$ 1.200.000,00", percTotal: "20%", percResultado: "15%", percCrescimento: "+ 5%" },
  { empresa: "CICLIC - Saúde Protegida", faturamento: "R$ 1.200.000,00", percTotal: "20%", percResultado: "15%", percCrescimento: "+ 5%" },
  { empresa: "Marinha", faturamento: "R$ 1.200.000,00", percTotal: "20%", percResultado: "15%", percCrescimento: "+ 5%" },
  { empresa: "Flash V1", faturamento: "R$ 1.200.000,00", percTotal: "20%", percResultado: "15%", percCrescimento: "+ 5%" },
  { empresa: "Flash V2", faturamento: "R$ 1.200.000,00", percTotal: "20%", percResultado: "15%", percCrescimento: "+ 5%" },
  { empresa: "B2B Balcão", faturamento: "R$ 1.200.000,00", percTotal: "20%", percResultado: "15%", percCrescimento: "+ 5%" },
  { empresa: "B2C", faturamento: "R$ 1.200.000,00", percTotal: "20%", percResultado: "15%", percCrescimento: "+ 5%" },
  { empresa: "Mercantil", faturamento: "R$ 1.200.000,00", percTotal: "20%", percResultado: "15%", percCrescimento: "+ 5%" },
];

interface FaturamentoTableProps {
  startDate?: string;
  endDate?: string;
}

export function FaturamentoTable({ startDate, endDate }: FaturamentoTableProps) {
  useEffect(() => {
    // console.log('FaturamentoTable received dates:', { startDate, endDate });
    // TODO: Filter faturamentoDataOriginal based on startDate and endDate or fetch new data
  }, [startDate, endDate]);

  const faturamentoData = faturamentoDataOriginal; // Use original hardcoded data for now

  return (
    <div data-ai-hint="billing details table">
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
                % do faturamento total <ArrowUp className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" size="sm" className="pl-0 text-muted-foreground hover:text-foreground">
                % Resultado <ArrowUp className="ml-2 h-4 w-4" />
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
          {faturamentoData.map((item) => (
            <TableRow key={item.empresa} className="transition-colors hover:bg-muted/50">
              <TableCell className="font-medium text-foreground">{item.empresa}</TableCell>
              <TableCell className="text-muted-foreground">{item.faturamento}</TableCell>
              <TableCell className="text-muted-foreground">{item.percTotal}</TableCell>
              <TableCell className="text-muted-foreground">{item.percResultado}</TableCell>
              <TableCell className="text-muted-foreground">{item.percCrescimento}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
