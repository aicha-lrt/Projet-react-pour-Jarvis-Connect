import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] !text-stone-400 py-16 mt-20 border-t border-stone-900 no-print">
      {/* Ligne tricolore aux couleurs de l'Italie */}
      <div className="container mx-auto px-6 mb-12">
        <div className="h-[1px] w-full flex opacity-70">
          <div className="h-full w-1/3 bg-green-600"></div>
          <div className="h-full w-1/3 bg-white"></div>
          <div className="h-full w-1/3 bg-red-600"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Identité du restaurant + petite phrase d'accroche */}
        <div className="flex flex-col space-y-4">
          <h3 className="!text-white text-2xl font-serif tracking-[0.1em] uppercase">
            La <span className="italic">Toscane</span>
          </h3>
          <p className="text-s leading-loose tracking-widest opacity-60 italic">
            Une cuisine traditionnelle de qualité, <br />
            servie juste pour vous depuis 2008
          </p>
          <div className="pt-4">
            <a 
              href="https://facebook.com" 
              className="!text-stone-500 hover:!text-white transition-colors text-[12px] tracking-[0.3em] uppercase flex items-center gap-2"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg> 
              Facebook
            </a>
          </div>
        </div>

        {/* Liens poour naviguer entre les pages du site */}
        <div className="flex flex-col space-y-4">
          <h4 className="!text-stone-200 text-[15px] font-bold uppercase tracking-[0.3em]">Navigation</h4>
          <nav className="flex flex-col space-y-3 text-[12px] uppercase tracking-[0.2em]">
            <Link to="/" className="!text-stone-400 hover:!text-amber-200 transition-colors">Accueil</Link>
            <Link to="/menu" className="!text-stone-400 hover:!text-amber-200 transition-colors">La Carte</Link>
            <Link to="/contact" className="!text-stone-400 hover:!text-amber-200 transition-colors">Nous Trouver</Link>
            <Link to="/panier" className="!text-stone-400 hover:!text-amber-200 transition-colors">Mon Panier</Link>
          </nav>
        </div>

        {/* Horaires */}
        <div className="flex flex-col space-y-4">
          <h4 className="!text-stone-200 text-[15px] font-bold uppercase tracking-[0.3em]">Horaires</h4>
          <div className="space-y-4 text-[12px] tracking-[0.15em] uppercase">
            <div className="flex flex-col space-y-1">
              <span className="!text-stone-400 text-[12px]">Lundi</span>
              <span className="!text-stone-200">18:00 — 23:00</span>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="!text-stone-400 text-[14px]">Mardi - Samedi</span>
              <span className="!text-stone-200">11:30 — 15:00</span>
              <span className="!text-stone-200">18:00 — 23:00</span>
            </div>
            <div className="pt-2">
              <span className="!text-red-600 italic font-serif lowercase tracking-normal text-sm">Fermé le Dimanche</span>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col space-y-4">
          <h4 className="!text-stone-200 text-[15px] font-bold uppercase tracking-[0.3em]">Contact</h4>
          <div className="space-y-4 text-[12px] tracking-[0.2em] uppercase">
            <p className="leading-relaxed">
              2 rue de la République<br/>
              60100 Creil, France
            </p>
            <p className="!text-amber-200/70">09 84 45 41 39</p>
            <p className="lowercase !text-stone-400 italic">latoscane60@outlook.fr</p>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="container mx-auto px-6 mt-20 pt-8 border-t border-stone-800/50 text-center">
        <p className="text-[10px] text-stone-500 uppercase tracking-[0.5em]">
          &copy; {new Date().getFullYear()} La Toscane 
        </p>
      </div>
    </footer>
  );
};

export default Footer;