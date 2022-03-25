import React from 'react';
import { NavLink } from "react-router-dom";
import './Nav.css';

function Nav() {
    return (
        <nav>
            <div class='logo'>Clove Therapy</div>
            <ul>
                <li><NavLink></NavLink></li>
                <li><NavLink></NavLink></li>
                <li><NavLink></NavLink></li>
                <li><NavLink></NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;