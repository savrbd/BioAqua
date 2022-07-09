import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
// import Total from './total';

const BasketTotal = ({basket, onBasketClear}) => {
    const navigate = useNavigate()
    const { currentUser } = useAuth();
   console.log(basket);
   
    const basketSubmit = () => {
    //    navigate(-1);
   
    navigate(currentUser?"../total" : "../totalError", { replace: true }); 
       onBasketClear();
    }
    return (
        <>
            <div className="m-2 p-2 bd-highlight card">
                <h5>Итого :</h5>
                <h6>{basket.reduce((acc, item)=>{return acc + item.value},0)} шт.</h6>
                <h5>Итоговая сумма:</h5>
                <h6>{basket.reduce((acc, item)=>{return acc + item.value*item.product.cost},0)} руб.</h6>
                
                {/* <Link to="total"> */}
                    <button type="button"  onClick={()=>{basketSubmit()}} className="btn btn-success">Оформить заказ</button>
                {/* </Link> */}
            </div>
            {/* <Routes>
                <Route path="total" element={<Total/>}/> 
            </Routes>       */}
        </>  
      );
}
 
export default BasketTotal;