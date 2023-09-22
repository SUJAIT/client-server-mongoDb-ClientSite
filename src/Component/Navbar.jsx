import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Link to='/app'>Insert Data </Link>
            <Link to='/users'>All Users</Link>
          
        </div>
    );
};

export default Navbar;