import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function QuoteModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: '',
    requirements: '',
    name: '',
    email: '',
    phone: ''
  });

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-primary/80 backdrop-blur-md"
      />

      {/* Modal */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-2xl bg-surface-white rounded-3xl shadow-2xl overflow-hidden"
      >
        <div className="flex items-center justify-between p-6 md:px-10 border-b border-primary/5">
          <h3 className="font-headline font-bold text-xl uppercase tracking-widest text-primary">
            Request Quotation
          </h3>
          <button onClick={onClose} className="p-3 bg-surface-low rounded-full hover:bg-surface-low/80 text-primary/60 hover:text-primary transition-colors cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 md:p-10 min-h-[450px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="mb-2">
                  <span className="text-accent font-bold uppercase tracking-widest text-xs mb-2 block">Step 01</span>
                  <h4 className="text-4xl font-headline font-extrabold tracking-tight text-primary">Project Type</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['Residential Windows', 'Commercial Facade', 'Doors & Entrances', 'Balcony Enclosure', 'Full House Renovation', 'Other'].map(type => (
                    <button
                      key={type}
                      onClick={() => setFormData({...formData, projectType: type})}
                      className={`p-5 rounded-2xl text-left font-headline font-bold transition-all border-2 ${
                        formData.projectType === type 
                          ? 'border-accent bg-accent/5 text-accent shadow-sm' 
                          : 'border-surface-low text-primary/70 hover:border-primary/20 bg-surface-white'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="mb-2">
                  <span className="text-accent font-bold uppercase tracking-widest text-xs mb-2 block">Step 02</span>
                  <h4 className="text-4xl font-headline font-extrabold tracking-tight text-primary">Your Details</h4>
                </div>
                <div className="space-y-5">
                  <input 
                    type="text" 
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-surface-low border-0 px-6 py-5 rounded-2xl focus:ring-2 focus:ring-accent text-lg"
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-surface-low border-0 px-6 py-5 rounded-2xl focus:ring-2 focus:ring-accent text-lg"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-surface-low border-0 px-6 py-5 rounded-2xl focus:ring-2 focus:ring-accent text-lg"
                  />
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-16"
              >
                <div className="w-24 h-24 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-8">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h4 className="text-4xl font-headline font-extrabold tracking-tight mb-4 text-primary">Request Received</h4>
                <p className="text-primary/60 font-light max-w-sm text-lg leading-relaxed mt-2">
                  Thank you for choosing Unique UPVC. Our technical team will reach out within 24 hours to schedule your consultation.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          {step < 3 && (
            <div className="flex justify-between items-center mt-12 pt-6 border-t border-primary/5">
              <button 
                onClick={prevStep}
                disabled={step === 1}
                className={`flex items-center gap-2 font-headline font-bold uppercase tracking-widest text-sm transition-opacity px-4 py-2 ${step === 1 ? 'opacity-0 pointer-events-none' : 'text-primary/60 hover:text-primary'}`}
              >
                <ArrowLeft className="w-5 h-5" /> Back
              </button>
              
              <button 
                onClick={nextStep}
                disabled={(step === 1 && !formData.projectType) || (step === 2 && (!formData.name || !formData.email))}
                className="flex items-center gap-3 bg-primary text-surface-white px-8 py-5 rounded-full font-headline font-bold uppercase tracking-widest text-sm hover:bg-accent transition-all disabled:opacity-50 disabled:hover:bg-primary"
              >
                {step === 2 ? 'Submit Request' : 'Continue'} <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}
          {step === 3 && (
             <div className="flex justify-center mt-12">
              <button 
                onClick={onClose}
                className="bg-primary text-surface-white px-12 py-5 rounded-full font-headline font-bold uppercase tracking-widest text-sm hover:bg-accent transition-all"
              >
                Close Window
              </button>
             </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
