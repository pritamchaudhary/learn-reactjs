import React from 'react'
import { Link, NavLink } from 'react-router-dom';

function Header() {

    const navLinkStyles = ({ isActive }) =>{
        return {
            textDecoration: isActive ? "none" : "underline",
            color: isActive ? "red" : "white",
            fontSize: "25px"
        };
    };

  return (
    <div className='header'>
        <NavLink style={navLinkStyles} to={'/app'}>Home</NavLink>
        <NavLink style={navLinkStyles} to={'/about'}>About</NavLink>
        <NavLink style={navLinkStyles} to={'/contact'}>Contact</NavLink>
        
    </div>
  )
}

export default Header;