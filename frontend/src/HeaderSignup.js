import React from 'react';
import logo from './images/logo.png'; 
import './signup.css';  

const HeaderSignup = () => {
  return (
    <header className="headersignup">
      <div className="logo-container">
        <img src={logo} alt="Logo ProvaEDU" className="logo" />
      </div>
      <nav className="header-nav">
        <a href="/login" className="cta-button">Login</a>
      </nav>
    </header>
  );
}

export default HeaderSignup;
