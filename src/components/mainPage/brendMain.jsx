import React from "react";
import { Link } from "react-router-dom";
import breandImage from "../../images/breandImage.jpg";

const BreandMain = () => {
    const imageStyle = {
        backgroundImage: `url(${breandImage})`,
        backgroundSize: "100%",
        backgroundPosition: "center center"
    };
    return (
        <div className="ratio ratio-16x9 ">
            <div
                className="d-md-flex justify-content-center align-items-center "
                style={imageStyle}
            >
                <div className="text-center ">
                    <h1 className="text-success">О БРЕНДЕ</h1>
                    <h2>УЗНАЙТЕ ПОДРОБНЕЕ О BIOAQUA</h2>
                    <h5>История бренда, линейка товаров, этапы развития</h5>
                    <Link className="nav-link" to="brend">
                        <button className="btn btn-success m-md-3">
                            <h6>УЗНАЙТЕ ПОДРОБНЕЕ О BIOAQUA</h6>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BreandMain;
