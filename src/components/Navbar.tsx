import { motion } from "framer-motion";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div 
          className="flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-10 h-10 rounded-xl bg-foreground flex items-center justify-center">
            <span className="text-background font-bold text-lg">N</span>
          </div>
          <span className="text-xl font-semibold tracking-tight">Netfox</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#portfolio">Portfolio</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>

        <Button variant="heroOutline" size="sm">
          Démarrer un projet
        </Button>
      </div>
    </motion.nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.a
    href={href}
    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
    whileHover={{ y: -2 }}
    transition={{ duration: 0.2 }}
  >
    {children}
  </motion.a>
);

export default Navbar;
