import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const GALLERY_IMAGES = [
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1740&auto=format&fit=crop', category: 'Residential', title: 'Modern Villa' },
  { src: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=1740&auto=format&fit=crop', category: 'Commercial', title: 'Office Front' },
  { src: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1584&auto=format&fit=crop', category: 'Interior', title: 'Panoramic Slides' },
  { src: 'https://images.unsplash.com/photo-1600566753086-00f18efc2291?q=80&w=1740&auto=format&fit=crop', category: 'Residential', title: 'Bay Windows' },
  { src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop', category: 'Exterior', title: 'French Doors' },
  { src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop', category: 'Residential', title: 'Minimalist Frame' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="font-headline font-bold uppercase tracking-widest text-accent text-sm mb-4 block">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-headline font-extrabold tracking-tight">
              Architectural Showcase.
            </h2>
          </div>
          <button className="border border-primary text-primary px-8 py-4 rounded-full font-headline font-bold uppercase tracking-widest text-sm hover:bg-primary hover:text-surface-white transition-colors">
            View All Projects
          </button>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.2 }}
              className="relative group overflow-hidden rounded-xl break-inside-avoid bg-surface-low"
            >
              <img 
                src={img.src} 
                alt={img.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-surface-white/70 font-headline text-xs font-bold uppercase tracking-widest mb-2 block">
                    {img.category}
                  </span>
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-headline font-bold text-surface-white">
                      {img.title}
                    </h3>
                    <div className="w-10 h-10 rounded-full bg-surface-white/20 backdrop-blur-sm flex items-center justify-center text-surface-white shrink-0 ml-4 group-hover:bg-surface-white group-hover:text-primary transition-colors">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
