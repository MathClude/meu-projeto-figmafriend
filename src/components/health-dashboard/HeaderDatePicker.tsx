
"use client";

import * as React from "react";
import { format, isValid, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Calendar as CalendarIcon, ChevronDown } from "lucide-react";
import type { DateRange } from "react-day-picker";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const DEFAULT_FROM_DATE = new Date(2024, 0, 1); // Default to Jan 1, 2024
const DEFAULT_TO_DATE = new Date(2024, 11, 31); // Default to Dec 31, 2024


export function HeaderDatePicker({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const getInitialDate = (): DateRange | undefined => {
    const fromParam = searchParams.get("startDate");
    const toParam = searchParams.get("endDate");

    let fromDate, toDate;

    if (fromParam) {
      const parsedFrom = parseISO(fromParam);
      if (isValid(parsedFrom)) {
        fromDate = parsedFrom;
      }
    }
    if (toParam) {
      const parsedTo = parseISO(toParam);
      if (isValid(parsedTo)) {
        toDate = parsedTo;
      }
    }

    if (fromDate && toDate) {
      return { from: fromDate, to: toDate };
    }
    if (fromDate) {
      return { from: fromDate, to: undefined };
    }
    // Default to a sensible range if no params or params are invalid
    return { from: DEFAULT_FROM_DATE, to: DEFAULT_TO_DATE };
  };
  
  const [date, setDate] = React.useState<DateRange | undefined>(getInitialDate);
  const [popoverOpen, setPopoverOpen] = React.useState(false);

  React.useEffect(() => {
    // Sync date picker state if URL searchParams change
    const fromParam = searchParams.get("startDate");
    const toParam = searchParams.get("endDate");
    let urlFromDate, urlToDate;

    if (fromParam) {
        const parsedFrom = parseISO(fromParam);
        if (isValid(parsedFrom)) urlFromDate = parsedFrom;
    }
    if (toParam) {
        const parsedTo = parseISO(toParam);
        if (isValid(parsedTo)) urlToDate = parsedTo;
    }
    
    const currentSelectedFrom = date?.from;
    const currentSelectedTo = date?.to;

    let needsUpdate = false;
    if (urlFromDate && urlToDate) {
        if (currentSelectedFrom?.toISOString().split('T')[0] !== urlFromDate.toISOString().split('T')[0] || 
            currentSelectedTo?.toISOString().split('T')[0] !== urlToDate.toISOString().split('T')[0]) {
            needsUpdate = true;
        }
    } else if (urlFromDate && !urlToDate) {
        if (currentSelectedFrom?.toISOString().split('T')[0] !== urlFromDate.toISOString().split('T')[0] || currentSelectedTo) {
            needsUpdate = true;
        }
    } else if (!urlFromDate && !urlToDate && (currentSelectedFrom || currentSelectedTo)) {
        // If URL has no dates, but picker does, reset picker to default (or undefined if preferred)
        // Forcing consistency with default if URL is blank
        if(currentSelectedFrom?.toISOString().split('T')[0] !== DEFAULT_FROM_DATE.toISOString().split('T')[0] ||
           currentSelectedTo?.toISOString().split('T')[0] !== DEFAULT_TO_DATE.toISOString().split('T')[0]) {
            needsUpdate = true;
            urlFromDate = DEFAULT_FROM_DATE;
            urlToDate = DEFAULT_TO_DATE;
        }
    }


    if (needsUpdate) {
        setDate({ from: urlFromDate || DEFAULT_FROM_DATE, to: urlToDate || DEFAULT_TO_DATE });
    }

  }, [searchParams]);


  const handleDateSelect = (selectedDate: DateRange | undefined) => {
    setDate(selectedDate);
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    if (selectedDate?.from) {
      current.set("startDate", format(selectedDate.from, "yyyy-MM-dd"));
    } else {
      current.delete("startDate");
    }
    if (selectedDate?.to) {
      current.set("endDate", format(selectedDate.to, "yyyy-MM-dd"));
    } else {
      current.delete("endDate");
    }

    const queryString = current.toString();
    router.push(`${pathname}${queryString ? `?${queryString}` : ""}`);
    setPopoverOpen(false); // Close popover on select
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[260px] justify-start text-left font-normal bg-card hover:bg-muted",
              !date && "text-muted-foreground"
            )}
            onClick={() => setPopoverOpen(!popoverOpen)}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "dd/MM/yyyy", { locale: ptBR })} -{" "}
                  {format(date.to, "dd/MM/yyyy", { locale: ptBR })}
                </>
              ) : (
                format(date.from, "dd/MM/yyyy", { locale: ptBR })
              )
            ) : (
              <span>Selecione um período</span>
            )}
            <ChevronDown className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="end">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleDateSelect}
            numberOfMonths={2}
            locale={ptBR}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
