const NetfoxLogo = ({ className = "h-24 w-auto" }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 100"
    className={className}
    fill="#8B1E3F"
  >
    {/* Nœud losange en haut */}
    <path d="M25 0 L33 10 L25 20 L17 10 Z" />
    {/* Col évasé */}
    <path d="M19 18 L31 18 L29 28 L21 28 Z" />
    {/* Corps de la cravate - partie large */}
    <path d="M21 28 L29 28 L28 65 L22 65 Z" />
    {/* Pointe de la cravate */}
    <path d="M22 65 L28 65 L25 100 Z" />
  </svg>
);

export default NetfoxLogo;
