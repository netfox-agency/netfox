import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center">
              <span className="text-background font-bold text-sm">N</span>
            </div>
            <span className="text-lg font-medium tracking-tight">Netfox</span>
          </div>

          <p className="text-muted-foreground text-sm">
            © 2025 Netfox. L'excellence digitale.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
