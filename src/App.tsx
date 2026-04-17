import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Specs from './components/Specs';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface font-sans text-primary selection:bg-accent selection:text-white">
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      
      <main>
        <Hero onOpenModal={() => setIsModalOpen(true)} />
        <Services />
        <Specs />
        <Gallery />
        <Contact />
      </main>

      <Footer />

      <AnimatePresence>
        {isModalOpen && <QuoteModal onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}
