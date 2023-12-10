import LogoBar from "./components/LogoBar/LogoBar";
import Sidebar from "./components/Sidebar/Sidebar";

export default function Home() {
  return (
    <main className="w-full flex ">
      <div className="h-full flex">
        <Sidebar />
      </div>
      {/* <div className="w-full">
        <LogoBar />
      </div> */}
    </main>
  );
}