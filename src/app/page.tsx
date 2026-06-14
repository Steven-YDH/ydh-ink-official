"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Globe, Users, Settings, Palette, ShieldCheck } from "lucide-react";

const capabilities = [
  {
    icon: Globe,
    title: "全球貿易賦能",
    desc: "深耕全球貿易鏈路，憑藉 32 年大廠積澱，提供完善的國際供應鏈賦能。"
  },
  {
    icon: Users,
    title: "戰略通路加盟",
    desc: "熱烈招募全國各省策略夥伴，以極具競爭力的代理政策與技術支持，共創雙贏。"
  },
  {
    icon: Settings,
    title: "頂尖研發定製",
    desc: "資深 R&D 實驗室支持，為您量身打造專屬油墨配方與品牌包裝。"
  },
  {
    icon: Palette,
    title: "色彩美學定製",
    desc: "引進國際領先電腦配色系統，毫克級精準調校，完美還原品牌核心色彩。"
  },
  {
    icon: ShieldCheck,
    title: "智造品質標竿",
    desc: "智慧化封閉生產線，零誤差出廠檢驗標準，守護每一份印刷品質。"
  }
];

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <div className="bg-brand-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - Luxury Ink Fluid Visual */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ 
            backgroundImage: "url('/images/hero-bg.png')",
          }}
        >
          {/* Animated Overlay for depth - tuned for fluid beauty */}
          <motion.div 
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0 bg-brand-black/60" 
          />
        </div>

        <motion.div 
          className="relative z-10 container mx-auto px-6 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="inline-block mb-4 overflow-hidden"
            variants={itemVariants}
          >
            <span className="text-brand-gold tracking-[0.4em] text-[10px] md:text-xs uppercase font-medium">
              綠色智慧工廠
            </span>
          </motion.div>

          <motion.h1 
            className="font-serif text-3xl md:text-5xl lg:text-6xl mb-6 md:mb-8 tracking-tight leading-[1.3] drop-shadow-[0_4px_16px_rgba(0,0,0,1)]"
            variants={itemVariants}
          >
            傳承 32 年台資匠心 <br className="md:hidden" />
            <span className="text-brand-gold italic">智慧化綠色油墨製造專家</span>
          </motion.h1>
          
          <motion.p 
            className="max-w-2xl mx-auto text-base md:text-xl text-zinc-100 font-normal mb-10 md:mb-12 tracking-wide leading-relaxed drop-shadow-[0_4px_16px_rgba(0,0,0,1)]"
            variants={itemVariants}
          >
            廣東易鼎鴻國際供應鏈管理有限公司（富日集團）：創立於 1993 年，<br className="hidden md:block" />
            以毫克級精準與「綠色印刷，守護純淨」願景，定義智慧製造新高度。
          </motion.p>

          <motion.div variants={itemVariants} className="mb-20">
            <Link 
              href="/gallery"
              className="group relative inline-flex items-center justify-center px-8 md:px-10 py-3 md:py-4 border border-brand-gold/30 text-brand-gold hover:text-brand-black transition-all duration-500 tracking-[0.2em] text-[10px] md:text-sm uppercase font-medium overflow-hidden"
            >
              <span className="relative z-10">探索油墨</span>
              <div className="absolute inset-0 bg-brand-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Subtle Scroll Indicator (optimized to prevent overlapping on mobile) */}
        <motion.div 
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center gap-2 hidden md:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 vertical-text font-medium">向下滑動</span>
          <div className="w-px h-8 bg-gradient-to-b from-brand-gold to-transparent" />
        </motion.div>
      </section>

      {/* Core Capabilities Section */}
      <section className="py-32 md:py-48 bg-brand-black border-t border-brand-gold/10 relative overflow-hidden">
        {/* Industrial Blueprint Background - Micrometer-scale Fine Grid */}
        <div className="absolute inset-0 pointer-events-none" 
             style={{ 
               backgroundImage: `
                 linear-gradient(to right, rgba(212, 175, 55, 0.08) 1px, transparent 1px),
                 linear-gradient(to bottom, rgba(212, 175, 55, 0.08) 1px, transparent 1px)
               `,
               backgroundSize: '24px 24px',
               maskImage: 'radial-gradient(circle at center, black 40%, transparent 90%)',
               WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 90%)'
             }} 
        />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-brand-gold tracking-[0.3em] text-[10px] md:text-xs uppercase font-medium">Core Capabilities</span>
            <h2 className="font-serif text-3xl md:text-5xl mt-3 mb-6 leading-tight">
              五大核心實力
            </h2>
            <div className="w-12 h-px bg-brand-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {capabilities.map((cap, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative bg-zinc-900/20 border border-brand-gold/10 p-8 flex flex-col h-full rounded-sm hover:bg-zinc-900/60 hover:border-brand-gold/30 transition-all duration-500 overflow-hidden"
              >
                {/* Accent glow on hover */}
                <div className="absolute -inset-px bg-gradient-to-b from-brand-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Floating luxury number index */}
                <div className="absolute top-4 right-6 text-brand-gold/5 text-5xl font-serif select-none pointer-events-none group-hover:text-brand-gold/10 transition-colors duration-500">
                  {`0${index + 1}`}
                </div>

                <div className="mb-8 text-brand-gold/80 group-hover:text-brand-gold transition-colors duration-300">
                  <cap.icon size={40} strokeWidth={1} />
                </div>
                
                <h3 className="font-serif text-xl mb-4 text-white group-hover:text-brand-gold transition-colors duration-300">
                  {cap.title}
                </h3>
                
                <p className="text-zinc-400 text-sm font-light leading-relaxed mt-8">
                  {cap.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Gallery Section */}
      <section className="py-40 bg-zinc-950/50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-6">精選展示</h2>
            <div className="w-12 h-px bg-brand-gold mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              { 
                url: "/images/products/uv-r/4b7f65c9a6e5461bd9e1710951aba06.jpg",
                title: "UV-R 系列",
                category: "智慧高效 UV 油墨",
                rotate: "md:-rotate-1",
                y: "md:translate-y-4"
              },
              { 
                url: "/images/products/soy-oil/BC四色墨（2.5kg）/d465d284e09829ab2fa2870f93db251.jpg",
                title: "BC 大豆系列",
                category: "環保大豆油墨",
                rotate: "md:rotate-0",
                y: "md:-translate-y-4"
              },
              { 
                url: "/images/products/0-mineral-oil-offset-ink/FSC 0矿物油四色墨（1kg）/7025f706e3ed025a4ed8f3de99160c1.jpg",
                title: "0 礦物油油墨系列",
                category: "環保無烴油墨",
                rotate: "md:rotate-1",
                y: "md:translate-y-8"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`group cursor-pointer ${item.rotate} ${item.y}`}
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-zinc-950 rounded-sm flex items-center justify-center p-8 border border-zinc-900 group-hover:border-brand-gold/30 transition-all duration-500">
                  <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-500" />
                  <img 
                    src={item.url} 
                    alt={item.title}
                    className="relative z-10 w-full h-full object-contain group-hover:scale-110 transition-all duration-700"
                  />
                </div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-brand-gold mb-2">{item.category}</p>
                <h3 className="font-serif text-xl tracking-wide group-hover:text-brand-gold transition-colors duration-300">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-40 md:py-60 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-serif text-4xl md:text-6xl mb-12 leading-[1.3]">
              我們與極致的距離，<br className="md:hidden" />
              <span className="text-brand-gold italic">只在您的螢幕與滑鼠之間</span>
            </h2>
            <p className="max-w-xl mx-auto text-zinc-400 font-light text-lg mb-16 tracking-wide">
              不論是商務合作、各省代理渠道拓展，或是高端油墨定製開發，我們隨時準備好與您交流。
            </p>
            <Link 
              href="/contact"
              className="px-12 py-5 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all duration-500 tracking-[0.3em] text-xs uppercase font-medium"
            >
              聯繫我們
            </Link>
          </motion.div>
        </div>
        
        {/* Decorative Background Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] pointer-events-none opacity-20">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-gold/20 via-transparent to-transparent" />
        </div>
      </section>
    </div>
  );
}

