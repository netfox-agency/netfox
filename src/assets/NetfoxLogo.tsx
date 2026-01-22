const NetfoxLogo = ({ className = "h-24 w-auto" }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 200" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Nœud losange en haut */}
    <path 
      d="M50 0 L65 18 L50 36 L35 18 Z" 
      fill="#8B1E3F"
    />
    {/* Col de la cravate */}
    <path 
      d="M38 32 L62 32 L60 48 L40 48 Z" 
      fill="#8B1E3F"
    />
    {/* Corps de la cravate - partie haute */}
    <path 
      d="M40 48 L60 48 L58 120 L42 120 Z" 
      fill="#8B1E3F"
    />
    {/* Pointe de la cravate */}
    <path 
      d="M42 120 L58 120 L50 200 Z" 
      fill="#8B1E3F"
    />
  </svg>
);

export default NetfoxLogo;
