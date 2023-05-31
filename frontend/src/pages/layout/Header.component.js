import React from "react";
import './layout.styles.css';
import { NavLink } from "react-router-dom";

const Header=()=>(
    <div className="header">
        <ul>
        <li>
           <NavLink to="/">Dashboard</NavLink>
           <NavLink to="/about">About</NavLink>
           <NavLink to="/contact">Contact</NavLink>
           
           
        </li>
        </ul>
    </div>
);
export default Header;