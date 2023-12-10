import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-full h-screen flex flex-col bg-white shadow-md shadow-black">
      {/* PROFILE ICON */}
      <div className="lg:py-5">
        <Image
          className="h-20 w-20 mx-auto"
          src="/image/profileIcon.png"
          width={500}
          height={500}
          alt="Profile Icon"
        />
        <p id="showName" className="text-center text-xs font-light mt-1"></p>
      </div>
      {/* <!-- LIST BAR --> */}
      <div className="lg:py-3">
        <ul className="">
          <Link href="pages/corporate-member">
            <li className="font-sans font-bold lg:text-base lg:py-3 lg:pl-5 hover:bg-blue-50 cursor-pointer login-check">
              Corporate Member
            </li>
          </Link>

          <Link href="pages/expert">
            <li className="font-sans font-bold lg:text-base lg:py-3 lg:pl-5 hover:bg-blue-50 cursor-pointer login-check">
              Expert
            </li>
          </Link>

          <Link href="pages/individual-member">
            <li className="font-sans font-bold lg:text-base lg:py-3 lg:pl-5 hover:bg-blue-50 cursor-pointer login-check">
              individual Member
            </li>
          </Link>

          <Link href="pages/new-companies">
            <li className="font-sans font-bold lg:text-base lg:py-3 lg:pl-5 hover:bg-blue-50 cursor-pointer login-check">
              New Companies
            </li>
          </Link>

          <Link href="pages/series">
            <li className="font-sans font-bold lg:text-base lg:py-3 lg:pl-5 hover:bg-blue-50 cursor-pointer login-check">
              Series
            </li>
          </Link>

          <Link href="pages/movie">
            <li className="font-sans font-bold lg:text-base lg:py-3 lg:pl-5 hover:bg-blue-50 cursor-pointer login-check">
              Movie
            </li>
          </Link>

          <Link href="pages/administrator">
            <li className="font-sans font-bold lg:text-base lg:py-3 lg:pl-5 hover:bg-blue-50 cursor-pointer login-check">
              Administrator
            </li>
          </Link>

          <Link href="pages/ads-management">
            <li className="font-sans font-bold lg:text-base lg:py-3 lg:pl-5 hover:bg-blue-50 cursor-pointer login-check">
              Ads Management
            </li>
          </Link>

          <Link href="pages/stock">
            <li className="font-sans font-bold lg:text-base lg:py-3 lg:pl-5 hover:bg-blue-50 cursor-pointer login-check">
              Stock
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
