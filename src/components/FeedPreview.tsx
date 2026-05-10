import { Post } from '../types';
import PostCard from './PostCard';
import { motion } from 'motion/react';

const MOCK_POSTS: Post[] = [
  {
    id: '1',
    userId: 'u1',
    user: {
      id: 'u1',
      name: 'Elena Vance',
      username: '@elenareal',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
    },
    content: 'Welcome to REAL — a place to share genuine moments without the noise. Something fresh in the middle of it all.',
    likes: 124,
    comments: 18,
    createdAt: Date.now(),
  },
  {
    id: '2',
    userId: 'u2',
    user: {
      id: 'u2',
      name: 'Julian Thorne',
      username: '@julianlive',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
    },
    content: 'Minimalist design, fast, and focused on authentic connections between users. Finally, back to the roots of social media.',
    likes: 98,
    comments: 12,
    createdAt: Date.now() - 3600000,
  },
];

export default function FeedPreview() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <div className="mb-12 flex items-center justify-between border-b border-zinc-900 pb-6">
        <span className="text-[10px] font-bold tracking-[0.3em] text-zinc-600 uppercase italic">Social Feed / Live</span>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Active</span>
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
        </div>
      </div>
      
      <div className="space-y-6">
        {MOCK_POSTS.map((post, index) => (
          <PostCard key={post.id} post={post} index={index} />
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-12 text-center"
      >
        <motion.button 
          whileHover={{ letterSpacing: '0.4em', color: '#fff' }}
          className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600 transition-all cursor-pointer"
        >
          Load More Stories
        </motion.button>
      </motion.div>
    </section>
  );
}
