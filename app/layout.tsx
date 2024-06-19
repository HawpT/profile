import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "material-icons/css/material-icons.scss";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
 });

export const metadata: Metadata = {
  title: "White Eyebrow LLC",
  description: "Custom software and technology solutions for small and medium businesses."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
