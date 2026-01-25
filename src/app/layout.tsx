import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next"
import Navbar2 from "../../components/Navbar2";
import ContactSection from "../../components/ContactSection";
import Footer2 from "../../components/Footer2";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SixthGenX",
  description: "SixthGenX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <Navbar2></Navbar2>
          <Toaster position="top-right" />
        {children}
        <Analytics />
        <ContactSection></ContactSection>
        <Footer2></Footer2>
      </body>
    </html>
  );
}
