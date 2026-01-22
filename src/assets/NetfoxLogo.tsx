const NetfoxLogo = ({ className = "h-12 w-auto" }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 200"
    className={className}
    fill="#8B1E3F"
  >
    {/* Nœud losange en haut */}
    <path d="M50 0 L65 18 L50 36 L35 18 Z" />
    
    {/* Corps de la cravate avec renflement organique prononcé */}
    <path d="
      M38 34 
      L62 34 
      Q68 50, 70 70
      Q72 90, 68 110
      Q64 130, 58 150
      Q54 170, 50 200
      Q46 170, 42 150
      Q36 130, 32 110
      Q28 90, 30 70
      Q32 50, 38 34
      Z
    " />
  </svg>
);

export default NetfoxLogo;
