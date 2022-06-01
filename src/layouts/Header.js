import React from 'react';
import Navbar from './Navbar';
import Card from './Card';
import '../styles/layouts/Header.css';

const Header = () => {
    return ( 
        <div className='header'>
            <Navbar/>
            <Card/>
        </div>
     );
}
 
export default Header;