import React from 'react';
import { NavLink } from 'react-router-dom';
import './HeaderComponent.css'; 

export default function HeaderComponent() {
  return (
    <div class ="nav-links">
        <NavLink to='/' >Home</NavLink>
        <NavLink to='/About' >About</NavLink>
        <NavLink to='/Courses' >Courses</NavLink>
        <NavLink to='/Events' >Events</NavLink>
    </div>
  );
}