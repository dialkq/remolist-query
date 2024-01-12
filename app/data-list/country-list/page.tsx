"use client";
import FiturBar from "@/components/common/FiturBar";
import TableList from "./TableList";

const Page = () => {
  return (
    <div className="w-full flex flex-col bg-white">
      <FiturBar />
      <TableList />
    </div>
  );
};

export default Page;