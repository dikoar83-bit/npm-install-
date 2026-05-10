/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeedPreview from './components/FeedPreview';
import Features from './components/Features';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  return (
    <AnimatePresence>
      <div className="min-h-screen selection:bg-white selection:text-black">
        <Navbar />
        <main>
          <Hero />
          <FeedPreview />
          <Features />
        </main>
        <Footer />
      </div>
    </AnimatePresence>
  );
}
