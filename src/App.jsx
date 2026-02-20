import React, { useState } from 'react' 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home'
import Menu from './pages/menu'
import Contact from './pages/contact'
import Cart from './pages/cart'

function App() {
  const [cart, setCart] = useState([])


  // Fonction pour mettre à jour la quantité d'un plat etc dans le panier en fonction de si on ajoute ou retire (si quantité tombe à 0, l'objet est supprimé du panier)
  const updateQuantity = (id, delta) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return { ...item, quantity: Math.max(0, newQty) };
        }
        return item;
      }).filter(item => item.quantity > 0); 
    });
  };

  // Fonction pour ajouter un plat etc dans le panier (on augmente la quantité si ça existe déjà, sinon on crée l'objet dans le panier)
  const addToCart = (item, quantity) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(i => i.id === item.id);
      if (existingItem) {
        return prevCart.map(i => i.id === item.id 
          ? { ...i, quantity: i.quantity + quantity } 
          : i
        );
      }
      return [...prevCart, { ...item, quantity }];
    });
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-stone-50">
        <Navbar cartCount={cart.length} />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu addToCart={addToCart} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/panier" element={<Cart cart={cart} updateQuantity={updateQuantity} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App