import type { Metadata } from "next";
import { DM_Sans } from "next/font/google"
import "./globals.css";
import Header from "@/components/Header";

const dmSans = DM_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mars Seismic Detection",
  description: "Created with love by Yvyryrýi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} antialiased bg text`}>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
