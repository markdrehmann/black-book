import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ({loggedIn}) => {
  if (loggedIn) {
    return (
      <div className='NavBar'>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/"
      >
        Home
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/users/${this.props.user.id}/contacts"
      >
        Contacts
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/logout"
      >
        Log Out
      </NavLink>
    </div>
    )
  } else {
  return (
    <div className='NavBar'>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/"
      >
        Home
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/signup"
      >
        Sign Up
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/login"
      >
        Log In
      </NavLink>
    </div>
  );}
}

export default NavBar;
