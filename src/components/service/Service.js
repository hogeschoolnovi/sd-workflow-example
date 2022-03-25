import React from 'react';

const Service = ({description, alt, image}) => {
    return (
        <div className="div-container">
            <img src={image} alt={alt}/>
            <h4>{description}</h4>
        </div>

    );
};

export default Service;