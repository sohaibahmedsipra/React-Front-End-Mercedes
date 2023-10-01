import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './social.css';

const Social = () => {
    return (
        <div className="social">
            <div className="social-text">
                <p>Follow Mercedes-Benz</p>
            </div>
            <div className="social-icons">
                <a href="https://www.facebook.com/mercedesbenz" target="_blank"><FacebookIcon className="icon" style={{ fontSize: '40px', color: '#000000' }} /></a>
                <a href="https://www.linkedin.com/company/mercedes-benz_ag/" target="_blank"><LinkedInIcon className="icon" style={{ fontSize: '40px', color: '#000000' }} /></a>
                <a href="https://www.instagram.com/mercedesbenz/" target="_blank"><InstagramIcon className="icon" style={{ fontSize: '40px', color: '#000000' }} /></a>
                <a href="https://twitter.com/MercedesBenz" target="_blank"><TwitterIcon className="icon" style={{ fontSize: '40px', color: '#000000' }} /></a>
                <a href="https://www.youtube.com/user/MercedesBenzTV" target="_blank"><YouTubeIcon className="icon" style={{ fontSize: '40px', color: '#000000' }} /></a>
            </div>
        </div>
    );
}

export default Social;