"use client";
import SearchBar from "./SearchBar";
import { Modal } from "./Modal";
import TablelistQuery from "./TableListQuery";
import { QueryClientProvider, QueryClient } from "react-query";
import Sidebar from "@/components/common/Sidebar";

const Page = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <div className="w-full flex">
        <div className="hidden lg:flex w-auto">
          <Sidebar />
        </div>
        <div className="flex w-11/12 lg:w-9/12 mx-auto flex-col">
          {/* 3 components */}
          <div className="flex justify-between md:my-3 lg:my-5">
            <div className="flex lg:hidden">
              <Sidebar />
            </div>
            <div className="flex my-auto">
              <SearchBar />
            </div>
            <div className="flex my-auto">
              <Modal />
            </div>
          </div>
          {/* table */}
          <div>
            <TablelistQuery />
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default Page;