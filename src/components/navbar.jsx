import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  // RESPONSIVE: état pour vérifier si il faut ouvrir le menu hamburger pour téléphones, ou non
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'La Carte', path: '/menu' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-[#0a0a0a] sticky top-0 z-50 shadow-2xl">
      {/* Ligne tricolore aux couleurs de l'Italie */}
      <div className="h-[2px] w-full flex">
        <div className="h-full w-1/3 bg-green-600"></div>
        <div className="h-full w-1/3 bg-white"></div>
        <div className="h-full w-1/3 bg-red-600"></div>
      </div>

      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        
        {/* Logo du restaurant */}
        <Link to="/" className="flex items-center gap-4 group">
          <img 
            src={"images/colisee.png"} 
            alt="Logo" 
            className="h-9 w-9 object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity" 
          /> 
          <div className="flex flex-col border-l border-stone-800 pl-4">
            <span className="text-2xl font-serif !text-stone-100 tracking-[0.15em] leading-none">
              LA <span className="italic">TOSCANE</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.4em] !text-stone-100 font-light mt-1">
              Cucina Italiana
            </span>
          </div>
        </Link>

        {/* Menus pour la version ordinateur/tablettes du site */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-20">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path} 
              className="text-[14px] uppercase tracking-[0.3em] !text-stone-300 hover:!text-white transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-1/2 w-0 h-[1px] bg-amber-200 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </Link>
          ))}
        </div>

        {/* Boutons pour le panier et le menu hamburger */}
        <div className="flex items-center gap-4">
          <Link to="/panier" className="relative p-3 rounded-full bg-stone-900 border border-stone-800 hover:border-amber-200/50 transition-colors group">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 !text-stone-400 group-hover:!text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-700 !text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full ring-2 ring-[#0a0a0a]">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Bouton hamburger pour la version téléphone du site (visible si la fenêtre devient trop petite ou si on est sur téléphone) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-stone-400 hover:text-white transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu déroulant mobile */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-[#0a0a0a] border-t border-stone-900 ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col items-center py-8 gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)} 
              className="text-stone-300 uppercase tracking-[0.4em] text-sm hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;