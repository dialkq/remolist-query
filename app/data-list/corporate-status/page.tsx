"use client";
import TableList from "./TableList";
import SearchBar from "./SearchBar";
import { Modal } from "./Modal";
const Page = () => {
  return (
    <div className="w-full flex flex-col bg-white">
      <div className="flex items-center justify-between my-3 sm:my-5 w-10/12 mx-auto">
        <SearchBar />
        <Modal />
      </div>
      <TableList />
    </div>
  );
};

export default Page;