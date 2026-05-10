import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-12 px-6">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-end justify-between gap-8 text-center md:text-left">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-4 cursor-pointer group"
        >
          <div className="h-10 w-10 bg-white text-black flex items-center justify-center rounded-lg group-hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-shadow">
            <span className="text-xl font-black italic">R</span>
          </div>
          <div>
            <h2 className="text-lg font-black tracking-[0.2em] uppercase leading-none">REAL</h2>
            <p className="mt-1 text-[10px] text-zinc-600 uppercase tracking-widest font-medium">
              Human Network
            </p>
          </div>
        </motion.div>

        <div className="flex gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
          <a href="#" className="hover:text-white transition">Library</a>
          <a href="#" className="hover:text-white transition">Privacy</a>
          <a href="#" className="hover:text-white transition">Terms</a>
        </div>

        <p className="text-[10px] uppercase tracking-widest text-zinc-700 font-medium font-mono">
          © 2026 / REL-MOD-01
        </p>
      </div>
    </footer>
  );
}
