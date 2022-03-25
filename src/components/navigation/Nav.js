import React from 'react';
import { NavLink } from "react-router-dom";
import '../../App.css';
import './Nav.css';

function Nav() {
    return (
        <nav className='nav-bar'>
            <div className='left-container'>
            <span>
                <NavLink to='/' className='logo'>Clove Therapy</NavLink>
            </span>
                <ul className='nav-items'>
                    <li><NavLink to='/about-us'>About</NavLink></li>
                    <li><NavLink to='/services'>Services</NavLink></li>
                    <li><NavLink to='/team'>Team</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
            </div>
            {/*<Button/>*/ }
        </nav>
    );
}

export default Nav;