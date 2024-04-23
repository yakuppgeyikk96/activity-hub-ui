import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "./globals.css";

import { PrimeReactProvider } from "primereact/api";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <PrimeReactProvider>{children}</PrimeReactProvider>
      </body>
    </html>
  );
}
