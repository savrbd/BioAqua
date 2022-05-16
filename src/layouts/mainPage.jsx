import React from 'react';
import "swiper/css/bundle";
import SliderMain from '../components/mainPage/sliderMain/sliderMain';
import ButtonProductsMain from '../components/mainPage/buttonProductsMain';
import CardsMain from "../components/mainPage/cardsMain"
import BreandMain from '../components/mainPage/brendMain';
import ContactMain from '../components/mainPage/contactMain';
import FooterMain from '../components/mainPage/footerMain';

const MainPage = () => {
    return (
        <>
            <div className='container'>
                    <SliderMain/>
                    <ButtonProductsMain/>
                    <CardsMain/>
                    <BreandMain/>
                    <ContactMain/>
            </div>
            <FooterMain/>
            
        </>
        
    );
}
 
export default MainPage;