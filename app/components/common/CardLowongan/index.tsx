const CardLowongan = () => {
  return (
    <div className="w-full mt-10 border-2 border-black rounded-xl flex flex-col justify-center">
      <div className="w-16 h-16 rounded-full bg-emerald-200 text-black text-center flex my-3 ml-3">
        <p className="text-center font-bold font-sans text-black my-auto mx-auto justify-center">
          Logo
        </p>
      </div>

      <div className="ml-3">
        <p className="font-bold text-lg text-black font-serif">
          Front End Developer
        </p>
        <p className="font-lg ">PT Intersollusi Inter Asia</p>
        <p className="mt-3 font-base">Jakarta, Indonesia</p>
        <p>Rp 5,000,000 – Rp 7,500,000 per month</p>
        <p> Informasi & Komunikasi (Teknologi Informasi & Komunikasi)</p>
      </div>

      <div className="list-disc ml-3 my-3">
        <li>Work From Home</li>
        <li>Remote</li>
        <li>Full Time</li>
      </div>
    </div>
  );
};

export default CardLowongan;
