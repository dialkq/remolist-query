import { TabsLowonganProps } from "./informasi-teknologi-api";

const CardLowongan = ({ data }: { data: TabsLowonganProps }) => {
  return (
      <div className="w-full flex flex-col h-screen">
        <div className="w-full h-32 flex justify-center items-center text-xl font-bold">
          Banner Company
        </div>
        <div className="w-full flex flex-col mt-5 md:mt-8 pl-5">
          <p>{data.title}</p>
          <p>{data.company}</p>
          <p>{data.location}</p>
          <p>{data.description}</p>
          <p>{data.type}</p>
          <p>{data.salary}</p>
        </div>
        
        {/* BUTTON APPLY AND SAVE */}
        <div className="mt-5 pl-5">
          <button className="bg-blue-500 mr-10 p-3 rounded-md text-white w-28">
            Apply
          </button>
          <button className="bg-slate-200 p-3 rounded-md w-28">Save</button>
        </div>
      </div>
    );
  };
  
  export default CardLowongan;
