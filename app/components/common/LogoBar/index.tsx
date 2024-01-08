"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Icon } from "@iconify/react";
import uiUserProfile from "@iconify/icons-healthicons/ui-user-profile";
import BtnSignOut from "../BtnSignOut";

const LogoBar = () => {
  const pathname = usePathname();
  const name =
    typeof window !== "undefined" ? localStorage.getItem("name") : null;

  return (
    <div className="w-full flex justify-between py-4 bg-black border-b border-black shadow-sm">
      <Link href="/">
        <p className="text-white lg:text-lg ml-6 sm:ml-8 font-lato font-roboto-slab tracking-widest text-center p-1">
          Remolist
        </p>
      </Link>

      {pathname === "/auth/sign-in" ? (
        <Link href="/auth/sign-up">
          <p className="text-white text-base mr-6 sm:mr-8 p-1 hover:text-slate-400">
            Sign up
          </p>
        </Link>
      ) : pathname === "/auth/sign-up" || pathname === "/" ? (
        <Link href="/auth/sign-in">
          <p className="text-white text-base mr-6 sm:mr-8 p-1 hover:text-slate-400">
            Sign in
          </p>
        </Link>
      ) : (
        <div className="flex justify-between items-center mr-6 sm:mr-8 p-1">
          {name && (
            <div className="flex justify-between items-center mr-8 sm:mr-12">
              <Icon
                icon={uiUserProfile}
                height="30"
                className="text-white my-auto mr-1"
              />
              <p className="text-white text-sm font-mono hidden sm:flex">
                {name}
              </p>
            </div>
          )}
          <BtnSignOut />
        </div>
      )}
    </div>
  );
};

export default LogoBar;
