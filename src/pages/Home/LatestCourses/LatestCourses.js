import React from 'react';
import './LatestCourses.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Navigation } from "swiper";
const LatestCourses = () => {
    const latests = [
        {
            id: 1,
            name: "varsity admission a to z",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consectetur debitis labore cumque nemo laboriosam quaerat corrupti ratione veniam tempore."
        },
        {
            id: 2,
            name: "Engineering admission a-z",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consectetur debitis labore cumque nemo laboriosam quaerat corrupti ratione veniam tempore."
        },
        {
            id: 3,
            name: "medical admission a to z",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consectetur debitis labore cumque nemo laboriosam quaerat corrupti ratione veniam tempore."
        }
    ]
    return (
        <div className='service-title'>
            <h1>Our latest courses</h1>
            <div className='latest-courses-card-area'>

                <div className='latest-courses-card'>
                    {
                        latests.map(latest => <div>
                            <h3>{latest.name}</h3>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default LatestCourses;