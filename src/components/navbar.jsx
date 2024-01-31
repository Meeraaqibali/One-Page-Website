import React from 'react';
import { Link } from 'react-scroll';
import logo from '../images/logo1.png';


function MyNavbar() {
  return (
    <div>
      <nav>
        <Link to='main' className='logo'>
          <img src={logo} alt='logo'/>
        </Link>
        <input className='menu-btn' type='checkbox' id='menu-btn' />
        <label className='menu-icon' htmlFor='menu-btn'>
          <span className='nav-icon'></span>
        </label>
        <ul className="menu">
          <li>
            <Link to='main' className='active'>Home</Link>
          </li>
          <li>
            <Link to='features' >Features</Link>
          </li>
          <li>
            <Link to='services' >Services</Link>
          </li>
          <li>
            <Link to='subscribe'>Subscribe</Link>
          </li>
        </ul>
            <Link to='#' className="hey">To APP</Link>
      </nav>
    </div>
  );
}

export default MyNavbar;
