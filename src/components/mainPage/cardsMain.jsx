import React from 'react';

const CardsMain = () => {
    const description = [{a1:'ВСЯ ПРОДУКЦИЯ', a2:'СЕРТИФИЦИРОВАННА'}, {a1:'КАЧЕСТВО', a2:'ОТ ПРЯМОГО ПОСТАВЩИКА'}, {a1:'СЕКРЕТЫ АЗИИ', a2:'ДЛЯ ВАС'}]
    return (
        <div className='mt-10 '>
            <div className='d-md-flex justify-content-around'>
                {description.map((item)=>(
                <div className='d-flex text-center  m-4 p-2 shadow flex-column' key={item.a1}>
                    <h4 className='p-2 text-success'>{item.a1}</h4>
                    <h5 className='p-2'>{item.a2}</h5>
            </div>)
            )}
            </div>
        </div>
        
    );
}
export default CardsMain;