"use client";
import { useState, useEffect } from "react";
import React from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Button } from "@/components/ui/button";
import { useMedia } from "react-use";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function SidebarComponent() {
  const isWide = useMedia("(min-width: 640px)");
  const [toggled, setToggled] = useState(false);
  const pathname = usePathname();
  // STYLING BASED ON PAGES LOCATION
  const getClassName = (path: string) => {
    return pathname === path ? "text-blue-700 italic" : "italic text-base";
  };

  return (
    <div className="flex w-full sm:min-h-screen">
      <Sidebar
        onBackdropClick={() => setToggled(false)}
        toggled={toggled}
        breakPoint={isWide ? undefined : "always"}
      >
        <Menu>
          <SubMenu
            icon={<Icon name="Data List" icon={"mingcute:news-fill"} />}
            label="Data List"
            className="font-sans text-base sm:text-lg font-bold text-black"
          >
            <Link href="/data-list/corporate-status">
              <MenuItem className={getClassName("/data-list/corporate-status")}>
                Corporate Status
              </MenuItem>
            </Link>
            <Link href="/data-list/country-list">
              <MenuItem className={getClassName("/data-list/country-list")}>Country List</MenuItem>
            </Link>
            <Link href="/data-list/individual-member">
            <MenuItem className={getClassName('/data-list/individual-member')}>Individual Member</MenuItem>
            </Link>
          </SubMenu>

          <SubMenu
            icon={<Icon name="Lowongan" icon={"ic:baseline-work"} />}
            label="Lowongan"
            className="font-sans text-base sm:text-lg font-bold text-black"
          >
            <Link href="/lowongan/it">
              <MenuItem className="text-base">IT</MenuItem>
            </Link>
            <Link href="/lowongan/finance">
              <MenuItem className="text-base">Finance</MenuItem>
            </Link>
            <Link href="/lowongan/hr">
              <MenuItem className="text-base">HR</MenuItem>
            </Link>
            <Link href="/lowongan/marketing">
              <MenuItem className="text-base">Marketing</MenuItem>
            </Link>
          </SubMenu>
        </Menu>
      </Sidebar>

      {/* BUTTON TOGGLED */}
      <main className="flex sm:hidden w-full mx-auto py-2">
        <Button
          className="sb-button flex sm:hidden ml-6"
          onClick={() => setToggled(!toggled)}
        >
          Menu
        </Button>
      </main>
    </div>
  );
}
