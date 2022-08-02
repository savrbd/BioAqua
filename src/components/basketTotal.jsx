import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useUser } from '../hooks/useUsers';
import emailjs from '@emailjs/browser';

const BasketTotal = ({basket, onBasketClear}) => {
    
    const navigate = useNavigate()
    const { currentUser } = useAuth();

    const basketSubmit = () => {
    //    navigate(-1);
    const templateParams = {
            name: currentUser.name,
            email: currentUser.email,
            phone: currentUser.phone,
            notes: basket.map((item)=>{ return `название - ${item.product.name}, цена - ${item.product.cost}, кол-во ${item.value}`}).join(';  ')
        };
    emailjs.send('service_t1497o7', 'template_lhkso63', templateParams, 'LbjtjmbKZCTL3wfq7')
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });
   
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