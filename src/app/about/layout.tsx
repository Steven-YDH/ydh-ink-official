import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "關於我們",
  description: "探索廣東易鼎鴻國際供應鏈管理有限公司（富日集團）的職人傳承與革新旅程。從油墨工藝的絕對精準，到跨界融合的極簡奢華美學。",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
