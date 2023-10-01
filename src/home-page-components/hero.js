import React from 'react';

import 'react-slideshow-image/dist/styles.css';
import './hero.css';
import { Fade } from 'react-slideshow-image';

const Hero = () => {
    const images = [
        "m1.jpg",
        "m2.jpg",
        "M7.jpg",
        "m5.jpg"
    ];

    return (
        // <Fade
        //     className="slide-container"    
        //     autoplay={true}    // Enable autoplay
        //     duration={3000}   // Set the duration for each slide (in milliseconds)
        // >
        //     {images.map((image, index) => (
        //         <div key={index} className="each-slide-effect">
        //             <div>
        //                 <img src={image} alt={`Slide ${index}`} />
        //             </div>
        //         </div>
        //     ))}
        // </Fade>

        <div className='hero'>
            <img src="m5.jpg" alt="Mercedes Benz" />
        </div>
    );
}

export default Hero;
