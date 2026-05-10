import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';
import { Post } from '../types';

interface PostCardProps {
  post: Post;
  index: number;
}

export default function PostCard({ post, index }: PostCardProps) {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikesCount(prev => liked ? prev - 1 : prev + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
      className="group relative rounded-2xl border border-zinc-800/50 bg-zinc-900/50 p-4 transition-all hover:bg-zinc-900/80 hover:border-zinc-700/50 hover:shadow-xl hover:shadow-black/20"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 overflow-hidden rounded-full border border-zinc-800 bg-zinc-700">
             {post.user.avatar ? (
               <img 
                 src={post.user.avatar} 
                 alt={post.user.name} 
                 className="h-full w-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500"
                 referrerPolicy="no-referrer"
               />
             ) : (
               <div className="h-full w-full bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center text-[10px] font-bold uppercase">
                 {post.user.name.charAt(0)}
               </div>
             )}
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-tight text-white">{post.user.name}</p>
            <p className="text-[9px] text-zinc-500 tracking-wider font-medium">{post.user.username}</p>
          </div>
        </div>
        <button className="text-zinc-600 hover:text-white transition">
          <MoreHorizontal size={14} />
        </button>
      </div>

      <p className="mt-3 text-[11px] leading-relaxed text-zinc-300 font-light">
        {post.content}
      </p>

      <div className="mt-4 flex items-center gap-4 text-zinc-600">
        <motion.button 
          onClick={handleLike}
          whileTap={{ scale: 0.9 }}
          className={`flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest transition-colors group/btn ${liked ? 'text-white' : 'hover:text-white'}`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={liked ? 'liked' : 'unliked'}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <Heart size={12} className={liked ? 'fill-white text-white' : 'group-hover/btn:fill-white'} />
            </motion.div>
          </AnimatePresence>
          <span>{likesCount}</span>
        </motion.button>
        
        <motion.button 
          whileTap={{ scale: 0.9 }}
          className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest transition hover:text-white group/btn"
        >
          <MessageCircle size={12} className="group-hover/btn:scale-110 transition-transform" />
          <span>{post.comments}</span>
        </motion.button>

        <motion.button 
          whileTap={{ scale: 0.9 }}
          className="ml-auto text-zinc-700 hover:text-white transition group/share"
        >
          <Share2 size={12} className="group-hover/share:rotate-12 transition-transform" />
        </motion.button>
      </div>
    </motion.div>
  );
}
