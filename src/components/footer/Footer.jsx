import React from 'react';
import SocMedIcons from "../icons/SocialMedia"
import "./footer.scss"

const Footer = () => {
    return (
        <footer>
            <div className="icons d-flex justify-content-center align-items-center d-lg-none" >
            <SocMedIcons />            
            </div>
        </footer>
    );
}

export default Footer;
