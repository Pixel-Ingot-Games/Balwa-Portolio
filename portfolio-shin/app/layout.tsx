import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BackgroundPixelBlast from "../components/BackgroundPixelBlast";
import PortfolioMenu from "../components/PortfolioMenu";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter"
});


export const metadata: Metadata = {
  title: "Balwa Portfolio",
  description: "Unity Game Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <BackgroundPixelBlast />
        <PortfolioMenu />
        {children}
      </body>
    </html>
  );
}
