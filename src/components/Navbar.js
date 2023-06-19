import React from 'react';
import { NavLink } from 'react-router-dom';
import { TbPlanet } from 'react-icons/tb';

const Navbar = () => (
  <header className="header flex">
    <div className="nav-container flex">
      <p><TbPlanet className="userLogo" /></p>
      <logo className="logo">Space Travelers Hub</logo>
    </div>
    <nav className="nav flex">
      <NavLink
        to="/"
        className={({ isActive, isPending }) => {
          if (isPending) {
            return 'pending';
          }
          if (isActive) {
            return 'active';
          }
          return '';
        }}
      >
        Rockets
      </NavLink>
      <NavLink
        to="/Missions"
        className={({ isActive, isPending }) => {
          if (isPending) {
            return 'pending';
          }
          if (isActive) {
            return 'active';
          }
          return '';
        }}
      >
        Missions
      </NavLink>
      <span />
      <NavLink
        to="/MyProfile"
        className={({ isActive, isPending }) => {
          if (isPending) {
            return 'pending';
          }
          if (isActive) {
            return 'active';
          }
          return '';
        }}
      >
        My Profile
      </NavLink>
    </nav>
  </header>
);

export default Navbar;
