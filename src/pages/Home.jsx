import React , {useState , useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  const [products , setProducts]=useState([]);
  const [categories , setCategories]=useState([]);
  const [selectedCategory , setSelectedCategory] = useState('');
  const [search , setSearch]=useState('');

  useEffect(()=>{
     fetchProducts();
     fetchCategories();
  },[selectedCategory]);

  const fetchProducts = async () => {
    const url = selectedCategory
      ? `https://fakestoreapi.com/products/category/${selectedCategory}`
      : "https://fakestoreapi.com/products"

    const res = await fetch(url);
    const data = await res.json();
    setProducts(data);
  };

  const fetchCategories = async () => {
    const res = await fetch('https://fakestoreapi.com/products/categories');
    const data = await res.json();
    setCategories(data);
  };


  return (
    <div className="home">
 

    <input
      type="text"
      placeholder="Search products..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="search-bar"
    />

    <div className="categories">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          className={selectedCategory === cat ? 'active' : ''}
        >
          {cat}
        </button>
      ))}
      <button onClick={() => setSelectedCategory('')} className={!selectedCategory ? 'active' : ''}>
        All
      </button>
    </div>

    <div className="product-grid">
      {products
        .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
        .map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
            </Link>
          </div>
        ))}
    </div>
  </div>
  )
}

export default Home
