import React from 'react';
import Logo from '../images/logo-camera.png';
const Header =()=> {
    return (
      <header>
        <h2>InstaClone</h2>
        <img id ="insta-logo" src ={Logo} alt = "insta-logo" />
      </header>
    );
  }
  
  export default Header;