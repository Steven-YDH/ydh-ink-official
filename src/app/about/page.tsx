"use client";

import { motion } from "framer-motion";
import { 
  Zap, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Target, 
  Award 
} from "lucide-react";

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const timelineData = [
    {
      year: "1993",
      title: "台資背景・東莞創立",
      description: "於東莞正式創立，開啟台資工藝傳承，專注於高品質膠印油墨的研發與製造。",
    },
    {
      year: "2010s",
      title: "自動化生產升級",
      description: "全面導入自動化生產設備與精密監測系統，大幅提升生產精度與品質穩定度。",
    },
    {
      year: "2024",
      title: "環保升級・智造未來",
      description: "全面啟動「綠色守護計劃」，深耕大豆油墨與零礦物油研發，並導入 Industry 4.0 系統實現毫克級精準製造。",
    },
  ];

  const expertiseData = [
    { icon: <Layers className="w-8 h-8" />, title: "環保 R&D 研發", desc: "深耕綠色印刷技術，研發 BC 大豆系列與 FSC 零礦物油油墨，實現環境永續。" },
    { icon: <ShieldCheck className="w-8 h-8" />, title: "毫克級精密品管", desc: "建立嚴苛的檢測體系，確保每一批油墨的色彩飽和度與乾燥性能達到精密標準。" },
    { icon: <Cpu className="w-8 h-8" />, title: "智慧化數據生產", desc: "透過 Industry 4.0 系統實時監控，將傳統經驗轉化為精準數據，達成 100% 穩定產出。" },
    { icon: <Target className="w-8 h-8" />, title: "產業精準對接", desc: "為包裝與商業印刷提供量身定制的油墨方案，優化印刷效能與成本效益。" },
    { icon: <Zap className="w-8 h-8" />, title: "全自動化流程", desc: "引領產業自動化轉型，大幅減少人工干預，將工藝精準度推向新高度。" },
    { icon: <Award className="w-8 h-8" />, title: "32 年信譽傳承", desc: "累積超過三十載的台資製造經驗，以「綠色印刷」核心理念服務全球客戶。" },
  ];

  return (
    <div className="relative bg-brand-black text-white selection:bg-brand-gold selection:text-brand-black overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.06]" 
           style={{ backgroundImage: `linear-gradient(#c5a367 1px, transparent 1px), linear-gradient(90deg, #c5a367 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[15%] -left-[10%] w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[120px]" />
        <div className="absolute top-[50%] -right-[10%] w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[5%] left-[10%] w-[500px] h-[500px] bg-brand-gold/8 rounded-full blur-[100px]" />
      </div>

      {/* Hero Section */}
      <section className="pt-20 pb-40 md:pt-32 md:pb-60">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <span className="text-brand-gold tracking-[0.4em] text-xs uppercase font-medium mb-6 block">
              品牌願景
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-12 tracking-tight leading-tight">
              綠色印刷，守護純淨 <br />
              <span className="text-brand-gold italic">定義智慧製造新高度</span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl font-light max-w-2xl leading-relaxed tracking-wide">
              我們致力於大豆油墨研發與零礦物油承諾，透過毫克級精準的智慧生產，將環境永續落實於每一滴色彩。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section: Vertical Minimalist Timeline */}
      <section className="py-40 bg-zinc-950/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-40">
              <h2 className="font-serif text-4xl md:text-5xl mb-6">傳承與革新</h2>
              <p className="text-zinc-500 font-light tracking-wide leading-relaxed">
                一段跨越時光的旅程，記錄了從工廠車間到品牌殿堂的每一個關鍵轉折。
              </p>
            </div>
            
            <div className="md:col-span-8 relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-brand-gold/20 -translate-x-1/2" />
              
              <div className="space-y-24 relative">
                {timelineData.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className={`flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                  >
                    {/* Circle on the line */}
                    <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-brand-gold rounded-full -translate-x-1/2 mt-2 z-10" />
                    
                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'} pl-8 md:pl-0`}>
                      <div className="bg-zinc-900/40 backdrop-blur-md border border-white/5 p-8 rounded-2xl hover:border-brand-gold/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(197,163,103,0.1)] group">
                        <span className="font-serif text-3xl text-brand-gold mb-2 block">{item.year}</span>
                        <h3 className="text-xl font-medium mb-4 tracking-wider group-hover:text-brand-gold transition-colors">{item.title}</h3>
                        <p className="text-zinc-400 font-light leading-relaxed tracking-wide">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:block w-1/2" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section: Xiao Hu Ge */}
      <section className="py-40 md:py-60 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10">
                <div 
                  className="absolute inset-0 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10">
                  <span className="text-brand-gold tracking-[0.4em] text-xs uppercase font-medium mb-2 block">Founder</span>
                  <h3 className="text-3xl font-serif">小琥哥</h3>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-brand-gold/30" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="text-brand-gold tracking-[0.4em] text-xs uppercase font-medium mb-6 block">
                領航者執念
              </span>
              <h2 className="font-serif text-4xl md:text-6xl mb-10 leading-tight">
                將健身的自律 <br />
                <span className="text-brand-gold italic">淬煉成工業的精密</span>
              </h2>
              <div className="space-y-8 text-zinc-400 font-light text-lg leading-relaxed tracking-wide">
                <p>
                  對小琥哥而言，深夜健身房的最後一組推舉，與工廠車間裡對油墨配方 0.01 毫克的微調，在本質上是相同的——那是對極致的偏執，也是對自我承諾的踐行。
                </p>
                <p>
                  「如果不能做到最好，那寧可不做。」這份對自律的堅持，被他完整平移至工業製造領域。在追求產能與利潤的洪流中，他始終堅持「綠色環保」的初心，深耕大豆油墨與零礦物油研發，只為了給下一代留下一片純淨的藍天。
                </p>
                <p className="text-brand-gold/80 italic font-serif text-xl border-l-2 border-brand-gold pl-6 py-2">
                  "我們不只是在製造油墨，我們是在透過每一滴色彩，守護地球的底色。"
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence Section: Re-designed for Factory Panorama */}
      <section className="py-40 md:py-60 bg-zinc-950/50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="max-w-3xl"
            >
              <span className="text-brand-gold tracking-[0.4em] text-xs uppercase font-medium mb-6 block">
                智造基地
              </span>
              <h2 className="font-serif text-4xl md:text-6xl mb-10 leading-tight">
                Manufacturing <br />
                <span className="text-brand-gold italic">Excellence</span>
              </h2>
              <p className="text-zinc-400 font-light text-lg leading-relaxed tracking-wide">
                我們在廣東建立的高標準生產基地，結合了領先業界的環保實驗室與 Industry 4.0 智慧化車間。透過現代化的集團園區管理，我們不僅製造油墨，更在定義未來印刷產業的永續標準。
              </p>
            </motion.div>
          </div>

          <div className="space-y-8">
            {/* Factory Exterior: Full Width Feature */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative h-[500px] md:h-[700px] rounded-3xl overflow-hidden group border border-white/5"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent opacity-80" />
              <div className="absolute bottom-12 left-12 max-w-2xl">
                <span className="text-brand-gold text-xs tracking-[0.4em] uppercase mb-4 block">Manufacturing Complex</span>
                <h3 className="text-3xl md:text-4xl text-white font-serif mb-6">現代化生產園區</h3>
                <p className="text-zinc-300 font-light leading-relaxed">
                  [請替換為工廠外觀實拍] 佔地數萬平米的自動化園區，是我們毫克級精準製造的堅實後盾。
                </p>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* R&D Lab */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="h-[400px] relative rounded-3xl overflow-hidden group border border-white/5"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')" }}
                />
                <div className="absolute inset-0 bg-brand-black/40 group-hover:bg-brand-black/20 transition-colors" />
                <div className="absolute bottom-8 left-8">
                  <span className="text-brand-gold text-[10px] tracking-widest uppercase mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500">R&D Laboratory</span>
                  <h4 className="text-white text-xl font-medium tracking-wide">環保研發實驗室</h4>
                </div>
              </motion.div>

              {/* Smart Workshop */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                className="h-[400px] relative rounded-3xl overflow-hidden group border border-white/5"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1565462015069-3159937cdf5a?q=80&w=2070&auto=format&fit=crop')" }}
                />
                <div className="absolute inset-0 bg-brand-black/40 group-hover:bg-brand-black/20 transition-colors" />
                <div className="absolute bottom-8 left-8">
                  <span className="text-brand-gold text-[10px] tracking-widest uppercase mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500">Smart Workshop</span>
                  <h4 className="text-white text-xl font-medium tracking-wide">智慧化車間</h4>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 md:py-60 text-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-serif text-4xl md:text-6xl mb-12">見證這份執著</h2>
            <a 
              href="/gallery"
              className="group relative inline-flex items-center justify-center px-12 py-5 border border-brand-gold text-brand-gold hover:text-brand-black transition-all duration-500 tracking-[0.3em] text-xs uppercase font-medium overflow-hidden"
            >
              <span className="relative z-10">進入作品集</span>
              <div className="absolute inset-0 bg-brand-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

