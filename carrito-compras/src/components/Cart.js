// src/components/Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        cart.map(item => (
          <CartItem key={item.id} item={item} onRemove={removeFromCart} />
        ))
      )}
    </div>
  );
};

export default Cart;
