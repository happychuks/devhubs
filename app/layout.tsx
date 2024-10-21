import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import { Toaster } from "@/components/ui/sonner";
import { Footer } from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevHubs",
  description: "A platform for developers/techies to showcase, share, and monetize their projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
        <Navbar />
        <main className="flex-grow mb-16">
          {children}
        </main>
        <Toaster richColors theme="light" closeButton />
        <Footer />
      </body>
    </html>
  );
}