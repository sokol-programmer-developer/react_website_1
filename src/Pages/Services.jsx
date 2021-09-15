import React from 'react';
import './SittingPages.css';
import images1 from "./../images/img-1.webp";

const Services = () => {
    return (
        <>
            <div className="services_section">
                <img src={images1} alt="services_img-1" className="services_img"/>
                <h1 className="services_h1">SERVICES</h1>
            </div>
        </>
    );
};

export default Services;
