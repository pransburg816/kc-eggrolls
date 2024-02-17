import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div class="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">React App</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </nav>
        </div>
    );
}

export default Navbar;
