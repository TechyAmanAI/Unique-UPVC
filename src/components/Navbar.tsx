import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ onOpenModal }: { onOpenModal: () => void }) {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 md:px-12 px-6 py-4 ${
        isScrolled ? 'bg-surface-white/80 backdrop-blur-xl shadow-sm border-b border-surface-low' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className={`font-headline font-extrabold text-2xl tracking-tighter transition-colors ${
          isScrolled ? 'text-primary' : 'text-surface-white'
        }`}>
          UNIQUE UPVC
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
               <a 
                key={link.name} 
                href={link.href}
                className={`font-headline text-sm font-bold uppercase tracking-widest transition-colors ${
                  isScrolled ? 'text-primary hover:text-accent' : 'text-surface-white/90 hover:text-surface-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <button 
            onClick={onOpenModal}
            className={`px-6 py-3 rounded-full font-headline font-bold text-sm uppercase tracking-widest transition-all ${
              isScrolled 
                ? 'bg-primary text-surface-white hover:bg-accent' 
                : 'bg-surface-white text-primary hover:bg-surface-low'
            }`}
          >
            Get a Quote
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 ${isScrolled ? 'text-primary' : 'text-surface-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-surface-white border-b border-surface-low shadow-xl p-6 flex flex-col gap-6 md:hidden">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-headline text-lg font-bold uppercase tracking-widest text-primary"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenModal();
            }}
            className="w-full bg-primary text-surface-white px-6 py-4 rounded-full font-headline font-bold text-sm uppercase tracking-widest"
          >
            Get a Quote
          </button>
        </div>
      )}
    </motion.nav>
  );
}
