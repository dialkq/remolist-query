/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export function Modal() {
  const [toggled, setToggled] = useState(false);

  return (
    <Dialog open={toggled} onOpenChange={setToggled}>
      <DialogTrigger asChild>
        <Button className="bg-black text-white rounded-lg text-xs md:text-sm md:py-3">Add Movie</Button>
      </DialogTrigger>
      <DialogContent className="w-full">
        {/* MOVIE INFO */}
        <DialogHeader className="flex flex-col">
          <DialogTitle className="font-bold mb-1 sm:mb-3">
            Movie Info
          </DialogTitle>

          {/* MOVIE TITLE */}
          <div className="flex py-1 items-center justify-between">
            <Label htmlFor="movie-title" className="">
              Movie Title
            </Label>
            <Input
              placeholder="Movie Title"
              id="movie-title"
              className="w-1/2"
              required
            />
          </div>

          {/* LANGUAGE */}
          <div className="flex py-1 items-center justify-between">
            <Label htmlFor="language" className="">
              Language
            </Label>
            <Select>
              <SelectTrigger className="w-1/2">
                <SelectValue placeholder="Choose Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">en</SelectItem>
                <SelectItem value="idn">idn</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* RELEASE DATE */}
          <div className="flex py-1 items-center justify-between">
            <Label htmlFor="release-date" className="">
              Release Date
            </Label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker className="w-1/2" />
            </LocalizationProvider>
          </div>
        </DialogHeader>

        {/* FOOTER */}
        <DialogFooter className="flex mx-auto w-full">
          <div className="flex flex-col w-full">
            <Button
              type="submit"
              className="bg-black py-3 sm:py-6 w-full mt-1 sm:mt-2"
            >
              Submit
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
