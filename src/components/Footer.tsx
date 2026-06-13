"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, Link as LinkIcon, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black border-t border-brand-gold/10 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand section */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <img 
                src="/images/logo.png" 
                alt="YDH Logo" 
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              傳承 32 年台資匠心，智慧化綠色油墨製造專家。將製造精準與美學深度融合，為您提供頂級環保油墨解決方案。
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-6">
            <h4 className="text-white text-sm uppercase tracking-[0.2em] font-medium">導覽目錄</h4>
            <div className="flex flex-col space-y-4">
              <Link href="/about" className="text-white/60 hover:text-brand-gold text-sm transition-colors">關於我們</Link>
              <Link href="/gallery" className="text-white/60 hover:text-brand-gold text-sm transition-colors">產品</Link>
              <Link href="/contact" className="text-white/60 hover:text-brand-gold text-sm transition-colors">聯絡我們</Link>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-6">
            <h4 className="text-white text-sm uppercase tracking-[0.2em] font-medium">社群聯絡</h4>
            <div className="flex space-x-6">
              <a href="#" className="text-white/60 hover:text-brand-gold transition-colors" aria-label="Website">
                <Globe size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-brand-gold transition-colors" aria-label="Social">
                <LinkIcon size={20} />
              </a>
              <a href="mailto:contact@example.com" className="text-white/60 hover:text-brand-gold transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/30 text-xs tracking-wider uppercase">
            © {currentYear} 廣東易鼎鴻國際供應鏈管理有限公司（富日集團）. 版權所有。
          </p>
          <p className="text-white/30 text-xs tracking-wider uppercase">
            追求極致 · 定義非凡
          </p>
        </div>
      </div>
    </footer>
  );
}
