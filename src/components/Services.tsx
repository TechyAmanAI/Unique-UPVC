import { motion } from 'motion/react';
import { Shield, Droplets, Maximize } from 'lucide-react';

const SERVICES = [
  {
    title: 'Architectural Windows',
    description: 'Minimalist sightlines with maximum thermal efficiency. Multi-chambered profiles engineered for the modern home.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1631&auto=format&fit=crop',
    icon: <Maximize className="w-6 h-6" />
  },
  {
    title: 'Precision Doors',
    description: 'High-security multi-point locking systems enveloped in sleek, uninterrupted frames.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1738&auto=format&fit=crop',
    icon: <Shield className="w-6 h-6" />
  },
  {
    title: 'Balcony Enclosures',
    description: 'Seamless indoor-outdoor integration. Weather-tight sliding systems that defy the elements.',
    image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=1740&auto=format&fit=crop',
    icon: <Droplets className="w-6 h-6" />
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-surface-white text-primary">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="font-headline font-bold uppercase tracking-widest text-accent text-sm mb-4 block">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-headline font-extrabold tracking-tight">
              Precision Engineered Systems.
            </h2>
          </div>
          <p className="text-lg text-primary/70 max-w-md font-light leading-relaxed">
            We don't just supply frames; we architect solutions that enhance light, space, and living quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-8 bg-surface-low">
                <motion.img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute top-6 left-6 w-14 h-14 bg-surface-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary shadow-sm">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-2xl font-headline font-bold mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-primary/70 font-light leading-relaxed text-lg">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
