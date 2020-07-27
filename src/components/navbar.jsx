import React from 'react';
export const NavBar = ({ navHandler }) => (
  <nav className="nav-bar">
    <h1>BeComercia</h1>
    <div id="menuToggle">
      <input type="checkbox" onChange={navHandler} />
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>
);
