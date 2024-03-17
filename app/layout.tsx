import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import Nav from "@/components/Nav2";

import "./globals.css";
import Nav1 from "@/components/Nav1";
import Footer from "@/components/footer";
import Navber from '@/components/navbar';

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "หมดเป๋า",
  description: "Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Nav1/>
        <Nav/>
        <Navber/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
