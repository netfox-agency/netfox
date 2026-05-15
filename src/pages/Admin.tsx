import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { Lock, LogOut, Mail, Phone, Building2, FileText, Clock } from "lucide-react";

interface ContactSubmission {
  id: string;
  created_at: string;
  company: string;
  email: string;
  phone: string | null;
  description: string;
}

const ACCESS_CODE = "papapapa";

const Admin = () => {
  const [code, setCode] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (code === ACCESS_CODE) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Code incorrect");
      setCode("");
    }
  };

  useEffect(() => {
    if (!isAuthenticated) return;
    const fetchSubmissions = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("contact_submissions")
        .select("*")
        .order("created_at", { ascending: false });
      if (data) setSubmissions(data);
      setLoading(false);
    };
    fetchSubmissions();
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <Helmet>
          <title>Administration — NETFOX</title>
          <meta name="description" content="Espace d'administration sécurisé NETFOX. Accès réservé." />
          <meta name="robots" content="noindex, nofollow" />
          <link rel="canonical" href="/admin" />
          <meta property="og:title" content="Administration — NETFOX" />
          <meta property="og:description" content="Espace d'administration sécurisé NETFOX." />
          <meta property="og:url" content="/admin" />
        </Helmet>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-sm"
        >
          <div className="glass-modal rounded-2xl p-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                <Lock className="w-5 h-5 text-muted-foreground" />
              </div>
            </div>
            <h1 className="text-xl font-light text-center mb-6 text-foreground">Accès Admin</h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Code d'accès"
                className="w-full bg-transparent border-b-2 border-border/30 py-3 text-foreground text-base placeholder:text-muted-foreground/30 focus:outline-none focus:border-foreground/60 transition-all duration-500 font-light text-center tracking-widest"
                autoFocus
              />
              {error && (
                <p className="text-destructive text-xs text-center">{error}</p>
              )}
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-foreground text-background font-medium text-sm tracking-wide transition-all duration-300 hover:bg-foreground/90 active:scale-[0.98]"
              >
                Accéder
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Demandes — Administration NETFOX</title>
        <meta name="description" content="Gestion des demandes de contact NETFOX." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="/admin" />
      </Helmet>
      {/* Header */}
      <header className="border-b border-border/20 px-4 sm:px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-lg font-light text-foreground tracking-tight">
            Netfox — Demandes
          </h1>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            Déconnexion
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            {submissions.length} demande{submissions.length !== 1 ? "s" : ""}
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-6 h-6 border-2 border-muted-foreground/30 border-t-foreground rounded-full animate-spin" />
          </div>
        ) : submissions.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground font-light">Aucune demande pour le moment</p>
          </div>
        ) : (
          <div className="grid gap-4">
            <AnimatePresence>
              {submissions.map((sub, i) => (
                <motion.div
                  key={sub.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="glass-modal rounded-xl p-5 sm:p-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                        <span className="text-foreground font-medium text-sm">{sub.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                        <span className="text-muted-foreground text-sm break-all">{sub.email}</span>
                      </div>
                      {sub.phone && (
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                          <span className="text-muted-foreground text-sm break-all">{sub.phone}</span>
                        </div>
                      )}
                      <div className="flex items-start gap-2">
                        <FileText className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <p className="text-muted-foreground text-sm leading-relaxed">{sub.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground/60 flex-shrink-0">
                      <Clock className="w-3 h-3" />
                      <span>{new Date(sub.created_at).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit"
                      })}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </main>
    </div>
  );
};

export default Admin;
