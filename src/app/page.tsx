"use client";

import { motion, Variants, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Globe, Users, Settings, Palette, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import featuredNames from "@/data/featured.json";
import galleryData from "@/data/gallery-data.json";

const capabilities = [
  {
    icon: Globe,
    title: "全球商務佈局與商務賦能",
    desc: "深耕全球貿易鏈路，憑藉 32 年大廠積澱，提供完善的國際供應鏈與跨國商務賦能。"
  },
  {
    icon: Users,
    title: "省級戰略聯盟與通路招募",
    desc: "招募全國各省策略夥伴，以極具競爭力的代理政策與技術支持，共建大廠級供應生態。"
  },
  {
    icon: Settings,
    title: "高端職人級 R&D 研發實驗室",
    desc: "資深專家團隊坐鎮，為您量身打造專屬工業級油墨配方與高端品牌視覺包裝。"
  },
  {
    icon: Palette,
    title: "毫克級精準色彩美學定製",
    desc: "引進國際領先電腦配色系統，毫克級精準調校，完美還原品牌核心色彩與極簡奢華質感。"
  },
  {
    icon: ShieldCheck,
    title: "智慧化生產與零誤差檢驗標竿",
    desc: "智慧化封閉生產線配合零誤差出廠檢驗，以嚴苛的品質守護每一份職人匠心。"
  }
];

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const isVideoInView = useInView(videoSectionRef, { amount: 0.1, once: false, margin: "400px" });
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (isVideoInView && videoRef.current && !videoLoaded) {
      videoRef.current.load();
      setVideoLoaded(true);
    }
    
    if (videoRef.current) {
      if (isVideoInView) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVideoInView, videoLoaded]);

  // Dynamic Featured Products Logic
  const featuredProducts = (featuredNames as string[]).map(name => {
    // Exact match first, then partial
    return galleryData.find(p => p.groupName === name) || 
           galleryData.find(p => p.groupName.includes(name));
  }).filter((p): p is NonNullable<typeof p> => !!p);

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
        <div className="absolute inset-0 z-0 scale-105">
          <Image
            src="/images/hero-bg.webp"
            alt="Hero Background"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Animated Overlay for depth - tuned for fluid beauty */}
          <motion.div 
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0 bg-brand-black/60 z-10" 
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

      {/* Factory Promo Video Section */}
      <section ref={videoSectionRef} className="relative h-screen bg-brand-black overflow-hidden" style={{ backgroundImage: 'url(/images/video-poster.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <video 
          ref={videoRef}
          muted 
          loop 
          playsInline
          poster="/images/video-poster.jpg"
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-100"
        >
          {isVideoInView && (
            <source src="/videos/factory-promo.mp4" type="video/mp4" />
          )}
          您的瀏覽器不支援影片播放。
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/40" />
        {/* Video Background Section Overlay - Removed text to keep video clear */}
      </section>

      {/* Core Capabilities Section */}
      <section className="py-32 md:py-48 bg-brand-black border-t border-brand-gold/10 relative overflow-hidden">
        {/* Industrial Blueprint Background - Micrometer-scale Fine Grid */}
        <div className="absolute inset-0 pointer-events-none" 
             style={{ 
               backgroundImage: `
                 linear-gradient(to right, rgba(212, 175, 55, 0.05) 1px, transparent 1px),
                 linear-gradient(to bottom, rgba(212, 175, 55, 0.05) 1px, transparent 1px)
               `,
               backgroundSize: '16px 16px',
               maskImage: 'radial-gradient(circle at center, black 40%, transparent 95%)',
               WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 95%)'
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
                
                <div className="h-16 flex items-center mb-4">
                  <h3 className="font-serif text-xl text-white group-hover:text-brand-gold transition-colors duration-300">
                    {cap.title}
                  </h3>
                </div>
                
                <p className="text-zinc-400 text-sm font-light leading-relaxed">
                  {cap.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Gallery Section - Carousel Style */}
      <section className="py-40 bg-zinc-950/50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-gold tracking-[0.3em] text-[10px] md:text-xs uppercase font-medium">Featured Products</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-3">精選展示</h2>
              <div className="w-12 h-px bg-brand-gold mt-6" />
            </motion.div>

            <div className="flex gap-4">
              <button 
                onClick={() => scrollContainerRef.current?.scrollBy({ left: -400, behavior: 'smooth' })}
                className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all duration-300"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => scrollContainerRef.current?.scrollBy({ left: 400, behavior: 'smooth' })}
                className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all duration-300"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div 
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {featuredProducts.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="min-w-[300px] md:min-w-[350px] lg:min-w-[400px] snap-start group"
              >
                <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-white rounded-sm flex items-center justify-center p-12 border border-transparent group-hover:border-brand-gold transition-all duration-500 shadow-xl">
                  <Image 
                    src={item.coverSrc} 
                    alt={item.groupName}
                    fill
                    className="object-contain group-hover:scale-105 transition-all duration-700 p-8"
                    sizes="(max-width: 768px) 300px, (max-width: 1024px) 350px, 400px"
                  />
                </div>
                <div className="text-center px-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-brand-gold/60 mb-2">{item.category}</p>
                  <h3 className="font-serif text-xl tracking-wide group-hover:text-brand-gold transition-colors duration-300">{item.groupName}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-40 md:py-60 relative overflow-hidden bg-brand-black">
        {/* Precision Grid Background with Radial Mask */}
        <div className="absolute inset-0 pointer-events-none opacity-40" 
             style={{ 
               backgroundImage: `
                 linear-gradient(to right, rgba(212, 175, 55, 0.1) 1px, transparent 1px),
                 linear-gradient(to bottom, rgba(212, 175, 55, 0.1) 1px, transparent 1px)
               `,
               backgroundSize: '40px 40px',
               maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
               WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)'
             }} 
        />
        
        {/* Large Decorative Light Source */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-gold/10 via-transparent to-transparent opacity-60" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-serif text-4xl md:text-6xl mb-12 leading-[1.3] text-white">
              我們與極致的距離，<br className="md:hidden" />
              <span className="text-brand-gold italic text-shadow-gold">只在您的螢幕與滑鼠之間</span>
            </h2>
            <p className="max-w-xl mx-auto text-zinc-400 font-light text-lg mb-16 tracking-wide">
              不論是商務合作、各省代理渠道拓展，或是高端油墨定製開發，我們隨時準備好與您交流。
            </p>
            <Link 
              href="/contact"
              className="group relative inline-flex items-center justify-center px-12 py-5 border border-brand-gold text-brand-gold hover:text-brand-black transition-all duration-500 tracking-[0.3em] text-xs uppercase font-medium overflow-hidden"
            >
              <span className="relative z-10">聯繫我們</span>
              <div className="absolute inset-0 bg-brand-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

