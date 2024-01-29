import CardLowongan from "@/components/common/CardLowongan";

const Page = () => {
  return (
    <div className="w-full flex bg-white">
      <div className="flex flex-col w-1/3">
        <CardLowongan />
        <CardLowongan />
        <CardLowongan />
        <CardLowongan />
        <CardLowongan />
        <CardLowongan />
      </div>
    </div>
  );
};

export default Page;
