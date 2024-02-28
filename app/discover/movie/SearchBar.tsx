const SearchBar = () => {
  return (
    <div className="flex justify-between bg-white">
      {/* <!-- FILTER INPUT SEARCH--> */}
      <div className="flex">
        <input
          className="bg-slate-100 w-20 md:w-32 lg:w-40 rounded-full py-2 pl-4 sm:pl-6 pr-0 sm:pr-3 text-sm md:text-base placeholder:font-semibold focus:outline-none focus:border-violet-600 focus:ring-2 focus:ring-violet-600"
          type="search"
          name="search"
          id="searchInput"
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default SearchBar;