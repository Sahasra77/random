import React from 'react';
import { NavLink } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="navbar-logo">
                <img src="logo.png" alt="Logo" className="logo" />
                <span className="title">ISS Club</span>
            </div>
            <nav className="navbar-links">
                <NavLink to="/" exact className="nav-link">Home</NavLink>
                <NavLink to="/about" className="nav-link">About</NavLink>
                <NavLink to="/events" className="nav-link">Events</NavLink>
                <NavLink to="/gallery" className="nav-link">Gallery</NavLink>
            </nav>
            <div className="navbar-actions">
                <CiSearch className="search-icon" />
                <button className="signin-btn">Apply Now</button>
            </div>
        </header>
    );
};

export default Navbar;
