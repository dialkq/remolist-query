//   const [activeJob, setActiveJob] = useState<TabsLowonganProps | null>(null);

  //   const handleJobClick = (item: TabsLowonganProps) => {
  //     setActiveJob(item);
  //   };

  //   return (
  //     <div className="w-full flex justify-evenly">
  //       {/* SIDEBAR ON LAPTOP */}
  //       <div className="hidden lg:flex w-auto">
  //         <Sidebar />
  //       </div>

  //       <div className="flex flex-col lg:flex-row w-full">
  //         {/* SIDEBAR ON MOBILE */}
  //         <div className="flex lg:hidden">
  //           <Sidebar />
  //         </div>
  //         {/* TABS LOWONGAN */}
  //         <div className="flex w-full justify-evenly mx-auto">
  //           <div
  //             className={`flex flex-col w-full md:w-1/3 mb-5 lg:my-5 gap-y-6 overflow-auto h-screen ${styles.cardTabs}`}
  //           >
  //             {lowonganList.data.map(
  //               (item: TabsLowonganProps, index: Key | null | undefined) => (
  //                 <TabsLowongan
  //                   key={index}
  //                   {...item}
  //                   onClick={() => handleJobClick(item)}
  //                 />
  //               )
  //             )}
  //           </div>
  //           {/* CARD LOWONGAN */}
  //           <div
  //             className={`bg-foreground/5 w-7/12 mb-5 lg:my-5 overflow-auto rounded-3xl h-screen hidden md:flex md:flex-col ${styles.deskripsiTabs}`}
  //           >
  //             {activeJob ? (
  //               <CardLowongan data={activeJob} />
  //             ) : (
  //               <div className="mx-auto my-auto">
  //                 <Lottie
  //                   className="h-40 w-40 mx-auto"
  //                   animationData={animation}
  //                 />
  //                 <p className="font-bold text-2xl text-center">
  //                   Anda belum memilih iklan lowongan kerja
  //                 </p>
  //                 <p className="font-semibold text-foreground/70 text-center text-base">
  //                   Pilih iklan di sebelah kiri untuk melihat detailnya di sini.
  //                 </p>
  //               </div>
  //             )}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };