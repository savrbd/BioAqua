import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({
    imageProduct,
    name,
    countProduct,
    cost,
    id,
    description
}) => {
    return (
        <div
            className=" m-1 d-flex flex-column justify-content-center shadow "
            style={{ width: "16rem", height: "26rem" }}
        >
            <img
                className=""
                src={imageProduct}
                alt="..."
                style={{ width: "14rem", height: "14rem" }}
            />
            <p className="m-2">{name}</p>
            <div className="text-center d-flex flex-column mt-auto m-4 ">
                <h5 className="text-success m-2 ">{cost} руб.</h5>
                <Link to={`/products/${id}`}>
                    <button type="button" className="btn btn-outline-success ">
                        открыть
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
