"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

const newsItems = [
  {
    id: 1,
    date: "2024.06.15",
    category: "品牌公告",
    title: "廣東易鼎鴻（富日集團）智慧工廠 2.0 正式落成",
    excerpt: "歷時兩年打造的全新智慧化生產線今日正式啟用，實現毫克級精準配料與全自動包裝流程。",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    date: "2024.05.20",
    category: "技術突破",
    title: "零礦物油綠色油墨研發成功，引領環保新標準",
    excerpt: "R&D 實驗室成功研發出新一代零礦物油膠印油墨，大幅降低揮發性有機物排放，守護印刷純淨。",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop"
  },
  {
    id: 3,
    date: "2024.04.12",
    category: "市場活動",
    title: "小琥哥受邀出席亞太國際印刷包裝展覽會",
    excerpt: "品牌經營者小琥哥將分享智慧製造如何賦能傳統油墨產業，探討綠色供應鏈的未來趨勢。",
    image: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 4,
    date: "2024.03.05",
    category: "企業文化",
    title: "匠心傳承：記易鼎鴻 32 年來的職人堅持",
    excerpt: "從台資背景到全球視野，我們始終堅持對品質的毫不妥協，每一滴油墨都承載著職人的靈魂。",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop"
  }
];

export default function NewsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      },
    },
  };

  return (
    <div className="bg-brand-black text-white selection:bg-brand-gold selection:text-brand-black min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-20" 
             style={{ 
               backgroundImage: `
                 linear-gradient(to right, rgba(212, 175, 55, 0.1) 1px, transparent 1px),
                 linear-gradient(to bottom, rgba(212, 175, 55, 0.1) 1px, transparent 1px)
               `,
               backgroundSize: '30px 30px',
               maskImage: 'linear-gradient(to bottom, black, transparent)',
               WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)'
             }} 
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-brand-gold tracking-[0.4em] text-xs uppercase font-medium mb-6 block">
              News & Updates
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-12 tracking-tight leading-tight">
              最新 <span className="text-brand-gold italic">動態</span>
            </h1>
            <div className="w-16 h-px bg-brand-gold mb-12" />
          </motion.div>
        </div>
      </section>

      {/* News Grid Section */}
      <section className="pb-40">
        <div className="container mx-auto px-6">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-24"
          >
            {newsItems.map((item) => (
              <motion.article 
                key={item.id} 
                variants={itemVariants}
                className="group cursor-pointer"
              >
                <Link href={`/news/${item.id}`} className="block">
                  <div className="relative aspect-[16/9] overflow-hidden mb-8 rounded-sm">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-all duration-700" />
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-1.5 bg-brand-black/60 backdrop-blur-md border border-brand-gold/20 text-brand-gold text-[10px] tracking-[0.2em] uppercase font-medium">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 px-2">
                    <div className="flex items-center gap-3 text-zinc-500 text-xs tracking-widest uppercase">
                      <Calendar size={14} className="text-brand-gold/60" />
                      {item.date}
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl text-white group-hover:text-brand-gold transition-colors duration-500 leading-snug">
                      {item.title}
                    </h2>
                    <p className="text-zinc-400 font-light leading-relaxed tracking-wide text-sm md:text-base line-clamp-2 max-w-xl">
                      {item.excerpt}
                    </p>
                    <div className="pt-4 flex items-center gap-2 text-brand-gold text-xs tracking-[0.2em] uppercase font-medium overflow-hidden">
                      <span className="relative inline-block">
                        閱讀更多
                        <span className="absolute bottom-0 left-0 w-full h-px bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                      </span>
                      <ArrowRight size={14} className="translate-x-0 group-hover:translate-x-2 transition-transform duration-500" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>

          {/* Pagination Placeholder */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-32 flex justify-center"
          >
            <button className="px-10 py-4 border border-brand-gold/20 text-brand-gold/40 hover:border-brand-gold hover:text-brand-gold transition-all duration-500 tracking-[0.3em] text-[10px] uppercase font-medium">
              加載更多動態
            </button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32 md:py-48 border-t border-brand-gold/10 bg-zinc-950/20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl mb-8">訂閱產業洞察</h2>
            <p className="text-zinc-500 font-light mb-12 max-w-md mx-auto tracking-wide">
              第一時間獲取智慧製造、環保油墨技術與品牌動態。
            </p>
            <div className="max-w-md mx-auto flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="電子郵件地址" 
                className="flex-1 bg-transparent border-b border-zinc-800 py-3 px-2 text-white placeholder:text-zinc-700 focus:outline-none focus:border-brand-gold transition-colors text-sm"
              />
              <button className="px-8 py-3 bg-brand-gold text-brand-black text-xs tracking-[0.2em] uppercase font-bold hover:bg-white transition-colors duration-500">
                立即訂閱
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
