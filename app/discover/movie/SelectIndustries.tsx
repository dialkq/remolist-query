import React, { useEffect, useState } from "react";
import axios from "axios";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Industry {
  id: number;
  name: string;
  is_corporate: number;
}

export function SelectIndustries() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [industries, setIndustries] = useState<Industry[]>([]);

  useEffect(() => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    axios
      .get(
        `https://vietexpert-api.d.logique.co.id/api/admin/industry?lt=4&of=0&sb=id&ob=ASC`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setIndustries(response.data.data.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-1/2 justify-between"
        >
          {value
            ? industries.find((industri) => industri.id === Number(value))?.name
            : "Select Industries..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search Industries..." />
          <CommandEmpty>No Industries found.</CommandEmpty>
          <CommandGroup>
            {industries.map((industri) => (
              <CommandItem
                key={industri.id}
                value={industri.id.toString()}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === industri.id.toString() ? "opacity-100" : "opacity-0"
                  )}
                />
                {industri.name}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
