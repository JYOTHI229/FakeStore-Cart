import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import '../styles/ProductDetails.css'; 

function ProductDetails() {
  const { id } = useParams(); // Get product ID from the URL
  const [product, setProduct] = useState(null); // Product state
  const { addToCart } = useContext(CartContext); // Access cart function

  useEffect(() => {
    fetchProduct(); // Fetch product when component mounts
  }, []);

  const fetchProduct = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    setProduct(data); // Save product details in state
  };

  if (!product) return <div>Loading...</div>; // Show loading until data is ready

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p className="price">${product.price}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;