export default function Footer() {
  return (
    <footer className="bg-primary text-surface-white pt-24 pb-12 border-t border-surface-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="md:col-span-2">
          <span className="font-headline font-black text-3xl tracking-tighter mb-6 block text-surface-white">
            UNIQUE UPVC
          </span>
          <p className="text-surface-white/60 font-light max-w-sm leading-relaxed mb-8 text-lg">
            Pioneering premium UPVC architectural solutions. Engineering frames without borders, ensuring clarity, security, and absolute performance.
          </p>
        </div>
        
        <div>
          <h4 className="font-headline font-bold text-sm uppercase tracking-widest mb-6 text-surface-white/80">Navigation</h4>
          <ul className="space-y-4">
            <li><a href="#home" className="text-surface-white/50 hover:text-surface-white transition-colors text-lg">Home</a></li>
            <li><a href="#services" className="text-surface-white/50 hover:text-surface-white transition-colors text-lg">Services</a></li>
            <li><a href="#gallery" className="text-surface-white/50 hover:text-surface-white transition-colors text-lg">Gallery</a></li>
            <li><a href="#contact" className="text-surface-white/50 hover:text-surface-white transition-colors text-lg">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-headline font-bold text-sm uppercase tracking-widest mb-6 text-surface-white/80">Social</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-surface-white/50 hover:text-surface-white transition-colors text-lg">Instagram</a></li>
            <li><a href="#" className="text-surface-white/50 hover:text-surface-white transition-colors text-lg">LinkedIn</a></li>
            <li><a href="#" className="text-surface-white/50 hover:text-surface-white transition-colors text-lg">Pinterest</a></li>
            <li><a href="#" className="text-surface-white/50 hover:text-surface-white transition-colors text-lg">Facebook</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-surface-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-light text-surface-white/40">
        <p>&copy; {new Date().getFullYear()} Unique UPVC. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-surface-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-surface-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
