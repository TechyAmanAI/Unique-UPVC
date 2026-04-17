import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
];

export default function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-[100dvh] flex items-center overflow-hidden bg-primary">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentIndex}
            src={HERO_IMAGES[currentIndex]}
            alt="Premium UPVC Windows and Doors"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </AnimatePresence>
        {/* Glassmorphism Overlay */}
        <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start mt-20">
        <motion.div 
          className="max-w-3xl backdrop-blur-md bg-surface-white/10 p-8 md:p-12 rounded-2xl border border-surface-white/20 shadow-2xl"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.span 
            className="text-surface font-headline font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-6 block"
          >
            Precision Architecture
          </motion.span>
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-headline font-extrabold text-surface-white tracking-tight leading-[1.1] mb-6"
          >
            Engineered <br /> Transparency.
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-surface-white/80 font-light max-w-2xl mb-10"
          >
            Elevate your space with premium UPVC windows and doors. Uncompromising structural integrity meets minimalist architectural design.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-6">
            <button 
              onClick={onOpenModal}
              className="bg-surface-white text-primary px-8 py-4 rounded-full font-headline font-bold uppercase tracking-widest text-sm transition-all hover:bg-surface-low flex items-center justify-center gap-3 group"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="#gallery"
              className="bg-surface-white/10 text-surface-white border border-surface-white/30 px-8 py-4 rounded-full font-headline font-bold uppercase tracking-widest text-sm transition-all hover:bg-surface-white/20 backdrop-blur-sm text-center block"
            >
              View Gallery
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-surface-white/0 via-surface-white/50 to-surface-white/0"></div>
      </motion.div>
    </section>
  );
}
