// src/App.js
import React from 'react';
import { CartProvider } from './CartContext';
import Cart from './components/Cart';

const App = () => {
  return (
    <CartProvider>
      <div>
        <h1>Aplicación de Carrito de Compras</h1>
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;
