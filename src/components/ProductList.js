import React, { useEffect, useState } from "react";
import "./productlist.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section>
      {products.map((product) => (
        <div className="card" key={product.id}>
          <p>{product.title}</p>
          <img src={product.image} alt={product.title} />
          <p>${product.price}</p>
        </div>
      ))}
    </section>
  );
};

export default ProductList;
