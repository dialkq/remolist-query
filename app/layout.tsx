
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Sidebar from "@/components/common/Sidebar";
import LogoBar from "./components/common/LogoBar";

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
      <body className="flex flex-col font-sans w-full">
        <div className="flex flex-col w-full">
          <LogoBar />
        </div>
        <div className="flex flex-col md:flex-row w-full">
          <div className="flex w-auto bg-white">
            <Sidebar />
          </div>
          <div className="w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
