import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    phone: "",
    description: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Échap pour fermer, et pas de défilement de la page derrière la fenêtre.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.company.trim() || !formData.email.trim() || !formData.description.trim()) return;
    if (isSubmitting) return;

    setIsSubmitting(true);
    const { error } = await supabase.from("contact_submissions").insert({
      company: formData.company.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim() || null,
      description: formData.description.trim(),
    });

    // Notification e-mail via Web3Forms (clé publique, requête sans préflight CORS)
    try {
      const fd = new FormData();
      fd.append("access_key", "a8e5658f-bbe2-4722-8ed9-d2dcf8293cc7");
      fd.append("subject", `Nouvelle demande — ${formData.company.trim()}`);
      fd.append("from_name", "Netfox");
      fd.append("name", formData.company.trim());
      fd.append("email", formData.email.trim());
      fd.append("phone", formData.phone.trim() || "—");
      fd.append("message", formData.description.trim());
      await fetch("https://api.web3forms.com/submit", { method: "POST", body: fd });
    } catch (e) {
      console.error("Web3Forms notification failed", e);
    }


    setIsSubmitting(false);


    if (!error) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ company: "", email: "", phone: "", description: "" });
        onClose();
      }, 2500);
    }
  };

  const handleChange = (field: string, value: string) => {
    const maxLengths: Record<string, number> = { company: 100, email: 255, phone: 50, description: 1000 };
    if (value.length <= (maxLengths[field] || 255)) {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 bg-background/90 backdrop-blur-2xl"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none overflow-y-auto"
          >
            <div className="relative w-full max-w-md sm:max-w-lg my-auto pointer-events-auto pt-16">
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                onClick={onClose}
                aria-label="Fermer"
                type="button"
                className="absolute top-0 right-0 sm:right-2 w-10 h-10 flex items-center justify-center rounded-full bg-muted/30 border border-border/30 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-300"
              >
                <X className="w-5 h-5" strokeWidth={1.5} />
              </motion.button>

              <div className="glass-modal rounded-3xl sm:rounded-[2rem] p-6 sm:p-8 md:p-10">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                    <div className="text-center mb-8 sm:mb-10">
                      <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl sm:text-3xl md:text-4xl font-extralight tracking-tight mb-3"
                      >
                        Votre vision
                      </motion.h2>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-muted-foreground text-sm sm:text-base font-light"
                      >
                        Parlez-nous de votre projet
                      </motion.p>
                    </div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="space-y-2">
                      <label htmlFor="contact-company" className={`block text-xs uppercase tracking-[0.2em] font-light transition-colors duration-300 ${focusedField === 'company' ? 'text-foreground' : 'text-muted-foreground'}`}>
                        Société
                      </label>
                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        onFocus={() => setFocusedField('company')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Nom de votre entreprise"
                        required
                        maxLength={100}
                        className="w-full bg-transparent border-b-2 border-border/30 py-3 sm:py-4 text-foreground text-base sm:text-lg placeholder:text-muted-foreground/30 focus:outline-none focus:border-foreground/60 transition-all duration-500 font-light"
                      />
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="space-y-2">
                      <label htmlFor="contact-email" className={`block text-xs uppercase tracking-[0.2em] font-light transition-colors duration-300 ${focusedField === 'email' ? 'text-foreground' : 'text-muted-foreground'}`}>
                        Email
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="votre@email.com"
                        required
                        maxLength={255}
                        className="w-full bg-transparent border-b-2 border-border/30 py-3 sm:py-4 text-foreground text-base sm:text-lg placeholder:text-muted-foreground/30 focus:outline-none focus:border-foreground/60 transition-all duration-500 font-light"
                      />
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42 }} className="space-y-2">
                      <label htmlFor="contact-phone" className={`block text-xs uppercase tracking-[0.2em] font-light transition-colors duration-300 ${focusedField === 'phone' ? 'text-foreground' : 'text-muted-foreground'}`}>
                        Téléphone
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="+33 6 12 34 56 78"
                        maxLength={50}
                        className="w-full bg-transparent border-b-2 border-border/30 py-3 sm:py-4 text-foreground text-base sm:text-lg placeholder:text-muted-foreground/30 focus:outline-none focus:border-foreground/60 transition-all duration-500 font-light"
                      />
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="space-y-2">
                      <label htmlFor="contact-description" className={`block text-xs uppercase tracking-[0.2em] font-light transition-colors duration-300 ${focusedField === 'description' ? 'text-foreground' : 'text-muted-foreground'}`}>
                        Votre projet
                      </label>
                      <textarea
                        id="contact-description"
                        name="description"
                        value={formData.description}
                        onChange={(e) => handleChange("description", e.target.value)}
                        onFocus={() => setFocusedField('description')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Décrivez brièvement votre vision..."
                        required
                        maxLength={1000}
                        rows={3}
                        className="w-full bg-transparent border-b-2 border-border/30 py-3 sm:py-4 text-foreground text-base sm:text-lg placeholder:text-muted-foreground/30 focus:outline-none focus:border-foreground/60 transition-all duration-500 font-light resize-none"
                      />
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="pt-4 sm:pt-6">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 sm:py-5 rounded-2xl bg-foreground text-background font-medium text-sm sm:text-base tracking-wide transition-all duration-500 hover:bg-foreground/90 hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.2)] active:scale-[0.98] disabled:opacity-50"
                      >
                        {isSubmitting ? "Envoi..." : "Soumettre ma candidature"}
                      </button>
                    </motion.div>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 sm:py-16"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", duration: 0.6 }}
                      className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 rounded-full bg-muted/30 border border-border/30 flex items-center justify-center"
                    >
                      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <motion.path
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </motion.div>
                    <h3 className="text-xl sm:text-2xl font-light mb-2">Merci</h3>
                    <p className="text-muted-foreground text-sm sm:text-base font-light">
                      Nous vous recontacterons dès que possible.
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
