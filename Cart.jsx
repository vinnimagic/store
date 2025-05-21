import React, { useContext } from 'react';
import { CartContext } from '../App';

function Cart() {
  const { cart, setCart } = useContext(CartContext);

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <div className="page">
      <h1>Carrinho</h1>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.nome} - {item.preco} <button onClick={() => removeFromCart(index)}>Remover</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
