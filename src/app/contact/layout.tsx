import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "聯繫我們",
  description: "開創極致的對話。無論是商務合作、技術諮詢或是環保工藝探討，廣東易鼎鴻國際供應鏈管理有限公司（富日集團）隨時準備好與您交流。",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
