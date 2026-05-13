import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
       <div>
        <div className=" flex text-white text-2xl justify-between mr-2">
            <h1 className="text-rose-400 text-4xl justify-between">Naruto Maashi</h1>
        </div>
        <div className=" flex text-white text-2xl justify-end">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/gallery">Gallery</Link>
        </div>
       </div>
    )
}
export default Navbar;
