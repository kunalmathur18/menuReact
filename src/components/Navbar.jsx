import React, { useState } from 'react';
import '../components/Navbar.css';
import img1 from '../components/images/logo.png';

const Navbar = () => {
    const [active, setActive] = useState('nav_menu');
    const [toggleIcon, setToggleIcon] = useState('nav_toggler');

    const navToggle = () => {
        setActive(active === 'nav_menu' ? 'nav_menu nav_active' : 'nav_menu');
        setToggleIcon(toggleIcon === 'nav_toggler' ? 'nav_toggler toggle' : 'nav_toggler');
    }

    return (
        <nav className='nav'>
            <div className='logo'>
                <a href="#" className="brand">
                  
                  <img src={img1} alt="" /> 
                </a>
            </div>
            <ul className={active}>
                <li className="nav_item">
                    <a href="#" className="nav_link">Product</a>
                </li>
                <li className="nav_item">
                    <a href="#" className="nav_link">Features</a>
                </li>
                <li className="nav_item">
                    <a href="#" className="nav_link">Marketplace</a>
                </li>
                <li className="nav_item">
                    <a href="#" className="nav_link">Company</a>
                </li>
            </ul>
            <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

export default Navbar;



