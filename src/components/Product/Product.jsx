import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  console.log(props);
  const { name, img, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="product-name">{name}</h4>
        <br />
        <p>
          <small>By: {seller}</small>
        </p>
        <p>${price}</p>
        <p>only {stock} pcs left</p>
        <button
          onClick={() => {
            props.handleAddProduct(props.product);
          }}
          className="main-button"
        >
          <FontAwesomeIcon icon={faCartPlus} />
          add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
