import React from 'react';

const { ipcRenderer } = window.require('electron');
/* eslint-disable import/first */
import '../../styles/NavbarStyle.css';
import logo from '../../img/logo.png';


const Navbar = () =>
  <div className='nav-container'>
    <div className='logo-container'>
      <img src={logo} alt={'logo'}
           className='logo'/>
    </div>
    <div className='nav-links-container'>
      <div className='nav-link'>
        <span className='nav-link-text'>Login</span>
      </div>
      <div className='nav-link'>
        <span className='nav-link-text'>Sign up</span>
      </div>
    </div>
  </div>;


export default Navbar;
