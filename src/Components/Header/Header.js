import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const navStyle = { 
        backgroundColor: 'blue', 
        paddingTop: '100px', 
        paddingBottom: '50px',
        color: 'white', 
        opacity: '0.6', 
        fontWeight: 'bold' 
    };
    const linkStyle = { 
        textDecoration: 'none', 
        color: 'white', 
    };
    return (
        <div className="header">
            <nav style={navStyle} className="text-center">
                <h1>
                    <Link style={linkStyle} to="/">Football Team Details</Link>
                </h1>
            </nav>
        </div>
    );
};

export default Header;