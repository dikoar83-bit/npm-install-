import { motion } from 'motion/react';
import { LogIn } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-end justify-between px-6 pb-6 pt-10 border-b border-zinc-800">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-6"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-black">
            <span className="text-3xl font-black italic">R</span>
          </div>
          <div>
            <h1 className="text-3xl font-black tracking-[0.2em] uppercase leading-none">REAL</h1>
            <p className="text-xs font-medium tracking-widest uppercase text-zinc-500 mt-1">Authentic Network</p>
          </div>
        </motion.div>

        <nav className="hidden gap-10 text-xs font-bold tracking-widest uppercase text-zinc-400 md:flex">
          {['Feed', 'Circles', 'Direct', 'Profile'].map((item, i) => (
            <motion.a 
              key={item} 
              href="#" 
              whileHover={{ color: '#fff' }}
              className={`transition-colors pb-1 relative group ${i === 0 ? 'text-white' : ''}`}
            >
              {item}
              {i === 0 && (
                <motion.span 
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 h-px w-full bg-white"
                />
              )}
              {i !== 0 && (
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all group-hover:w-full" />
              )}
            </motion.a>
          ))}
        </nav>

        <motion.button 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-zinc-100 text-black px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-tighter hover:bg-white transition-colors"
        >
          Get Started
        </motion.button>
      </div>
    </header>
  );
}
