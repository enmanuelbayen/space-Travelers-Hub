import React from 'react';
import { NavLink } from 'react-router-dom';
import { TbPlanet } from 'react-icons/tb';

const Navbar = () => (
  <header className="header flex">
    <div className="nav-container flex">
      <p><TbPlanet className="userLogo" /></p>
      <logo className="logo">Space Travelers' Hub</logo>
    </div>
    <nav className="nav flex">
      <NavLink
        to="/"
        className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}
      >
        Rockets
      </NavLink>
      <NavLink
        to="/Missions"
        className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}
      >
        Missions
      </NavLink>
      <span />
      <NavLink
        to="/MyProfile"
        className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}
      >
        My Profile
      </NavLink>
    </nav>
  </header>
);

export default Navbar;
