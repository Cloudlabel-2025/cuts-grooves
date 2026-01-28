import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import BootstrapClient from "@/app/Components/BootstrapClient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cuts & Grooves",
  description: "Architectural design studio specialising in refined, context-driven spaces.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning={true}>
        <BootstrapClient />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
