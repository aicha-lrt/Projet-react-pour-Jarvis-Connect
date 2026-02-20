const Contact = () => {
  return (
    <div className="bg-white min-h-screen text-stone-800">
      <div className="max-w-7xl mx-auto px-6 py-20">
        
        <header className="text-center mb-24 space-y-4">
          <span className="text-red-700 text-[10px] uppercase tracking-[0.6em] font-bold">Dove Siamo</span>
          <h2 className="text-6xl md:text-7xl font-serif text-stone-900 italic tracking-tighter">Nous Trouver</h2>
          <div className="flex justify-center items-center gap-4 pt-4">
            <div className="h-[1px] w-12 bg-stone-200"></div>
            <p className="text-stone-400 italic text-sm tracking-widest">La cuisine italienne tout près de chez vous</p>
            <div className="h-[1px] w-12 bg-stone-200"></div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch mb-24">
          
          {/* Image du restaurant */}
          <div className="relative group h-full">
            <div className="absolute inset-0 border border-stone-400 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
            <div className="relative h-full overflow-hidden border border-stone-100 bg-stone-50 shadow-sm">
              <img 
                src={"images/restaurant.jpg"} 
                alt="Intérieur du restaurant" 
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" 
              />
            </div>
          </div>

          {/* Horaires d'ouverture et de fermeture */}
          <div className="flex flex-col justify-between space-y-12 py-4">
            
            <div className="border-l-2 border-red-700 pl-10 space-y-8">
              <h3 className="text-[10px] uppercase tracking-[0.5em] text-stone-400 font-bold">Horaires d'ouverture</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-end group">
                  <span className="font-serif italic text-2xl text-stone-800 group-hover:text-red-700 transition-colors">Lundi</span>
                  <div className="flex-grow border-b border-dotted border-stone-200 mx-4 mb-2"></div>
                  <span className="text-[12px] uppercase tracking-widest text-stone-500 font-medium">18:00 — 23:00</span>
                </div>
                
                <div className="flex justify-between items-end group">
                  <span className="font-serif italic text-2xl text-stone-800 group-hover:text-red-700 transition-colors">Mardi — Samedi</span>
                  <div className="flex-grow border-b border-dotted border-stone-200 mx-4 mb-2"></div>
                  <div className="text-right text-[12px] uppercase tracking-widest text-stone-500 font-medium">
                    <p>11:30 — 15:00</p>
                    <p>18:00 — 23:00</p>
                  </div>
                </div>

                <div className="flex justify-between items-end opacity-70">
                  <span className="font-serif italic text-2xl">Dimanche</span>
                  <div className="flex-grow border-b border-dotted border-stone-200 mx-4 mb-2"></div>
                  <span className="text-[12px] uppercase tracking-[0.3em] font-bold text-red-700">Fermé</span>
                </div>
              </div>
            </div>

            {/* Coordonnées du restaurant */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-stone-100 pt-12">
              <div className="space-y-2">
                <h4 className="text-[10px] uppercase tracking-[0.4em] text-stone-400 font-bold">Nous contacter</h4>
                <a href="tel:0123456789" className="block text-xl text-stone-900 hover:text-red-700 transition-colors font-serif italic">09 84 45 41 39</a>
                <a href="mailto:ciao@latoscane.fr" className="block text-xs tracking-widest uppercase text-stone-500 hover:text-red-700 transition-colors">latoscane60@outlook.fr</a>
              </div>
              <div className="space-y-2">
                <h4 className="text-[10px] uppercase tracking-[0.4em] text-stone-400 font-bold">Adresse</h4>
                <p className="text-sm leading-relaxed text-stone-600">
                  2 rue de la République<br/>
                  60100 Creil, France
                </p>
              </div>
            </div>

            {/* Facebook (réseaux sociaux) */}
            <div className="pt-4">
              <a href="https://www.facebook.com/LaToscaneCreil" className="inline-flex items-center gap-4 group">
                 <div className="w-10 h-[1px] bg-stone-200 group-hover:w-16 group-hover:bg-red-700 transition-all"></div>
                 <span className="text-[12px] uppercase tracking-[0.4em] text-stone-400 group-hover:text-stone-900 transition-colors">Nous suivre sur Facebook (cliquer ici)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Google maps */}
        <section className="relative mt-32">
          <div className="text-center mb-12">
             <div className="w-px h-16 bg-stone-200 mx-auto mb-6"></div>
             <h3 className="text-[12px] uppercase tracking-[0.5em] text-stone-400">Localisation</h3>
          </div>
          <div className="relative rounded-sm overflow-hidden border border-stone-100 transition-all duration-1000 shadow-xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.8004714198382!2d2.471550076518798!3d49.261227671389584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e64a1e9400b5e9%3A0x2da25bc6f24b9db!2s2%20Rue%20de%20la%20R%C3%A9publique%2C%2060100%20Creil!5e0!3m2!1sfr!2sfr!4v1771515003550!5m2!1sfr!2sfr" // Remplace par ton lien Maps
              width="100%" 
              height="500" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title="Localisation"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;