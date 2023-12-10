import Image from "next/image";

const FiturBar = () => {
    return (
        <div className="w-full flex">
            <div className="flex w-max">
                <Image
                src="/public/image/paper.png"
                width={500}
                height={500}
                alt="Paper Icon"
                className="h-6 my-auto"/>
                <p className="font-sans font-bold text-lg ml-2 my-auto">Corporate Member List</p>
            </div>

            {/* <!-- FILTER INPUT SEARCH--> */}
            <div className="relative ">
                <input
                 className="bg-slate-100 lg:w-48 rounded-full py-2 pl-9 pr-2 text-base placeholder:font-semibold focus:outline-none focus:border-violet-600 focus:ring-2 focus:ring-violet-600"
                    type="search" name="search" id="searchInput" placeholder="Search..." />
                <i className="fa fa-search absolute top-3.5 left-3 text-slate-400"></i>
            </div>
        </div>
    );
};

export default FiturBar;