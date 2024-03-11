"use client";
import TabsLowongan from "@/components/common/TabsLowongan";
import { TabsLowonganProps } from "@/components/common/TabsLowongan";
import CardLowongan from "@/components/common/CardLowongan";
import styles from "./style.module.css";
import { Fragment } from "react";
import { useState } from "react";

const lowonganList: TabsLowonganProps[] = [
  {
    title: "Front End Developer",
    company: "PT Intersollusi Inter Asia",
    salary: "Rp 5,000,000 – Rp 7,500,000 per month",
    location: "Jakarta, Indonesia",
    section: "Informasi & Komunikasi (Teknologi Informasi & Komunikasi)",
    type: "Full Time",
    description: "",
  },
  {
    title: "Back End Developer",
    company: "PT Inte Inte Asia",
    salary: "Rp 15,000,000 – Rp 87,500,000 per month",
    location: "Bogor, Indonesia",
    section: "Informasi & Komunikasi (Teknologi Informasi & Komunikasi)",
    type: "Full Time",
    description: "",
  },
  {
    title: "Full Stack Developer",
    company: "PT Dinamis",
    salary: "Rp 55,000,000 – Rp 87,500,000 per month",
    location: "Bandung, Indonesia",
    section: "Informasi & Komunikasi (Teknologi Informasi & Komunikasi)",
    type: "Full Time",
    description: "",
  },
];

const Page = () => {
  const [activeJob, setActiveJob] = useState<TabsLowonganProps | null>(null);

  const handleJobClick = (item: TabsLowonganProps) => {
    setActiveJob(item);
  };

  return (
    <div className="w-full flex bg-white justify-evenly">
      {/* Bagian TabsLowongan */}
      <div
        className={`flex flex-col w-11/12 md:w-1/3 mb-5 lg:my-5 gap-y-6 overflow-auto h-screen ${styles.cardTabs}`}
      >
        {lowonganList.map((item, index) => (
          <TabsLowongan
            key={index}
            {...item}
            onClick={() => handleJobClick(item)}
          />
        ))}
      </div>
      <div
        className={`w-7/12 mb-5 lg:my-5 bg-white overflow-auto rounded-3xl h-screen hidden md:flex md:flex-col ${styles.deskripsiTabs}`}
      >
        {activeJob ? (
          <CardLowongan data={activeJob} />
        ) : (
          <div className="mx-auto my-auto">
            <p className="font-bold text-2xl text-center">Anda belum memilih iklan lowongan kerja</p>
            <p className="font-semibold text-slate-500 text-center text-base mt-2">Pilih iklan di sebelah kiri untuk melihat detailnya di sini.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
