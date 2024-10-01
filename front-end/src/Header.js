import React from 'react';
import logo from './images/logo.png';  // Certifique-se de que o logo está sendo importado corretamente
import './App.css';  // Se o CSS do Header estiver em um arquivo separado

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo ProvaEDU" className="logo" />
      </div>
      <nav className="header-nav">
        <a href="/login">Login</a>
        <a href="/signup" className="cta-button">Cadastre-se</a>
      </nav>
    </header>
  );
}

export default Header;
