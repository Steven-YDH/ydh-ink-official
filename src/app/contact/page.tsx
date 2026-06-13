"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setFormState("success");
  };

  return (
    <div className="bg-brand-black min-h-screen text-white pt-32 pb-40 selection:bg-brand-gold selection:text-brand-black">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          {/* Left Side: Text & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-brand-gold tracking-[0.4em] text-xs uppercase font-medium mb-6 block">
              聯絡我們
            </span>
            <h1 className="font-serif text-5xl md:text-7xl mb-12 tracking-tight leading-tight">
              開創極致的 <br />
              <span className="text-brand-gold italic">對話</span>
            </h1>
            <p className="text-zinc-400 font-light text-lg max-w-md leading-relaxed tracking-wide mb-20">
              無論是商務合作或是工藝探討，每一則訊息都將獲得最尊榮的對待。
            </p>

            <div className="space-y-12">
              <div>
                <h3 className="text-brand-gold text-[10px] uppercase tracking-[0.4em] mb-4">總部地址</h3>
                <p className="text-zinc-300 font-light tracking-wide">廣東中山市 · 廣東易鼎鴻國際供應鏈管理有限公司（富日集團）</p>
              </div>
              <div>
                <h3 className="text-brand-gold text-[10px] uppercase tracking-[0.4em] mb-4">聯絡方式</h3>
                <p className="text-zinc-300 font-light tracking-wide">hello@ydh-printingink.com</p>
                <p className="text-zinc-300 font-light tracking-wide mt-2">+86 123 4567 8888</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Frameless Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-zinc-900/30 p-8 md:p-12 lg:p-16 border border-zinc-800/50 relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {formState !== "success" ? (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-12"
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="group relative">
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder=" "
                      className="w-full bg-transparent border-b border-zinc-700 py-4 outline-none focus:border-brand-gold transition-colors duration-500 peer"
                    />
                    <label 
                      htmlFor="name"
                      className="absolute left-0 top-4 text-zinc-500 font-light tracking-widest text-sm pointer-events-none transition-all duration-500 peer-focus:-top-4 peer-focus:text-brand-gold peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-brand-gold peer-[:not(:placeholder-shown)]:text-[10px] uppercase"
                    >
                      您的姓名
                    </label>
                  </div>

                  <div className="group relative">
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder=" "
                      className="w-full bg-transparent border-b border-zinc-700 py-4 outline-none focus:border-brand-gold transition-colors duration-500 peer"
                    />
                    <label 
                      htmlFor="email"
                      className="absolute left-0 top-4 text-zinc-500 font-light tracking-widest text-sm pointer-events-none transition-all duration-500 peer-focus:-top-4 peer-focus:text-brand-gold peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-brand-gold peer-[:not(:placeholder-shown)]:text-[10px] uppercase"
                    >
                      電子郵件
                    </label>
                  </div>

                  <div className="group relative">
                    <textarea
                      id="message"
                      required
                      rows={4}
                      placeholder=" "
                      className="w-full bg-transparent border-b border-zinc-700 py-4 outline-none focus:border-brand-gold transition-colors duration-500 peer resize-none"
                    />
                    <label 
                      htmlFor="message"
                      className="absolute left-0 top-4 text-zinc-500 font-light tracking-widest text-sm pointer-events-none transition-all duration-500 peer-focus:-top-4 peer-focus:text-brand-gold peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-brand-gold peer-[:not(:placeholder-shown)]:text-[10px] uppercase"
                    >
                      訊息內容
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="group relative w-full py-6 border border-brand-gold text-brand-gold hover:text-brand-black transition-all duration-500 tracking-[0.4em] text-xs uppercase font-medium overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {formState === "submitting" ? "發送中..." : (
                        <>
                          發送訊息
                          <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-brand-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="text-brand-gold mb-8"
                  >
                    <CheckCircle2 size={80} strokeWidth={1} />
                  </motion.div>
                  <h2 className="font-serif text-3xl mb-4">發送成功</h2>
                  <p className="text-zinc-500 font-light tracking-wide leading-relaxed mb-12">
                    感謝您的來信。我們將會在 24 小時內回覆您，<br />
                    請耐心等候這份專屬的對話。
                  </p>
                  <button 
                    onClick={() => setFormState("idle")}
                    className="text-brand-gold text-[10px] uppercase tracking-[0.4em] hover:text-white transition-colors"
                  >
                    發送另一則訊息
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="fixed bottom-0 right-0 w-1/3 h-1/3 bg-brand-gold/5 blur-[120px] -z-10 pointer-events-none" />
    </div>
  );
}
