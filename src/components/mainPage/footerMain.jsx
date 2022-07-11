import React from 'react';
import vk from "../../images/vk.png";
import instagram from "../../images/instagram.png"
const FooterMain = () => {
    return (
        <div className="d-flex justify-content-evenly mt-5 text-white p-2" style={{ backgroundColor: "#004357" }}>
        <p><b>8 937 468-08-70</b></p>
        <div className='m-2'>
            <a  className="m-2" href="https://vk.com/bioaqua_elista"><img src={vk} alt="vk" width="30 em" /></a>
            <a href="https://vk.com/bioaqua_elista"><img src={instagram} alt="instagram" width="30 em"/></a>
        </div>
        
        </div>
    );
}
 
export default FooterMain;