import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light justify-content-between">
                <a className="navbar-brand" >Task</a>
                <samp className='navbar-text'>Home </samp>
            </nav >
        </div >
    )
};

export default Navbar;
