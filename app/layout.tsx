import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import GoogleAnalytics from '@/components/GoogleAnalytics';

import CookieBanner from '@/components/CookieBanner';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Engels development",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalytics GA_MEASUREMENT_ID='G-0000000000'/>
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <CookieBanner/>
        <Footer />
      </body>
    </html>
  );
}
