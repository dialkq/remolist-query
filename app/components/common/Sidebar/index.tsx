"use client";
import { useState } from "react";
import React from "react";
import { usePathname } from "next/navigation";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Button } from "@/components/ui/button";
import { useMedia } from "react-use";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { RiCompassDiscoverLine } from "react-icons/ri";

export default function SidebarComponent() {
  const isWide = useMedia("(min-width: 1024px)");
  const [toggled, setToggled] = useState(false);
  const pathname = usePathname();
  // STYLING BASED ON PAGES LOCATION
  const getBlueName = (path: string) => {
    return pathname === path ? "text-blue-700 italic" : "italic text-base";
  };

  const getGreenName = (path: string) => {
    return pathname === path ? "text-emerald-700 italic" : "italic text-base";
  };

  return (
    <div className="flex w-full lg:min-h-screen">
      <Sidebar
        onBackdropClick={() => setToggled(false)}
        toggled={toggled}
        breakPoint={isWide ? undefined : "always"}
      >
        <Menu>
          <SubMenu
            icon={<RiCompassDiscoverLine className="text-indigo-700 text-3xl text-center" />}
            label="Discover"
            className="font-sans text-base sm:text-lg font-bold text-black"
          >
            <Link href="/discover/movie">
              <MenuItem className={getBlueName("/discover/movie")}>
                Movie
              </MenuItem>
            </Link>
            <Link href="/discover/tv">
              <MenuItem className={getBlueName("/discover/tv")}>TV</MenuItem>
            </Link>
          </SubMenu>

          <SubMenu
            icon={
              <Icon
                name="Lowongan"
                icon={"ic:baseline-work"}
                className="text-emerald-700 text-2xl text-center"
              />
            }
            label="Lowongan"
            className="font-sans text-base sm:text-lg font-bold text-black"
          >
            <Link href="/lowongan/informasi-teknologi">
              <MenuItem
                className={getGreenName("/lowongan/informasi-teknologi")}
              >
                IT
              </MenuItem>
            </Link>
            <Link href="/lowongan/finance">
              <MenuItem className={getGreenName("/lowongan/finance")}>
                Finance
              </MenuItem>
            </Link>
          </SubMenu>
        </Menu>
      </Sidebar>

      {/* BUTTON TOGGLED */}
      <main className="flex lg:hidden w-full py-2 mx-auto">
        <Button
          className="sb-button flex mx-auto lg:hidden bg-black"
          onClick={() => setToggled(!toggled)}
        >
          Menu
        </Button>
      </main>
    </div>
  );
}
