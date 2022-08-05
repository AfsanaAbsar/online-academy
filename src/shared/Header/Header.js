import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='menubar'>
            <div className='logo'><p>ONLINE ACADEMY</p></div>
            <div className='menu-items'>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Courses</a>
                <a href="">Log In</a>
                <a className='reg-btn' href="">Register</a>
            </div>
        </div>
    );
};

export default Header;