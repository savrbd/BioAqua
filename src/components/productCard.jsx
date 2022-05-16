import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({imageProduct,name,countProduct,cost,id, description}) => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={imageProduct} alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h6 className="card-title">{cost}</h6>
                <Link to = {`/products/${id}`}>
                    <button type="button" className="btn btn-outline-success">Открыть карточку</button>
                </Link>
            </div>
        </div>
    );
};
 
export default ProductCard;