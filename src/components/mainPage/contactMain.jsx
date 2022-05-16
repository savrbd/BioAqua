import React from 'react';
import { YMaps, Map, Placemark, ZoomControl, FullscreenControl } from 'react-yandex-maps';

const ContactMain = () => {
    const defaultCenter = { center: [46.309953, 44.266426], zoom: 16 };
    return (
        <div className="container" >
            <div className='text-center m-4'>
                <h3 className='text-success'>Контакты</h3>
                <p>г. Элиста ул. Юлии Нейман 7</p>
            </div>
                <YMaps>
                    <Map width={'100%'} defaultState={defaultCenter} >
                    <Placemark geometry ={[46.309953, 44.266426]}/>
                    <FullscreenControl/>
                    <ZoomControl/>
                    </Map>
                </YMaps>
        </div>
    );
}
 
export default ContactMain;