import React from 'react';
import { Link } from 'react-router-dom';

const BreandMain = () => {
    const imageStyle = {
        backgroundImage:`url("https://medaboutme.ru/upload/medialibrary/c6f/shutterstock_164368730.jpg")`,
        backgroundSize: "100%",
        backgroundPosition: "center center"
    }
    return (
        <div className='ratio ratio-16x9 '>
            <div className = "d-flex justify-content-center align-items-center " style={imageStyle}>
            <div className='text-center '>
                <h1 className='text-success'>О БРЕНДЕ</h1>
                <h2>УЗНАЙТЕ ПОДРОБНЕЕ О BIOAQUA</h2>
                <h5>История бренда, линейка товаров, этапы развития</h5>
                <Link className="nav-link" to="brend">
                    <button className='btn btn-success m-3'><h6>УЗНАЙТЕ ПОДРОБНЕЕ О BIOAQUA</h6></button>
                </Link>
                
            </div>
        </div>
        </div>
        
    );
}
 
export default BreandMain;