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
  const [activeJob, setActiveJob] = useState(lowonganList[0]);

  return (
    <div className="w-full flex bg-white justify-evenly">
      {/* TabsLowongan */}
      <div
        className={`flex flex-col w-11/12 md:w-1/3 my-5 gap-y-6 overflow-auto h-screen ${styles.cardTabs}`}
      >
        {lowonganList.map((item, index) => (
          <Fragment key={index}>
            <TabsLowongan {...item} onClick={() => setActiveJob(item)} />
          </Fragment>
        ))}
      </div>
      {/* CardLowongan */}
      <div
        className={`w-7/12 my-5 bg-white overflow-auto rounded-3xl h-screen hidden md:flex md:flex-col ${styles.deskripsiTabs}`}
      >
        <CardLowongan data={activeJob} />
      </div>
    </div>
  );
};

export default Page;