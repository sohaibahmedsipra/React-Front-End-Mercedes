import React, { useEffect } from 'react';
import "./footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__content">
                <div className="footer__content--top">
                    <Link to="/" className="footer__content--top-link">Home</Link>
                    <Link to="/contact" className="footer__content--top-link">Contact Us</Link>
                    <Link to="/policy" className="footer__content--top-link">Privacy Policy</Link>

                </div>
                <div className="footer__content--bottom">
                    <img src="Mercedes-Logo.svg.png" alt="Mercedes Logo" />
                    <p className="company-name" >Mercedes-Benz</p>
                    <p>© 2023 Mercedes-Benz USA, LLC. All rights reserved.</p>

                </div>
            </div>
        </div>
    );
}


export default Footer;