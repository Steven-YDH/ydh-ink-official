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
      title: "智慧製造・品牌升級",
      description: "正式推進 Industry 4.0 智能管理系統，全自動化流程減少 70% 人工，實現環保與效能的雙重飛躍。",
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
    <div className="bg-brand-black text-white selection:bg-brand-gold selection:text-brand-black">
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
              在精準與美學的 <br />
              <span className="text-brand-gold italic">交會點</span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl font-light max-w-2xl leading-relaxed tracking-wide">
              小琥哥品牌起源於對工業極致的追求，並在「極簡奢華」的哲學下，將職人精神從油墨實驗室延伸至生活美學。
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
                      <span className="font-serif text-3xl text-brand-gold mb-2 block">{item.year}</span>
                      <h3 className="text-xl font-medium mb-4 tracking-wider">{item.title}</h3>
                      <p className="text-zinc-400 font-light leading-relaxed tracking-wide">
                        {item.description}
                      </p>
                    </div>
                    <div className="hidden md:block w-1/2" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section: Icon Grid */}
      <section className="py-40 md:py-60">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24 md:mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl md:text-6xl mb-8">核心能力</h2>
              <div className="w-16 h-px bg-brand-gold mx-auto" />
            </motion.div>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20"
          >
            {expertiseData.map((item, index) => (
              <motion.div key={index} variants={itemVariants} className="group">
                <div className="text-brand-gold mb-8 group-hover:scale-110 transition-transform duration-500 origin-left">
                  {item.icon}
                </div>
                <h3 className="text-xl font-medium mb-4 tracking-wider">{item.title}</h3>
                <p className="text-zinc-400 font-light leading-relaxed tracking-wide">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Personal Branding Section: Asymmetric Grid */}
      <section className="py-40 md:py-60 bg-zinc-950/50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <span className="text-brand-gold tracking-[0.4em] text-xs uppercase font-medium mb-6 block">
                  創辦人精神
                </span>
                <h2 className="font-serif text-4xl md:text-6xl mb-10 leading-tight">
                  小琥哥：<br />
                  <span className="text-brand-gold italic">環保</span> 與 <span className="text-brand-gold italic">精準</span> 的領航者
                </h2>
                <div className="space-y-6 text-zinc-400 font-light text-lg leading-relaxed tracking-wide">
                  <p>
                    作為廣東易鼎鴻國際供應鏈管理有限公司（富日集團）的經營者，我將健身房中的紀律完美平移至工業製造。每一滴油墨的調配，都如同肌肉訓練般，需要毫克級的精準與日復一日的堅持。
                    <br /><br />
                    廣東易鼎鴻國際供應鏈管理有限公司（富日集團）不僅是一個品牌，更是我對工藝執著與環境承諾的結合。我們不隨波逐流，只為那份最專業的綠色質感。
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-12 gap-4 h-[600px] md:h-[800px]">
              {/* Asymmetric Grid with Images */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="col-span-8 h-full relative overflow-hidden"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop')" }}
                />
                <div className="absolute inset-0 bg-brand-black/20" />
              </motion.div>

              <div className="col-span-4 flex flex-col gap-4">
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="h-2/5 relative overflow-hidden"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1548092372-0d1bd40894a3?q=80&w=2070&auto=format&fit=crop')" }}
                  />
                  <div className="absolute inset-0 bg-brand-black/20" />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="h-3/5 relative overflow-hidden"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop')" }}
                  />
                  <div className="absolute inset-0 bg-brand-black/20" />
                </motion.div>
              </div>
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

