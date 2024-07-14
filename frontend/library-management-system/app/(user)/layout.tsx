import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "../components/nav";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}