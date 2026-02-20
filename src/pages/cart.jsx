import { Link } from 'react-router-dom';

const Cart = ({ cart, updateQuantity }) => {
  const totalGeneral = cart.reduce((acc, item) => acc + (item.prix * item.quantity), 0);

  const handlePrint = () => {
    window.print();
  };

  if (cart.length === 0) {
    return (
      <div className="text-center py-32 bg-white min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-4xl font-serif italic text-stone-800 mb-8">Votre panier est vide...</h2>
        <Link to="/menu" className="border border-stone-800 text-stone-800 px-10 py-4 uppercase text-[10px] font-bold tracking-[0.3em] hover:bg-stone-900 hover:text-white transition-all">
          Retourner à la carte
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        
        <header className="flex flex-col md:flex-row justify-between items-end border-b border-stone-200 pb-8 gap-6">
          <div className="space-y-2">
            <span className="text-red-700 text-[10px] uppercase tracking-[0.5em] font-bold">Ordine</span>
            <h2 className="text-5xl font-serif italic text-stone-900 tracking-tighter">
              Ma commande
            </h2>
          </div>
          
          <button 
            onClick={handlePrint}
            className="group flex items-center gap-3 text-stone-400 hover:text-stone-900 transition-colors no-print border border-stone-100 px-6 py-3 rounded-full hover:border-stone-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Imprimer le bon</span>
          </button>
        </header>

        {/* Liste des plats commandés */}
        <div className="divide-y divide-stone-100">
          {cart.map((item) => (
            <div key={item.id} className="py-8 flex flex-col sm:flex-row items-center gap-8 group">
              <div className="relative overflow-hidden w-24 h-24 border border-stone-100 shrink-0">
                <img src={item.image} alt={item.nom} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>

              <div className="flex-grow text-center sm:text-left space-y-1">
                <h3 className="font-serif text-xl !text-stone-900 italic tracking-wide">{item.nom}</h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500">{item.prix.toFixed(2)}€ / unité</p>
              </div>

              {/* Gestion des quantités et adaptation du prix en fonction de la quantité d'un plat */}
              <div className="flex items-center gap-12 w-full sm:w-auto justify-between sm:justify-end">
                
                <div className="flex items-center gap-4 border-b border-stone-300 pb-1 no-print">
                  <button 
                    onClick={() => updateQuantity(item.id, -1)}
                    className="text-stone-400 hover:text-red-700 transition-colors text-lg"
                  >—</button>
                  <span className="font-serif text-stone-900 w-8 text-center">x{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, 1)}
                    className="text-stone-400 hover:text-green-700 transition-colors text-lg"
                  >+</button>
                </div>

                <div className="hidden print:block font-serif italic">
                  Quantité: {item.quantity}
                </div>

                <div className="text-right min-w-[100px]">
                  <p className="font-serif text-xl !text-stone-900">{(item.prix * item.quantity).toFixed(2)}€</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Prix total des plats commandés*/}
        <div className="mt-16 pt-12 border-t-2 border-stone-900 flex flex-col sm:flex-row justify-between items-center gap-8">
          <div className="text-center sm:text-left">
            <p className="text-stone-400 uppercase text-[10px] tracking-[0.4em] mb-2 font-bold">Total à payer</p>
            <p className="text-6xl font-serif font-bold text-stone-900">{totalGeneral.toFixed(2)}€</p>
            <p className="text-red-800 italic text-xs mt-2">Toutes taxes comprises</p>
          </div>
          
          <div className="flex flex-col items-center sm:items-end gap-4">

             <Link to="/menu" className="text-[12px] uppercase tracking-[0.2em] text-stone-500 hover:text-stone-900 transition-colors border-b border-stone-200">
               Continuer mes achats
             </Link>
          </div>
        </div>

        {/* Note de fin pour l'impression */}
        <div className="hidden print:block text-center mt-20 border-t border-stone-100 pt-10">
          <p className="font-serif italic text-xl">Au plaisir de vous recevoir dans notre restaurant !</p>
          <p className="text-stone-500 text-xs mt-2 uppercase tracking-widest">La Toscane — 2 Rue de la République, Creil</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;