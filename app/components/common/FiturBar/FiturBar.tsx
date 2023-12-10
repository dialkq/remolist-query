import Image from "next/image";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

const FiturBar = () => {
  return (
    <div className="w-11/12 mx-auto flex justify-evenly mt-10">
      <div className="w-auto flex justify-between">
        <Image
          src="/image/paper.png"
          width={500}
          height={500}
          alt="Paper Icon"
          className="w-6 my-auto"
        />
        <p className="font-sans font-bold text-lg ml-2 my-auto">
          Corporate Member List
        </p>
      </div>

      {/* <!-- FILTER INPUT SEARCH--> */}
      <div className="relative ">
        <input
          className="bg-slate-100 lg:w-48 rounded-full py-2 pl-9 pr-2 text-base placeholder:font-semibold focus:outline-none focus:border-violet-600 focus:ring-2 focus:ring-violet-600"
          type="search"
          name="search"
          id="searchInput"
          placeholder="Search..."
        />
        <i className="fa fa-search absolute top-3.5 left-3 text-slate-400"></i>
      </div>

      {/* BUTTON ADD NEW */}
      <button
        id="addNewBtn"
        className="flex justify-evenly border-2 border-violet-600 rounded-xl edit focus:outline-none focus:border-transparent focus:ring-transparent focus:bg-gradient-to-r focus:from-blue-600 focus:to-violet-600 hover:outline-none hover:border-transparent hover:ring-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600"
        type="button"
      >
        <p className="my-auto text-sm text-violet-600 font-bold mx-3">
          Add New
        </p>
      </button>
    </div>
  );
};

export default FiturBar;
