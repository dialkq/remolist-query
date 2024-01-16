"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const industries = [
  {
    value: "jasa",
    label: "Jasa",
  },
  {
    value: "bisnis",
    label: "Bisnis",
  },
  {
    value: "kecantikan",
    label: "Kecantikan",
  }
]

export function SelectIndustries() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

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
            ? industries.find((industri) => industri.value === value)?.label
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
                key={industri.value}
                value={industri.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === industri.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {industri.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
