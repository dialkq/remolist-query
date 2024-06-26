import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import PaginationTable from "./PaginationTable";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Icon } from "@iconify/react";

interface Movie {
  id: number;
  original_language: string;
  poster_path: string;
  first_air_date: string;
  original_name: string;
}

interface ApiResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const fetchMovies = async (page: number) => {
  const res = await axios.get<ApiResponse>(
    `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=popularity.desc`,
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
  const [currentPage, setCurrentPage] = useState(1);
  const { isLoading, data } = useQuery(
    ["items", currentPage],
    () => fetchMovies(currentPage),
    { keepPreviousData: true }
  );

  if (isLoading) {
    return <h2 className="text-center">Loading...</h2>;
  }

  return (
    <>
      <p className="text-mono font-semibold md:text-xl py-3 md:pb-5">Discover TV</p>
      <Table className="w-full mx-auto border border-black">
        <TableHeader>
          <TableRow className="bg-slate-200">
            <TableHead className="font-extrabold font-sans text-black"></TableHead>
            <TableHead className="font-extrabold font-sans text-black">
              TV Title
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
              <TableCell className="">
                <Image
                  src={`https://image.tmdb.org/t/p/original${items.poster_path}`}
                  alt={items.original_name}
                  width={25}
                  height={20}
                ></Image>
              </TableCell>
              <TableCell className="">{items.original_name}</TableCell>
              <TableCell>{items.original_language}</TableCell>
              <TableCell className="">{items.first_air_date}</TableCell>
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
        setCurrentPage={setCurrentPage}
        totalPages={10}
      />
    </>
  );
};

export default TablelistQuery;
