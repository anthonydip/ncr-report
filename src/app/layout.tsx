import "./globals.css";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata = {
  title: 'NCR Work Term Report',
  description: 'NCR Work Term Report - Anthony Dip',
};

const RootLayout = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <html lang="en" className="text-white">
      <body className={`${inter.variable} font-sans bg-zinc-950`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
