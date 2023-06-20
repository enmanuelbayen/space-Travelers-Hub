/* eslint-disable*/
import React from 'react';
import { NavLink } from 'react-router-dom';
import space from '../space.jpg';

const Navbar = () => (
	<header className='header flex'>
		<div className='logo-container flex'>
			<img src={space} alt='A cute cat' />
			<h2 className='logo'>Space Travelers Hub</h2>
		</div>
		<nav className='nav flex'>
			<NavLink
				to='/'
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
				to='/Missions'
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
			<NavLink
				to='/dragons'
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
				Dragons
			</NavLink>
			<span />
			<NavLink
				to='/MyProfile'
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
