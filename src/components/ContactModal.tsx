import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    company: "",
    contact: "",
    description: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate inputs
    if (!formData.company.trim() || !formData.contact.trim() || !formData.description.trim()) {
      return;
    }
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ company: "", contact: "", description: "" });
      onClose();
    }, 2000);
  };

  const handleChange = (field: string, value: string) => {
    // Limit input lengths for security
    const maxLengths: Record<string, number> = {
      company: 100,
      contact: 255,
      description: 1000
    };
    if (value.length <= (maxLengths[field] || 255)) {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-xl"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 pointer-events-none"
          >
            <div className="relative w-full max-w-lg pointer-events-auto">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute -top-12 right-0 text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <X className="w-6 h-6" strokeWidth={1} />
              </button>

              {/* Form Container */}
              <div className="glass-surface rounded-3xl p-10 md:p-12">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Header */}
                    <div className="text-center mb-10">
                      <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-3">
                        Votre vision
                      </h2>
                      <p className="text-muted-foreground text-sm font-light">
                        Parlez-nous de votre projet
                      </p>
                    </div>

                    {/* Company Name */}
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-muted-foreground font-light">
                        Société
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        placeholder="Nom de votre entreprise"
                        required
                        maxLength={100}
                        className="w-full bg-transparent border-b border-border/50 py-3 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground/50 transition-colors duration-300 font-light"
                      />
                    </div>

                    {/* Contact */}
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-muted-foreground font-light">
                        Contact
                      </label>
                      <input
                        type="text"
                        value={formData.contact}
                        onChange={(e) => handleChange("contact", e.target.value)}
                        placeholder="Email ou téléphone"
                        required
                        maxLength={255}
                        className="w-full bg-transparent border-b border-border/50 py-3 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground/50 transition-colors duration-300 font-light"
                      />
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-muted-foreground font-light">
                        Votre projet
                      </label>
                      <textarea
                        value={formData.description}
                        onChange={(e) => handleChange("description", e.target.value)}
                        placeholder="Décrivez brièvement votre vision..."
                        required
                        maxLength={1000}
                        rows={4}
                        className="w-full bg-transparent border-b border-border/50 py-3 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground/50 transition-colors duration-300 font-light resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6">
                      <button
                        type="submit"
                        className="w-full py-4 rounded-full bg-foreground text-background font-light text-sm tracking-widest uppercase transition-all duration-500 hover:bg-foreground/90"
                      >
                        Soumettre ma candidature
                      </button>
                    </div>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-foreground/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-light mb-2">Merci</h3>
                    <p className="text-muted-foreground text-sm font-light">
                      Nous vous recontacterons sous 24h.
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
