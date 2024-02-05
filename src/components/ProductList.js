import React, { useEffect, useState } from "react";
import "./productlist.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [url, setUrl] = useState("http://localhost:8000/products");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data));
    // console.log(products);
  }, [url]);

  return (
    <section>
      <div>
        <button
          className="btn"
          onClick={() => setUrl("http://localhost:8000/products")}
        >
          All
        </button>
        <button
          className="btn"
          onClick={() => setUrl("http://localhost:8000/products?available=1")}
        >
          In Stock
        </button>
      </div>

      {products.map((product) => (
        <div className="card" key={product.id}>
          <div>
            <p>ProductID: {product.id}</p>
            <p>{product.name}</p>
          </div>
          <div>
            <p>${product.price}</p>
          </div>
          {product.available === true ? "Available" : "Unavailable"}
        </div>
      ))}
    </section>
  );
};

export default ProductList;
