import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../api";
import { useProducts } from "../hooks/useProducts";
import Loading from "./loading";

const ProductPage = ({ putInTheBasket }) => {
  const { products } = useProducts();
  const { productId } = useParams();
  if (products[0]) {
    const product = products.filter((item)=>{return item._id===productId})[0]
    return (
      <div className="container mt-5 shadow">
        
        <div className="d-md-flex">
          <div className="col-md-4 p-2 d-flex  align-items-center justify-content-center" >
            <img
              src={product.imageProduct}
              className="img-fluid rounded-start m -5 "
              alt="..."
              style={{ maxWidth:"100%", maxHeight:"100%"}}
            />
          </div>
          <div className="col-md-8 p-2 d-flex flex-column text-center ">
            <h3 className="text-success" style={{ maxWidth:"800px"}}>{product.name}</h3>
            <div className = "d-md-flex justify-content-around" >
              <div>
                <h6>{product.countProduct} шт.</h6>
                <p>id: {product._id} </p>
                <h4 className="text-success">{product.cost} руб</h4>
              </div> 
              <div className="col-md-1 p-2 d-flex flex-column  justify-content-center align-items-center">
                <button type="button" className="btn btn-outline-success" onClick={()=>{putInTheBasket(product)}}>
                  Купить
                </button>
              </div>
            </div> 
            <p className="m-5">{product.description}</p>
          </div>
        </div>
        
      </div>
    );
  } else return (
    <Loading/>
    
  );
};

export default ProductPage;
