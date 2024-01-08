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
} from "@/components/ui/table"

// Mendefinisikan tipe data untuk respons API
interface ApiResponse {
  id: number;
  company_name: string;
  status: string;
  registration_date: string;
}

const Tablelist = () => {
  const [data, setData] = useState<ApiResponse[]>([]);

  useEffect(() => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    axios.get('https://vietexpert-api.d.logique.co.id/api/admin/corporate?lt=10&of=0&sb=id&ob=DESC', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      setData(response.data.data.data);
    })
    .catch((error) => {
      console.error("There was an error!", error);
    });
  }, []);

  return (
    <Table className='w-10/12 mx-auto border border-black'>
      <TableHeader>
        <TableRow className='bg-slate-200'>
          <TableHead className="font-extrabold font-sans text-black">ID</TableHead>
          <TableHead className='font-extrabold font-sans text-black'>Company Name</TableHead>
          <TableHead className='font-extrabold font-sans text-black'>Status</TableHead>
          <TableHead className='font-extrabold font-sans text-black'>Registration Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id} className='odd:bg-white even:bg-slate-50'>
            <TableCell className="">{item.id}</TableCell>
            <TableCell>{item.company_name}</TableCell>
            <TableCell>{item.status}</TableCell>
            <TableCell className="">{item.registration_date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default Tablelist