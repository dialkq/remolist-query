"use client";
import FiturBar from "@/components/common/FiturBar";
import TableList from "./TableList";
import { PaginationTable } from "./PaginationTable";

const Page = () => {
  return (
    <div className="w-full flex flex-col bg-white">
      <FiturBar />
      <TableList />
      <PaginationTable />
    </div>
  );
};

export default Page;
