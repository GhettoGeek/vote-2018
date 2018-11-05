import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <NavLink
        to="/"
        exact
        activeStyle={{background: 'white', color: '#5385d4'}}>Home</NavLink>

      <NavLink
        to="/candidates"
        exact
        activeStyle={{background: 'white', color: '#5385d4'}}>Candidates</NavLink>

      <NavLink
        to="/polls"
        exact
        activeStyle={{background: 'white'}}>Polling Locations</NavLink>

      <NavLink
        to="/earlyvoting"
        exact
        activeStyle={{background: 'white'}}>Early Voting</NavLink>
    </div>
)}

export default NavBar