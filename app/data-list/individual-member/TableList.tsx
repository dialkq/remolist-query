import React, { useEffect, useState } from "react";
import axios from "axios";
import PaginationTable from "./PaginationTable";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Icon } from "@iconify/react";
interface ApiResponse {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  registration_date: string;
}

const Tablelist = () => {
  const [data, setData] = useState<ApiResponse[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;
    axios
      .get(
        `https://vietexpert-api.d.logique.co.id/api/admin/individual?lt=10&of=${
          (currentPage - 2) + 1
        }&sb=id&ob=ASC`,
        { 
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setData(response.data.data.data);
        setTotalPages(response.data.data.total_page);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, [currentPage]);

  return (
    <>
      <Table className="w-10/12 mx-auto border border-black">
        <TableHeader>
          <TableRow className="bg-slate-200">
            <TableHead className="font-extrabold font-sans text-black">
              ID
            </TableHead>
            <TableHead className="font-extrabold font-sans text-black">
              Name
            </TableHead>
            <TableHead className="font-extrabold font-sans text-black">
              Email
            </TableHead>
            <TableHead className="font-extrabold font-sans text-black">
              Registration Date
            </TableHead>
            <TableHead className="font-extrabold font-sans text-black"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow
              key={item.id}
              className="odd:bg-white even:bg-slate-100 hover:bg-slate-3 00"
            >
              <TableCell className="">{item.id}</TableCell>
              <TableCell>{item.first_name} {item.last_name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell className="">{item.registration_date}</TableCell>
              <div className="flex">
                <TableCell className="text-blue-500 cursor-pointer">
                  <Icon icon="ic:round-edit" />
                </TableCell>
                <TableCell className="text-red-500 cursor-pointer">
                  <Icon icon="ic:round-delete" />
                </TableCell>
                <TableCell className="cursor-pointer">
                  <Icon icon="mdi:show" />
                </TableCell>
              </div>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <PaginationTable
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Tablelist;
