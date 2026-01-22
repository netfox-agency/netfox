import { motion } from "framer-motion";
import { Globe, Layers, Sparkles } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sites Vitrines",
    description: "Des présences digitales qui captent l'attention et convertissent.",
  },
  {
    icon: Layers,
    title: "Applications Web",
    description: "Interfaces fluides et performances optimales, sans compromis.",
  },
  {
    icon: Sparkles,
    title: "E-commerce",
    description: "Expériences d'achat premium qui fidélisent vos clients.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-accent text-sm uppercase tracking-widest mb-4">
            Ce que nous faisons
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight-custom">
            Expertise
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-10 hover-lift group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-8 group-hover:bg-accent/20 transition-colors duration-500">
                <service.icon className="w-6 h-6 text-foreground group-hover:text-accent transition-colors duration-500" />
              </div>
              
              <h3 className="text-2xl font-medium tracking-tight mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
