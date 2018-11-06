import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <NavLink
        to="/"
        exact
        activeStyle={{background: '#f9f7f7', color: '#5385d4'}}>Home</NavLink>

      <NavLink
        to="/candidates"
        exact
        activeStyle={{background: '#f9f7f7', color: '#5385d4'}}>Candidates</NavLink>

      <NavLink
        to="/questions"
        exact
        activeStyle={{background: '#f9f7f7', color: '#5385d4'}}>Questions</NavLink>

      <NavLink
        to="/polls"
        exact
        activeStyle={{background: '#f9f7f7', color: '#5385d4'}}>Polling Locations</NavLink>

      <NavLink
        to="/earlyvoting"
        exact
        activeStyle={{background: '#f9f7f7', color: '#5385d4'}}>Early Voting</NavLink>
    </>
)}

export default NavBar