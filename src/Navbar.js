import React from 'react';
import {Link } from 'react-router-dom';
function Navbar() {
    return (
        <nav className="navbar">
        <h1 className="a">Your Feed</h1>
            <div className="links">
                <Link to="/home">Home</Link>
                <Link to="/create">Create</Link>
            </div>

        </nav>
    )
}

export default Navbar;
