import { useState } from 'react';
import { MENU_DATA, CATEGORIES } from '../data/menu';

const MenuItem = ({ item, addToCart }) => {
  const [qty, setQty] = useState(1);

  const handleAdd = () => {
    addToCart(item, qty);
    setQty(1);
  };

  return (
    <div className="group bg-white overflow-hidden border border-stone-100 flex flex-col hover:border-stone-300 transition-all duration-500">
      
      <div className="relative overflow-hidden h-64">
        <img 
          src={item.image} 
          alt={item.nom} 
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
        />
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md border border-stone-200 px-4 py-1 text-stone-800 font-serif italic text-lg">
          {item.prix.toFixed(2)}€
        </div>
      </div>
      
      {/* Carte qui affiche le plat avec son nom, son prix, son image et sa description + un choix de quantité à ajouter dans le panier*/}
      <div className="p-8 flex flex-grow flex-col justify-between">
        <div className="text-center">
          <h3 className="font-serif text-2xl text-stone-800 mb-3 tracking-widest uppercase italic">
            {item.nom}
          </h3>
          <div className="w-12 h-[1px] bg-red-700 mx-auto mb-4"></div>
          <p className="text-stone-500 text-sm mb-8 leading-relaxed font-light tracking-wide">
            {item.description}
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-stone-100 pb-4">
            <span className="text-[12px] uppercase tracking-[0.2em] text-stone-500">Quantité</span>
            <div className="flex items-center gap-6">
              <button 
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="text-stone-400 hover:text-red-700 transition-colors"
              >—</button>
              <span className="font-serif text-stone-800 w-4 text-center">{qty}</span>
              <button 
                onClick={() => setQty(qty + 1)}
                className="text-stone-400 hover:text-green-700 transition-colors"
              >+</button>
            </div>
          </div>

          <button 
            onClick={handleAdd}
            className="w-full bg-stone-900 text-white py-4 hover:bg-red-700 transition-all duration-300 font-bold uppercase text-[10px] tracking-[0.3em]"
          >
            Ajouter {qty > 1 && `(${qty})`}
          </button>
        </div>
      </div>
    </div>
  );
};

// Création d'un glossaire pour aider les clients à mieux comprendre certains termes du menu
const Menu = ({ addToCart }) => {
  const [activeTab, setActiveTab] = useState("Tous");

  const glossaire = [
    { terme: "Gli Antipasti", def: "Entrée, amuse-bouche" },
    { terme: "I Secondi di pesce", def: "Plat à base de poisson" },
    { terme: "I Secondi di carne", def: "Plat à base de viande" },
    { terme: "Paste", def: "Plats de pâtes" }
  ];

  const filteredItems = activeTab === "Tous" 
    ? MENU_DATA 
    : MENU_DATA.filter(item => item.categorie === activeTab);

  return (
    <div className="space-y-20 py-10 px-4 bg-white">
      
      {/* Titre */}
      <header className="text-center space-y-4">
        <span className="text-red-700 text-xs uppercase tracking-[0.5em] font-bold">La Carta</span>
        <h2 className="text-6xl font-serif text-stone-800 italic tracking-tighter">La Carte</h2>
        <div className="flex justify-center items-center gap-4">
          <div className="h-[1px] w-20 bg-stone-200"></div>
          <span className="text-stone-400 text-[10px] uppercase tracking-[0.3em]">Cuisine Authentique Italienne</span>
          <div className="h-[1px] w-20 bg-stone-200"></div>
        </div>
      </header>

      {/* Glossaire pour mieux comprendre les termes italiens employés dans le menu */}
      <section className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 py-8 border-y border-stone-300">
        {glossaire.map((item, index) => (
          <div key={index} className="text-center group">
            <span className="font-serif italic text-lg text-stone-700 block mb-1 group-hover:text-red-700 transition-colors">
              {item.terme}
            </span>
            <p className="text-[12px] text-stone-500 uppercase tracking-widest leading-relaxed">
              {item.def}
            </p>
          </div>
        ))}
      </section>

      {/* Filtres en fonction des catégories de nourriture */}
      <div className="flex flex-wrap justify-center gap-3 border-b border-stone-100 pb-6">
        {CATEGORIES.map(cat => (
          <button 
            key={cat} 
            onClick={() => setActiveTab(cat)} 
            className={`text-[10px] uppercase tracking-[0.3em] transition-all relative pb-2 group
              ${activeTab === cat ? 'text-stone-900 font-bold' : 'text-stone-400 hover:text-stone-600'}`}
          >
            {cat}
            <span className={`absolute bottom-0 left-0 h-[2px] bg-red-700 transition-all duration-300 
              ${activeTab === cat ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-0 border-l border-t border-stone-100">
        {filteredItems.map(item => (
          <div key={item.id} className="border-r border-b border-stone-100">
            <MenuItem item={item} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;