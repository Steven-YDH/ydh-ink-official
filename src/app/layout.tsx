import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#1A1A1A",
};

export const metadata: Metadata = {
  title: "YDH | 易鼎鴻",
  description: "廣東易鼎鴻國際供應鏈管理有限公司（富日集團）官方網站 - 展現極簡奢華感 (Minimalist Premium) 的職人精神與生活美學。從油墨精準到健身美學，以極致純粹定義奢華。",
  keywords: ["廣東易鼎鴻國際供應鏈管理有限公司（富日集團）", "富日集團", "極簡奢華", "Minimalist Premium", "職人精神", "油墨專家", "生活美學", "品牌官網"],
  authors: [{ name: "廣東易鼎鴻國際供應鏈管理有限公司（富日集團）" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className={`h-full antialiased ${inter.variable} ${playfair.variable}`}>
      <body className="min-h-full flex flex-col font-sans bg-brand-black text-white">
        <Navbar />
        <main className="flex-grow pt-24 md:pt-32">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
