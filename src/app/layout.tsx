import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kawan Gadai",
  description:
    "Kami hadirkan solusi untuk anda dengan pinjaman dana tunai jaminan BPKB motor dan mobil dari multifinance berizin otoritas jasa keuangan (OJK) yaitu WOM Finance, Adira, FIF, BFI, Kredit Plus, dan Mega Finance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
