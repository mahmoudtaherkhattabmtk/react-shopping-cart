import React, { useState } from "react";
import ProductModal from "./ProductModal";
import { connect } from "react-redux";
import { fetchProducts } from "../../store/actions/products";
import {addToCart} from '../../store/actions/cart';
// import { Bounce } from "react-awesome-reveal";
//there is a problem in react-reveal using
// import Bounce from 'react-reveal/Bounce';
import "../../css/Products/Products.css";
import { useEffect } from "react";

const Products = (props) => {
  const [product, setProduct] = useState("");

  const openModal = (product) => {
    setProduct(product);
  };

  const closeModal = () => {
    setProduct(false);
  };
  useEffect(() => {
    props.fetchProducts();
  }, []);

  return (
    // <Bounce left cascade>
    <div className="products-wrapper">
      {props.products && props.products.length ? props.products.map((product) => (
        <div className="product-item" key={product.id}>
          <a href="#" onClick={() => openModal(product)}>
            <img src={product.imageUrl} alt={product.title} />
          </a>
          <div className="product-desc">
            <p>{product.title}</p>
            <span>{product.price}$</span>
          </div>
          <button onClick={() => props.addToCart(product)}>Add To Cart</button>
        </div>
      )): "loading..."}
      <ProductModal product={product} closeModal={closeModal} />
    </div>
    /* </Bounce> */
  );
};

export default connect((state) => {
  return {
    products: state.products.filterProducts,
  };
}, {fetchProducts, addToCart})(Products);
