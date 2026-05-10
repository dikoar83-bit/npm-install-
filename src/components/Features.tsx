import { motion } from 'motion/react';
import { Layers, MessageSquare, UserCircle } from 'lucide-react';

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 border-t border-zinc-800 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          {
            title: 'Realtime Feed',
            desc: 'Posting and interaction happening in the now.',
          },
          {
            title: 'Private Chat',
            desc: 'Secure, encrypted end-to-end communication.',
          },
          {
            title: 'Minimalist Profile',
            desc: 'Premium design for personal storytelling.',
          },
        ].map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ x: 8 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="space-y-3 p-4 rounded-xl transition-colors hover:bg-zinc-900/40 cursor-default"
          >
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">{feature.title}</h4>
            <p className="text-xs text-zinc-600 leading-relaxed font-medium">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
