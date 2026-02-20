import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MENU_DATA } from '../data/menu';

const Home = () => {
  const [currentPlat, setCurrentPlat] = useState(MENU_DATA[0]);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); 
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * MENU_DATA.length);
        setCurrentPlat(MENU_DATA[randomIndex]);
        setFade(true); 
      }, 500); 
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center">
      
      {/* Première partie avec un texte de bienvenue et des images défilantes des plats */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-[#070707] py-20">
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif italic text-stone-900/40 whitespace-nowrap pointer-events-none select-none">
          Cucina Italiana
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16 container mx-auto px-6">
          
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="space-y-2">
              <span className="text-red-700 text-xs md:text-sm uppercase tracking-[0.6em] font-bold block ml-1">
                Resaturant italien depuis 2008
              </span>
              <h1 className="text-6xl md:text-8xl font-serif !text-stone-100 leading-tight tracking-tighter">
                Benvenuti a<br /> 
                <span className="italic !text-stone-400">La Toscane !</span>
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-stone-500 italic max-w-xl leading-relaxed font-light">
              "Laissez-vous emporter dans un voyage <br />
              au coeur de l'authentique cuisine italienne."
            </p>

            <div className="pt-6">
              <Link 
                to="/menu" 
                className="group relative inline-flex items-center gap-4 bg-white text-black px-12 py-5 uppercase text-[10px] font-bold tracking-[0.4em] transition-all hover:bg-red-700 hover:text-white"
              >
                Découvrir le menu
                <span className="text-xl transition-transform group-hover:translate-x-2">→</span>
              </Link>
            </div>
          </div>

          {/* Plat qui change toutes les 5 secondes */}
          <div className="flex-1 relative max-w-lg w-full">
            <div className="relative z-10 aspect-[4/5] overflow-hidden border border-stone-800 bg-stone-900 shadow-2xl">
              <img 
                src={currentPlat.image} 
                alt={currentPlat.nom} 
                className={`w-full h-full object-cover transition-all duration-1000 transform ${fade ? 'opacity-70 scale-100' : 'opacity-0 scale-110'}`}
              />
              
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 via-transparent text-left">
                <div className={`transition-all duration-500 transform ${fade ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  <span className="text-red-600 text-[10px] uppercase tracking-[0.3em] font-bold">Notre sélection</span>
                  <h3 className="text-3xl font-serif italic text-white mb-1">{currentPlat.nom}</h3>
                  <p className="text-stone-400 text-sm font-light tracking-widest">{currentPlat.prix.toFixed(2)}€</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-full h-full border border-stone-800 z-0"></div>
            
            {/* Barre de progression pour montrer quand l'image va changer */}
            <div className="absolute -bottom-8 left-0 w-full h-[1px] bg-stone-900 overflow-hidden">
              <div className="h-full bg-red-700 animate-[progress_5s_linear_infinite]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Petit texte descriptif sur le restaurant (texte récupéré sur https://mon-resto-halal.com/restaurant/la-toscane-creil) */}
      <section className="w-full bg-white py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif !text-stone-900 italic tracking-tighter leading-none">
                Au Coeur de notre <br />
                <span className="text-5xl not-italic font-bold tracking-tighter uppercase">Savoir Faire</span>
              </h2>
              <div className="w-20 h-1 bg-red-700"></div>
            </div>
            
            <div className="space-y-6 text-stone-600 font-light leading-loose text-lg text-justify">
              <p>
                <strong>LA TOSCANE Creil</strong> incarne l'excellence de la cuisine italienne authentique dans l'Oise. Brasserie familiale spécialisée dans les pâtes fraîches maison, pizzas au feu de bois et spécialités traditionnelles italiennes.

              </p>
              <p>
                Notre établissement privilégie les produits frais et la fabrication artisanale : pâtes pétries sur place, sauces mijotées, raviolis aux truffes et pizzas sur pâte fine. Menu varié incluant salades composées, escalopes et desserts italiens authentiques.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;