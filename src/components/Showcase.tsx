import { motion } from "framer-motion";

const projects = [
  { title: "Maison Élégance", category: "Luxury Fashion" },
  { title: "Atelier Noble", category: "Fine Dining" },
  { title: "Prestige Ventures", category: "Investment" },
];

const Showcase = () => {
  return (
    <section id="portfolio" className="py-32 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-accent text-sm uppercase tracking-widest mb-4">
            Portfolio sélectionné
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight-custom">
            Créations
          </h2>
        </motion.div>

        <div className="space-y-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="glass-card p-8 md:p-12 flex items-center justify-between hover:bg-card transition-colors duration-500">
                <div className="flex items-center gap-8">
                  <span className="text-muted-foreground/50 text-sm font-medium">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-medium tracking-tight group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      {project.category}
                    </p>
                  </div>
                </div>
                
                <motion.div
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-accent-foreground transition-colors duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
