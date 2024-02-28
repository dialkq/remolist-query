import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
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

interface Movie {
  id: number;
  original_language: string;
  release_date: string;
  title: string;
}

interface ApiResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const fetchMovies = async () => {
  const res = await axios.get<ApiResponse>(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&page=1&language=en-US&sort_by=popularity.desc",
    {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODg3MjZiOWQzNzdjMjI1ZmNmNzhhZjEwMTI0YTA4OCIsInN1YiI6IjY1ZGFjMDY0YWUyODExMDE3YzRjMzkwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NPd90WmkTBur276VZ6-xXX1BWtxMmx77d9DIIBw1cm0",
      },
    }
  );
  return res.data;
};
const TablelistQuery = () => {
  const { isLoading, data } = useQuery("items", fetchMovies);
  
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <Table className="w-10/12 mx-auto border border-black">
        <TableHeader>
          <TableRow className="bg-slate-200">
            <TableHead className="font-extrabold font-sans text-black">
              Movie Title
            </TableHead>
            <TableHead className="font-extrabold font-sans text-black">
              Language
            </TableHead>
            <TableHead className="font-extrabold font-sans text-black">
              Release Date
            </TableHead>
            <TableHead className="font-extrabold font-sans text-black"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.results.map((items) => (
            <TableRow
              key={items.id}
              className="odd:bg-white even:bg-slate-100 hover:bg-slate-3 00"
            >
              <TableCell className="">{items.title}</TableCell>
              <TableCell>{items.original_language}</TableCell>
              <TableCell className="">{items.release_date}</TableCell>
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
        currentPage={0}
        setCurrentPage={function (page: number): void {
          throw new Error("Function not implemented.");
        }}
        totalPages={0}
      />
    </>
  );
};

export default TablelistQuery;
