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
import axios from "axios";

export function Modal() {
  const [toggled, setToggled] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async () => {
    if (!value) {
      setError("Please select an industry");
    } else {
      const token =
        typeof window !== "undefined" ? localStorage.getItem("token") : null;
      try {
        const response = await axios.post(
          "https://vietexpert-api.d.logique.co.id/api/admin/corporate/store",
          {
            // Data yang akan dikirim ke API
            // Anda perlu mengganti ini dengan data aktual Anda
            data: value,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Tangani respons dari API
        if (response.status === 200) {
          // Sukses
          console.log("Data berhasil disimpan");
        } else {
          // Gagal
          console.log("Terjadi kesalahan saat menyimpan data");
        }
      } catch (error) {
        console.error("There was an error!", error);
      }
    }
  };

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
              required
            />
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
            <Input
              placeholder="Email"
              id="email"
              className="w-1/2"
              required
            ></Input>
          </div>
        </DialogHeader>

        {/* FOOTER */}
        <DialogFooter className="flex mx-auto w-full">
          <div className="flex flex-col w-full">
            {error && (
              <p className="text-red-700 text-xs font-mono w-full text-center my-auto">
                {error}
              </p>
            )}
            <Button
              type="submit"
              onClick={handleSubmit}
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
