import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

const ProductPage = ({ putInTheBasket }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    api.products.getById(productId).then((data) => setProduct(data));
  });
  if (product) {
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
          <div className="col-md-6 p-2 d-flex align-items-center  ">
            <div>
              <h2>{product.name}</h2>
              <h4>{product.countProduct} шт.</h4>
              <h4>{product.cost} руб</h4>
            </div>
          </div>
          <div className="col-md-2 p-2 d-flex  justify-content-center align-content-between">
            <div className="d-flex align-items-center">
              <button type="button" className="btn btn-primary" onClick={()=>{putInTheBasket(product)}}>
                Купить
              </button>
            </div>
            <div className="d-flex align-items-end">
              <h5>id: {product._id} </h5>
            </div>
          </div>
        </div>
      </div>
    );
  } else return <h3>Loading...</h3>;
};

export default ProductPage;
