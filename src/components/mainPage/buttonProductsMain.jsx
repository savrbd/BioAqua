import React from 'react';
import { Link } from 'react-router-dom';

const ButtonProductsMain = () => {
    return (
        <div className='m-10'>
            <div className="d-flex justify-content-center">
                <Link className="nav-link" to="products">
                <button type="button" className="btn btn-outline-success btn-lg m-3">В каталог</button>
                </Link>
            </div>
        </div>
        
    );
}
 
export default ButtonProductsMain;