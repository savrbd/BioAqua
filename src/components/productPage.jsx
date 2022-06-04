import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../api";
import { useProducts } from "../hooks/useProducts";

const ProductPage = ({ putInTheBasket }) => {
  const { products } = useProducts();
  const { productId } = useParams();
  console.log(products)
  if (products) {
    const product = products.filter((item)=>{return item._id===productId})[0]
    console.log(product)
    return (
      <div className="container mt-5 shadow">
        <div className="row">
          <div className="col-md-3 p-2 d-flex align-items-center justify-content-center">
            <img
              src={product.imageProduct}
              className="img-fluid rounded-start "
              alt="..."
              style={{ maxHeight: "250px", maxWidth: "250px" }}
            />
          </div>
          <div className="col-md-8 p-4 d-flex align-items-center  ">
            <div>
              <h3 className="text-success">{product.name}</h3>
              <p>{product.description}</p>
              <h6>{product.countProduct} шт.</h6>
              <p>id: {product._id} </p>
              <h4 className="text-success">{product.cost} руб</h4>
            </div>
          </div>
          <div className="col-md-1 p-2 d-flex flex-column  justify-content-center align-items-center">
              <button type="button" className="btn btn-outline-success" onClick={()=>{putInTheBasket(product)}}>
                Купить
              </button>
          </div>
        </div>
      </div>
    );
  } else return <h3>Loading...</h3>;
};

export default ProductPage;
