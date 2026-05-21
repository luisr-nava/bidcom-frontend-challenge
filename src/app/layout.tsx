import type { Metadata } from "next";

import "./globals.css";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Bidcom Challenge",
  description: "Frontend technical challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}

