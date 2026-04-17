export default function Specs() {
  return (
    <section className="py-32 bg-surface-low relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        <div className="relative h-[600px] md:translate-y-12">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1738&auto=format&fit=crop" 
            alt="Interior Architecture" 
            className="w-full h-full object-cover rounded-2xl shadow-2xl"
            loading="lazy"
          />
          <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-surface-white p-6 rounded-2xl shadow-xl flex flex-col justify-center">
            <span className="text-6xl font-headline font-extrabold text-accent mb-2">99%</span>
            <p className="text-primary/70 text-sm font-semibold uppercase tracking-widest leading-loose">Acoustic &<br/>Thermal Insulation</p>
          </div>
        </div>
        
        <div className="md:pl-8">
          <span className="font-headline font-bold uppercase tracking-widest text-accent text-sm mb-4 block">
            Technical Superiority
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-extrabold tracking-tight mb-12">
            Engineered for the Extremes.
          </h2>
          <div className="space-y-10">
            <div className="flex gap-6">
              <div className="w-[2px] bg-primary/20 shrink-0 mt-2"></div>
              <div>
                <h4 className="text-2xl font-headline font-bold mb-3">Zero Maintenance</h4>
                <p className="text-primary/70 font-light leading-relaxed text-lg">
                  Our UPVC profiles are UV-stabilized, meaning they will not fade, warp, or crack under harsh sunlight or heavy rain.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-[2px] bg-primary/20 shrink-0 mt-2"></div>
              <div>
                <h4 className="text-2xl font-headline font-bold mb-3">Maximum Security</h4>
                <p className="text-primary/70 font-light leading-relaxed text-lg">
                  Galvanized steel reinforcements within the chambers provide unmatched structural strength against forced entry.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-[2px] bg-primary/20 shrink-0 mt-2"></div>
              <div>
                <h4 className="text-2xl font-headline font-bold mb-3">Eco-Conscious</h4>
                <p className="text-primary/70 font-light leading-relaxed text-lg">
                  100% recyclable materials engineered to reduce your carbon footprint through superior thermal regulation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
