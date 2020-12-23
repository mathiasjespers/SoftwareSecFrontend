import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const Navbar = () => {
    
  return (
    <nav>
        <h2>MathGame</h2>
        <div className="link-item-div">
            <Link className="link-item" to="/Game">Home</Link>
            <Link className="link-item" to="/ranking">Ranking</Link>
            <Link className="link-item" to="/profile">Profile</Link>
        </div>
        <div className="log-button-div">
            <LoginButton className="log-button" />
            <LogoutButton className="log-button" />
        </div>
    </nav>
  );
};

export default Navbar;