import React from 'react';
import { NavLink, useHistory } from "react-router-dom";
import '../../App.css';
import './Nav.css';
import Button from "../button/Button";

function Nav() {
    const history = useHistory();
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
            <Button children='Get Started' clickHandler={() => history.push('/contact')}/>
        </nav>
    );
}

export default Nav;