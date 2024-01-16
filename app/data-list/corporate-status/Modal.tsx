/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { SelectIndustries } from "./SelectIndustries";

export function Modal() {
  const [toggled, setToggled] = useState(true);

  return (
    <Dialog open={toggled} onOpenChange={setToggled}>
      <DialogTrigger asChild>
        <Button className="bg-black text-white">Add New</Button>
      </DialogTrigger>
      <DialogContent className="w-full">
        {/* FORM CORPORATE INFO*/}
        <DialogHeader className="flex flex-col">
          <DialogTitle className="font-bold mb-1 sm:mb-3">
            Corporate info
          </DialogTitle>
          <div className="flex py-1 items-center justify-between">
            <Label htmlFor="corporate-name" className="">
              Corporate Name
            </Label>
            <Input
              placeholder="Corporate Name"
              id="corporate-name"
              className="w-1/2"
            />
          </div>

          <div className="flex py-1 items-center justify-between">
            <Label htmlFor="corporate-name">Select Industries</Label>
            <SelectIndustries />
          </div>
        </DialogHeader>

        {/* FORM CORPORATE INFO*/}
        <DialogHeader className="mt-8 flex flex-col">
          <DialogTitle className="font-bold">Owner info</DialogTitle>
          <div className="flex items-center justify-between py-1">
            <Label htmlFor="first-name" className="">
              First Name
            </Label>
            <Input placeholder="First Name" id="first-name" className="w-1/2" />
          </div>
          <div className="flex items-center justify-between py-1">
            <Label htmlFor="last-name">Last Name</Label>
            <Input placeholder="Last Name" id="last-name" className="w-1/2" />
          </div>
          <div className="flex items-center justify-between py-1">
            <Label htmlFor="email">Email</Label>
            <Input placeholder="Email" id="email" className="w-1/2"></Input>
          </div>
        </DialogHeader>

        {/* FOOTER */}
        <DialogFooter className="flex mx-auto w-full">
          <Button type="submit" className="bg-black py-3 sm:py-6 w-full">
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
