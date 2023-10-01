import React from "react";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import "./contact-hero.css";

export default function ContactHero() {
    return (
        <div className="contact-hero">
            <div className="contact-hero-text">
                <h3>CONTACT US</h3>
                <LocalPhoneIcon/> 
                <p>+92-333-5626720</p>
                <EmailIcon/>
                <p>
                    <a href="mailto: sohaibahmedsipra@gmail.com" target="_blank" rel="noopener noreferrer">
                    sohaibahmedsipra@gmail.com</a>

                </p>

            </div>
        </div>
    );
}