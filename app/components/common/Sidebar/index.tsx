"use client";
import { useState, useEffect } from "react";
import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Button } from "@/components/ui/button";
import { useMedia } from "react-use";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function SidebarComponent() {
  const isWide = useMedia("(min-width: 640px)");
  const [toggled, setToggled] = useState(false);

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
            className="font-mono text-md sm:text-lg font-bold text-black"
          >
            <Link href="/data-list/corporate-list">
              <MenuItem>Corporate List</MenuItem>
            </Link>
            <Link href="/data-list/expert-profile">
              <MenuItem>Expert Profile</MenuItem>
            </Link>
          </SubMenu>

          <SubMenu
            icon={<Icon name="Lowongan" icon={"ic:baseline-work"} />}
            label="Lowongan"
            className="font-mono text-md sm:text-lg font-bold text-black"
          >
            <Link href="/lowongan/it">
              <MenuItem>IT</MenuItem>
            </Link>
            <Link href="/lowongan/finance">
              <MenuItem>Finance</MenuItem>
            </Link>
            <Link href="/lowongan/hr">
              <MenuItem>HR</MenuItem>
            </Link>
            <Link href="/lowongan/marketing">
              <MenuItem>Marketing</MenuItem>
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
