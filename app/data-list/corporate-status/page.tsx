"use client";
import TableList from "./TableList";
import SearchBar from "./SearchBar";
import { Modal } from "./Modal";
import TablelistQuery from "./TableListQuery";
import { QueryClientProvider, QueryClient } from "react-query";


const queryClient = new QueryClient();
const Page = () => {
  ``;
  return (
    <QueryClientProvider client={new QueryClient()}>
      <div className="w-full flex flex-col bg-white">
        <div className="flex items-center justify-between my-3 sm:my-5 w-10/12 mx-auto">
          <SearchBar />
          <Modal />
        </div>
        <TablelistQuery />
      </div>
    </QueryClientProvider>
  );
};

export default Page;
