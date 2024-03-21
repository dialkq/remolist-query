import { Input } from "@/components/ui/input";

const SearchBar = () => {
  return (
    <div className="flex justify-between bg-white">
      {/* <!-- FILTER INPUT SEARCH--> */}
      <div className="flex">
        <Input
          className="w-20 md:w-32 lg:w-40 text-xs rounded-lg placeholder:font-semibold border border-black focus:border-none placeholder:tracking-widest"
          type="search"
          placeholder="Search..."
          id="searchInput"
        />
      </div>
    </div>
  );
};

export default SearchBar;
