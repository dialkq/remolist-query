"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
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

// Definisikan tipe untuk data yang Anda harapkan dari API
interface Entry {
  API: string;
  Description: string;
  Auth: string;
  HTTPS: boolean;
  Cors: string;
  Link: string;
  Category: string;
}

interface ApiResponse {
  count: number;
  entries: Entry[];
}

export function Tabler() {
  const [data, setData] =  useState<ApiResponse>({ count: 0, entries: [] });
  // USE EFFECT
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ApiResponse>('https://api.publicapis.org/entries');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <Table className="w-11/12 mx-auto border border-black">
      <TableCaption>A list of free API</TableCaption>
      <TableHeader>
        <TableRow className="bg-slate-100 border border-black">
          <TableHead className="font-sans text-black font-bold">API</TableHead>
          <TableHead className="font-sans text-black font-bold">Description</TableHead>
          <TableHead className="font-sans text-black font-bold">Auth</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="border border-black">
        {data ? (
          data.entries.map((entry, index) => (
            <TableRow key={index}>
              <TableCell className="">{entry.API}</TableCell>
              <TableCell>{entry.Description}</TableCell>
              <TableCell>{entry.Auth}</TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={4}>Loading data...</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
