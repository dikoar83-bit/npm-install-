import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-20">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-white/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block border border-zinc-700 rounded-full px-4 py-1.5 mb-6 bg-zinc-900/50"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 italic leading-none">The Future of Connection</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.85] tracking-tighter"
            >
              JADILAH <span className="text-zinc-600">REAL</span><br/>
              DI DUNIA <span className="italic font-serif text-zinc-400">Digital</span>.
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 text-lg font-light leading-relaxed text-zinc-400 max-w-lg"
            >
              Experience a minimalist space designed for genuine moments. 
              No algorithms, no performance, just real connection.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-8"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className={`h-10 w-10 rounded-full border-2 border-zinc-950 bg-zinc-${900 - i * 100}`} />
                ))}
              </div>
              <p className="text-sm text-zinc-500 font-medium tracking-tight">
                Joined by <span className="text-white">12k+ members</span> this week
              </p>
            </motion.div>
          </div>

          <div className="md:col-span-5 flex justify-center mt-10 md:mt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: 0,
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="w-80 h-[480px] bg-zinc-900 rounded-[3rem] p-3 shadow-2xl border border-zinc-800 ring-4 ring-zinc-900/50"
              >
                <div className="w-full h-full bg-zinc-950 rounded-[2.5rem] overflow-hidden flex flex-col">
                  <div className="p-6 border-b border-zinc-900 flex justify-between items-center">
                    <span className="text-[10px] font-bold tracking-widest text-zinc-600 uppercase">REAL Feed</span>
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <div className="flex-1 p-4 space-y-4 overflow-hidden">
                    <div className="bg-zinc-900/50 rounded-2xl p-4 border border-zinc-800/50">
                      <div className="flex items-center gap-2 mb-3">
                        <img 
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100" 
                          className="h-8 w-8 rounded-full border border-zinc-800 object-cover"
                          alt="Elena"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-tight">Elena Vance</p>
                          <p className="text-[9px] text-zinc-500 tracking-wider">@elenareal</p>
                        </div>
                      </div>
                      <p className="text-[11px] leading-relaxed text-zinc-300">Sharing real moments, no drama.</p>
                    </div>
                    <div className="bg-zinc-900/50 rounded-2xl p-4 border border-zinc-800/50 blur-[1px] opacity-50">
                      <div className="flex items-center gap-2 mb-3">
                        <img 
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100" 
                          className="h-8 w-8 rounded-full border border-zinc-800 object-cover"
                          alt="Julian"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-tight">Julian Thorne</p>
                          <p className="text-[9px] text-zinc-500 tracking-wider">@julianlive</p>
                        </div>
                      </div>
                      <p className="text-[11px] leading-relaxed text-zinc-300">Focus on authentic connections.</p>
                    </div>
                  </div>
                  <div className="h-12 bg-zinc-900 flex justify-around items-center px-8 border-t border-zinc-800">
                    <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                    <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full" />
                    <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
