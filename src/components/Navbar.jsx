import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/wp-json/wp/v2/menus/menu-3')
            .then(response => response.json())
            .then(data => {
                console.log(data); // Debug: Log the data to see its structure
                // Assuming 'data' is the array of menu items; adjust if it's nested
                if (Array.isArray(data)) { // Check if 'data' is an array before setting it
                    setMenuItems(data);
                } else {
                    console.error('Fetched data is not an array:', data);
                }
            })
            .catch(error => console.error('Fetching error:', error));
    }, []);

    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">React App</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        {Array.isArray(menuItems) && menuItems.map((item) => (
                            <li className="nav-item" key={item.ID}>
                                <Link className="nav-link" to={item.url}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
