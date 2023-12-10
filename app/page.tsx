import FiturBar from "./components/common/FiturBar/FiturBar";
import LogoBar from "./components/common/LogoBar/LogoBar";
import Sidebar from "./components/common/Sidebar/Sidebar";

export default function Home() {
  return (
    <main className="w-full flex">
      <div className="w-1/5 h-full flex">
        <Sidebar />
      </div>
      <div className="w-full mx-auto flex flex-col">
        <LogoBar />
        <FiturBar />
      </div>
    </main>
  );
}