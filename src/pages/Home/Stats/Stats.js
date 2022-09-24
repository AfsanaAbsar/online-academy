import React from 'react';
import './Stats.css'
const Stats = () => {
    return (
        <div>
            <div className='stats-area'>
                <div className='stat-unit'>
                    <p>Visitors</p>
                    <h1>500</h1>
                </div>
                <div className='stat-unit'>
                    <p>Users</p>
                    <h1>500</h1>
                </div>
                <div className='stat-unit'>
                    <p>Learners</p>
                    <h1>500</h1>
                </div>
                <div className='stat-unit'>
                    <p>Instructors</p>
                    <h1>500</h1>
                </div>
                <div className='stat-unit'>
                    <p>Courses</p>
                    <h1>500</h1>
                </div>

            </div>
        </div>
    );
};

export default Stats;