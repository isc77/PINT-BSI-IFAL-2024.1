import React from 'react';
import './App.css';

function SidebarMenu({ isOpen, toggleSidebar }) {
  return (
    <div className={`sidebar-menu ${isOpen ? 'open' : ''}`}>
      <ul>
        <li><a href="/">Início</a></li>
        <li><a href="/Funcionalidades">Funcionalidades</a></li>
        <li><a href="/Sobre">Sobre</a></li>
      </ul>
      <button onClick={toggleSidebar} className="close-btn">X</button>
    </div>
  );
}

export default SidebarMenu;
