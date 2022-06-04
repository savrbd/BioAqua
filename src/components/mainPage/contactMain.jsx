import React from 'react';
import { YMaps, Map, Placemark, ZoomControl, FullscreenControl } from 'react-yandex-maps';

const ContactMain = () => {
    const defaultCenter = { center: [46.309953, 44.266426], zoom: 17 }
    return (
        <div className="container"  >
            <div className='text-center m-4'>
                <h3 className='text-success'>Контакты</h3>
                <h5>г. Элиста ул. Юлии Нейман 7</h5>
            </div>
                <YMaps>
                    <Map width={'100%'} height={'30rem'} defaultState={defaultCenter} >
                    <Placemark geometry ={[46.309953, 44.266426]}/>
                    <FullscreenControl/>
                    <ZoomControl/>
                    </Map>
                </YMaps>
        </div>
    );
}
 
export default ContactMain;