import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const NunitoSans = Nunito_Sans({
  variable: "--Nunito_Sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Aagam Doshi",
  description:
    "I'm a web developer actively seeking new opportunities and my inbox is open for messages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${NunitoSans.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
