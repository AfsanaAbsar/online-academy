import React from 'react';
import './ServiceCard.css'
const ServiceCard = ({ service }) => {
    return (
        <div className='service'>
            <img className='service-img' src={service.img} alt={service.name} />
            <h3>{service.name}</h3>
        </div>
    );
};

export default ServiceCard;