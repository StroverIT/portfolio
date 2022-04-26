import React from 'react';
import SocMedIcons from "../icons/SocialMedia"
import "./footer.scss"

const Footer = () => {
    return (
        <footer className="d-flex justify-content-center align-items-center flex-column">
            <div className="icons d-lg-none" >
            <SocMedIcons />            
            </div>
            <section>
                <p>Designed & Built by Emil Zlatinov</p>
            </section>
        </footer>
    );
}

export default Footer;
