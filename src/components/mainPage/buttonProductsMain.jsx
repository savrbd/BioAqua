import React from 'react';
import { Link } from 'react-router-dom';
import catalog from '../../images/catalog.jpg' 

const ButtonProductsMain = () => {
    return (
        <div className='container'>
            <div className="d-flex justify-content-center">
                <Link className="nav-link" to="products">
                <div  className="d-flex flex-column align-items-center justify-content-center p-5 text-white rounded" 
                style={{ backgroundImage:`url(${catalog})`, backgroundSize : '100%' }}>
                    <h1>ВСЕ ТОВАРЫ</h1>
                    <h5>В каталог</h5>
                </div>
                </Link>
            </div>
        </div>
        
    ); 
}
 
export default ButtonProductsMain;