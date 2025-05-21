import React, { useContext } from 'react';
import { CartContext } from '../App';

const produtos = [
  { id: 1, nome: "Jaqueta Preta", preco: "R$ 299", imagem: "🧥" },
  { id: 2, nome: "Camiseta Oversized", preco: "R$ 129", imagem: "👕" },
  { id: 3, nome: "Calça Cargo", preco: "R$ 199", imagem: "👖" },
  { id: 4, nome: "Boné Snapback", preco: "R$ 89", imagem: "🧢" },
  { id: 5, nome: "Tênis Branco", preco: "R$ 349", imagem: "👟" },
  { id: 6, nome: "Moletom Hoodie", preco: "R$ 249", imagem: "🧥" },
];

function Products() {
  const { cart, setCart } = useContext(CartContext);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="page">
      <h1>Produtos</h1>
      <div className="product-list">
        {produtos.map((p) => (
          <div key={p.id} className="product-card">
            <span className="product-img">{p.imagem}</span>
            <h2>{p.nome}</h2>
            <p>{p.preco}</p>
            <button onClick={() => addToCart(p)}>Adicionar ao Carrinho</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
