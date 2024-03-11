
export interface TabsLowonganProps {
  title: string
  company: string
  salary?: string
  location: string
  description: string
  type?: string
  section?: string
  onClick?: () => void
}

const TabsLowongan =  (props: TabsLowonganProps) => {
  const { title, company, salary, location, section, onClick } = props
  
  return (
    <div className="w-full border border-slate-400 rounded-xl flex flex-col justify-center cursor-pointer" onClick={onClick}>
      <div
        className="w-16 h-16 rounded-full bg-emerald-200 text-black text-center my-5 ml-5 hidden md:flex"
        id="logo-perusahaan"
      >
        <p className="text-center font-bold font-sans text-black my-auto mx-auto justify-center">
          Logo
        </p>
      </div>

      <div className="mx-5 my-5 md:my-0">
        <p className="font-bold text-lg text-black font-serif">{title}</p>
        <p className="font-lg">{company}</p>
        <p className="mt-3 font-base font-sans">{location}</p>
        <p className="italic text-xs font-bold mt-1"> {salary} </p>
        <p className="font-sans mt-1 hidden md:flex"> {section} </p>
      </div>
    
      <div className="list-disc ml-5 mb-5">
        <li>Work From Home</li>
        <li>Remote</li>
        <li>Full Time</li>
      </div>
    </div>
  );
};

export default TabsLowongan;
