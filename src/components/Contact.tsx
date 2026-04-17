import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-surface-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <span className="font-headline font-bold uppercase tracking-widest text-accent text-sm mb-4 block">
            Get in touch
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-headline font-extrabold tracking-tight mb-8">
            Let's Discuss Your Project.
          </h2>
          <p className="text-primary/70 font-light mb-16 text-lg leading-relaxed md:max-w-md">
            Whether it's a single residential replacement or a large-scale commercial installation, our technical team is ready to guide you.
          </p>

          <div className="space-y-10">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-surface-low rounded-full flex items-center justify-center text-accent shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-headline font-bold text-xl mb-1">Studio & Works</h4>
                <p className="text-primary/70 font-light text-lg">
                  Tajpur Rathtala, Tajpur, Amta<br />
                  Howrah, West Bengal, 711413
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-surface-low rounded-full flex items-center justify-center text-accent shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-headline font-bold text-xl mb-1">Direct Line</h4>
                <p className="text-primary/70 font-light text-lg">
                  +91 8447824879<br />
                  Mon-Fri: 9am - 6pm
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-surface-low rounded-full flex items-center justify-center text-accent shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-headline font-bold text-xl mb-1">Email inquiries</h4>
                <p className="text-primary/70 font-light text-lg">
                  hello@uniqueupvc.com<br />
                  quotes@uniqueupvc.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-surface-low p-8 md:p-12 lg:p-16 rounded-[40px]">
          <form className="space-y-8">
            <div>
              <label htmlFor="name" className="block text-sm font-headline font-bold uppercase tracking-widest text-primary/60 mb-2">
                Full Name
              </label>
              <input 
                type="text" 
                id="name"
                className="w-full bg-surface-white border-0 border-b-2 border-primary/10 focus:border-accent focus:ring-0 px-6 py-5 transition-colors rounded-t-2xl text-lg"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-headline font-bold uppercase tracking-widest text-primary/60 mb-2">
                Email Address
              </label>
              <input 
                type="email" 
                id="email"
                className="w-full bg-surface-white border-0 border-b-2 border-primary/10 focus:border-accent focus:ring-0 px-6 py-5 transition-colors rounded-t-2xl text-lg"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-headline font-bold uppercase tracking-widest text-primary/60 mb-2">
                Project Details
              </label>
              <textarea 
                id="message"
                rows={5}
                className="w-full bg-surface-white border-0 border-b-2 border-primary/10 focus:border-accent focus:ring-0 px-6 py-5 transition-colors rounded-t-2xl resize-none text-lg"
                placeholder="Tell us about your requirements..."
              ></textarea>
            </div>
            <button 
              type="button"
              className="w-full bg-primary text-surface-white py-6 rounded-full font-headline font-bold uppercase tracking-widest text-sm hover:bg-accent transition-colors mt-8"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
