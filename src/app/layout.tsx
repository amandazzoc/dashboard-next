import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { cn } from '@/lib/utils'

import {Sidebar} from '@/components/sidebar'
import Head from "next/head";

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Amanda Atêlie",
  description: "Site da loja Amanda Atêlie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        <Sidebar />

        {children}
      </body>
    </html>
  );
}
