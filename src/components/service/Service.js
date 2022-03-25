import React from 'react';
import './Service.css'

const Service = ({description, alt, image}) => {
    return (
        <div className="div-container">
            <img className="image-container" src={image} alt={alt}/>
            <h4>{description}</h4>
        </div>

    );
};

export default Service;