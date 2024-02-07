import React, { useState } from "react";
import "./productlist.css";
import { useFetch } from "../hooks/useFetch";

const ProductList = () => {
  // const [products, setProducts] = useState([]);
  const [url, setUrl] = useState("http://localhost:8000/products");

  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data));
  // }, [url]);

  //Inside useeffect
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setProducts(data);
  //   };
  //   fetchProducts();
  // }, [url]);

  //outside useeffect
  // const fetchProducts = useCallback(async () => {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   setProducts(data);
  // }, [url]);

  // useEffect(() => {
  //   fetchProducts();
  // }, [fetchProducts]);

  //Custom Hooks for fetching data
  const { data: products, loading } = useFetch(url);
  console.log("products", products);
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

      {loading && <div className="loading"></div>}
      {products &&
        products.map((product) => (
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
