import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "作品集",
  description: "精選展示廣東易鼎鴻國際供應鏈管理有限公司（富日集團）的策展作品。透過光影與細節的捕捉，呈現工業精準與生活美學的深度融合。",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
