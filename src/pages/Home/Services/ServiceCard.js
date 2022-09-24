import React from 'react';
import './ServiceCard.css'
const ServiceCard = ({ service }) => {
    return (
        <div className='service'>
            <img className='service-img' src={service.img} alt={service.name} />
            <p>{service.name}</p>
        </div>
    );
};

export default ServiceCard;