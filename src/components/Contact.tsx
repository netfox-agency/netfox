import { motion } from "framer-motion";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-accent text-sm uppercase tracking-widest mb-4">
            Prêt à démarrer ?
          </p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight-custom mb-8">
            Créons ensemble
            <br />
            <span className="text-muted-foreground">quelque chose</span>
            <br />
            d'exceptionnel.
          </h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button variant="hero" size="xl" className="glow-accent">
              Nous contacter
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
