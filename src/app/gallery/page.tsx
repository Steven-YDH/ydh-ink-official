"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import GALLERY_ITEMS from "@/data/gallery-data.json";

interface GalleryItem {
  id: number;
  category: string;
  categoryKey: string;
  groupName: string;
  coverSrc: string;
  images: string[];
  aspect: string;
}

const CATEGORIES = ["全部", ...Array.from(new Set(GALLERY_ITEMS.map((item) => item.category)))];

export default function GalleryPage() {
  const [filter, setFilter] = useState("全部");
  const [activeGroup, setActiveGroup] = useState<GalleryItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const filteredItems = (GALLERY_ITEMS as GalleryItem[]).filter(
    (item) => filter === "全部" || item.category === filter
  );

  const handleOpenGroup = (group: GalleryItem) => {
    const coverIdx = group.images.indexOf(group.coverSrc);
    const initialIdx = coverIdx !== -1 ? coverIdx : 0;
    setActiveGroup(group);
    setCurrentImageIndex(initialIdx);
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeGroup) return;
    setCurrentImageIndex((prev) => (prev + 1) % activeGroup.images.length);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeGroup) return;
    setCurrentImageIndex(
      (prev) => (prev - 1 + activeGroup.images.length) % activeGroup.images.length
    );
  };

  return (
    <div className="bg-brand-black min-h-screen text-white pt-32 pb-40">
      <div className="container mx-auto px-6">
        {/* Header */}
        <header className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <span className="text-brand-gold tracking-[0.4em] text-[10px] md:text-xs uppercase font-bold mb-4 md:mb-6 block">
              跨越材質之境，以光影定義精準。
            </span>
            <h1 className="font-serif text-4xl md:text-7xl mb-8 md:mb-12 tracking-tight">
              油墨產品 <span className="text-brand-gold italic">實物作品集</span>
            </h1>
            <p className="text-zinc-400 font-light max-w-xl leading-relaxed tracking-wide text-sm md:text-base">
              專為高精度膠印、綠色大豆環保與先進固化技術所研發，具備瞬時固化與卓越色彩還原，提供最完整的高端印刷包裝與實物展示。
            </p>
          </motion.div>
        </header>

        {/* Filter */}
        <div className="flex flex-wrap gap-6 md:gap-16 mb-16 border-b border-zinc-800 pb-8 overflow-x-auto no-scrollbar whitespace-nowrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`relative py-2 text-xs md:text-sm tracking-[0.2em] font-medium transition-colors duration-500 flex-shrink-0 ${
                filter === cat ? "text-brand-gold" : "text-zinc-500 hover:text-white"
              }`}
            >
              {cat}
              {filter === cat && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute bottom-0 left-0 right-0 h-px bg-brand-gold"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Group Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <div
                  className="group relative cursor-pointer overflow-hidden bg-zinc-900/50 border border-brand-gold/10 hover:border-brand-gold/40 hover:bg-zinc-900 transition-all duration-500 rounded-sm flex flex-col h-full"
                  onClick={() => handleOpenGroup(item)}
                >
                  {/* Image wrapper */}
                  <div className="aspect-square flex items-center justify-center p-6 md:p-8 bg-zinc-950/60 relative">
                    <img
                      src={item.coverSrc}
                      alt={item.groupName}
                      className="w-full h-full object-contain transition-all duration-1000 group-hover:scale-105"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <span className="border border-brand-gold/60 text-brand-gold text-xs px-5 py-2.5 tracking-widest uppercase hover:bg-brand-gold hover:text-black transition-colors duration-300">
                        查看商品組 ({item.images.length} 張照片)
                      </span>
                    </div>
                  </div>

                  {/* Label below image (Improved contrast, bolder and golden) */}
                  <div className="p-5 border-t border-brand-gold/5 flex flex-col items-center text-center mt-auto">
                    <span className="text-brand-gold text-[10px] md:text-xs tracking-[0.25em] mb-1.5 font-bold uppercase">
                      {item.category}
                    </span>
                    <h3 className="text-sm md:text-base font-semibold tracking-widest text-zinc-100 group-hover:text-white transition-colors duration-300">
                      {item.groupName}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Advanced Group Lightbox */}
      <AnimatePresence>
        {activeGroup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-zinc-950/30 backdrop-blur-md p-4 md:p-8 lg:p-12 overflow-y-auto"
            onClick={() => setActiveGroup(null)}
          >
            {/* Top Bar */}
            <div className="flex justify-between items-center w-full max-w-7xl mx-auto mb-4">
              <div>
                <span className="text-brand-gold text-xs tracking-widest uppercase font-bold mb-1 block">
                  {activeGroup.category}
                </span>
                <h2 className="text-lg md:text-2xl font-serif tracking-widest text-zinc-100">
                  {activeGroup.groupName}
                </h2>
              </div>
              <button
                className="text-zinc-400 hover:text-white transition-colors p-2 bg-zinc-900/50 hover:bg-zinc-900 rounded-full"
                onClick={() => setActiveGroup(null)}
              >
                <X size={24} />
              </button>
            </div>

            {/* Main Carousel Area */}
            <div className="flex-1 flex items-center justify-center relative w-full max-w-5xl mx-auto my-4 min-h-[50vh]">
              {/* Left Button */}
              {activeGroup.images.length > 1 && (
                <button
                  onClick={handlePrevImage}
                  className="absolute left-2 md:left-6 z-10 p-3 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all border border-zinc-800/80 hover:scale-105 active:scale-95"
                >
                  <ChevronLeft size={24} />
                </button>
              )}

              {/* Main Image Container */}
              <div
                className="w-full max-h-[80vh] flex items-center justify-center p-4 md:p-8 bg-zinc-900/20 rounded-md border border-zinc-900/60"
                onClick={(e) => e.stopPropagation()}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={activeGroup.images[currentImageIndex]}
                    alt={`${activeGroup.groupName} - ${currentImageIndex + 1}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-full max-h-[75vh] object-contain select-none"
                  />
                </AnimatePresence>
              </div>

              {/* Right Button */}
              {activeGroup.images.length > 1 && (
                <button
                  onClick={handleNextImage}
                  className="absolute right-2 md:right-6 z-10 p-3 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all border border-zinc-800/80 hover:scale-105 active:scale-95"
                >
                  <ChevronRight size={24} />
                </button>
              )}
            </div>

            {/* Bottom Bar: Image Indexes & Thumbnails */}
            <div
              className="w-full max-w-4xl mx-auto text-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Counter */}
              <div className="text-zinc-500 text-xs md:text-sm font-light mb-4 tracking-widest">
                圖片 {currentImageIndex + 1} / {activeGroup.images.length}
              </div>

              {/* Thumbnail Bar */}
              {activeGroup.images.length > 1 && (
                <div className="flex justify-center gap-3 overflow-x-auto py-3 no-scrollbar max-w-full">
                  {activeGroup.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`relative w-12 h-12 md:w-16 md:h-16 flex-shrink-0 bg-zinc-900 rounded border transition-all duration-300 ${
                        currentImageIndex === idx
                          ? "border-brand-gold scale-105"
                          : "border-zinc-800 opacity-50 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={img}
                        alt="Thumbnail"
                        className="w-full h-full object-contain p-1"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
