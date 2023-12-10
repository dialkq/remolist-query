import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import clsx from "clsx";
import Sidebar from "@/components/common/Sidebar";
import LogoBar from "./components/common/LogoBar";

config.autoAddCss = false;

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Remolist",
  description: "better than weekend",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased mx-auto w-full bg-black",
          fontSans.variable
        )}
      >
        <div className="debug-red w-full flex flex-row max-w-[1300px] mx-auto bg-white">



          <Sidebar />
          
          <div className="flex flex-col w-full debug-green">{children}</div>
        </div>
      </body>
    </html>
  );
}
