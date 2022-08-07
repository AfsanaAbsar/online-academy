import React from 'react';
import ServiceCard from './ServiceCard';
import './Services.css'
const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Qualified Teachers",
            img: "https://i.ibb.co/PC9rxDr/qualifiedteachers.png"
        },
        {
            _id: 2,
            name: "Online courses",
            img: "https://i.ibb.co/hFRB4fF/onlinecourses.png"
        },
        {
            _id: 3,
            name: "course certificate",
            img: "https://i.ibb.co/bQD0Dtm/coursecertificate.png"
        },
        {
            _id: 4,
            name: "mastery learning",
            img: "https://i.ibb.co/yySKm3X/masterylearning.png"
        },
        {
            _id: 5,
            name: "participating in quizes",
            img: "https://i.ibb.co/K5pq9pB/participatequize.png"
        },
        {
            _id: 6,
            name: "skill development",
            img: "https://i.ibb.co/cc9hv00/skilldevelopment.png"
        },
    ]
    return (
        <div >
            <div className='service-title'>
                <h1>Why choose Us?</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident atque aspernatur quis aut quo est. </p>
                <p>Provident atque aspernatur quis aut quo est.</p>
            </div>
            <div className='services-area'>
                <div className='service-cards'>
                    {
                        services.map(service => <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;