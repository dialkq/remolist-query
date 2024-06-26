"use client";
import TabsLowongan from "@/components/common/TabsLowongan";
import { TabsLowonganProps, lowonganList } from "./informasi-teknologi-api";
import CardLowongan from "../informasi-teknologi/CardLowongan";
import styles from "./style.module.css";
import { Key, useState } from "react";
import Lottie from "lottie-react";
import animation from "./animation.json";
import Sidebar from "@/components/common/Sidebar";
import { Drawer, DrawerClose, DrawerContent } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "react-responsive";

const Page = () => {
  const [activeJob, setActiveJob] = useState<TabsLowonganProps | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const handleJobClick = (item: TabsLowonganProps) => {
    setActiveJob(item);
    if (isMobile) {
      setIsDrawerOpen(true);
    }
  };

  const handleClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="w-full flex justify-evenly">
      {/* SIDEBAR ON LAPTOP */}
      <div className="hidden lg:flex w-auto">
        <Sidebar />
      </div>

      <div className="flex flex-col lg:flex-row w-full">
        {/* SIDEBAR ON MOBILE */}
        <div className="flex lg:hidden">
          <Sidebar />
        </div>
        {/* TABS LOWONGAN */}
        <div className="flex w-full justify-evenly mx-auto">
          <div
            className={`flex flex-col w-11/12 md:w-1/3 mb-5 lg:my-5 gap-y-6 overflow-auto h-screen ${styles.cardTabs}`}
          >
            {lowonganList.data.map(
              (item: TabsLowonganProps, index: Key | null | undefined) => (
                <TabsLowongan
                  key={index}
                  {...item}
                  onClick={() => handleJobClick(item)}
                />
              )
            )}
          </div>
          
          {/* CARD LOWONGAN */}
          <div
            className={`w-7/12 mb-5 lg:my-5 overflow-auto rounded-3xl h-screen hidden md:flex md:flex-col ${styles.deskripsiTabs}`}
          >
            {activeJob ? (
              <CardLowongan data={activeJob} />
            ) : (
              <div className="mx-auto my-auto">
                <Lottie
                  className="h-40 w-40 mx-auto"
                  animationData={animation}
                />
                <p className="font-bold text-2xl text-center">
                  Anda belum memilih iklan lowongan kerja
                </p>
                <p className="font-semibold text-slate-500 text-center text-base">
                  Pilih iklan di sebelah kiri untuk melihat detailnya di sini.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* DRAWER */}
      <div className="flex md:hidden">
        <Drawer open={isDrawerOpen} onClose={handleClose}>
          <DrawerContent className="flex flex-col">
            <div>{activeJob && <CardLowongan data={activeJob} />}</div>
            <div className="flex justify-between mx-auto">
              <DrawerClose asChild className="bg-foreground/5">
                <Button variant="outline" onClick={handleClose}>
                  X
                </Button>
              </DrawerClose>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default Page;
