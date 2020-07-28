import React from 'react';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { app } from '../firebaseConfig';

export const NavBar = ({ navHandler }) => {
  const logOut = () => {
    app
      .auth()
      .signOut()
      .then(function () {})
      .catch(function (error) {
        console.error(error.message);
      });
  };
  return (
    <nav className="nav-bar">
      <h1>BeComercia</h1>
      <div className="group">
      <PowerSettingsNewIcon
          color="secondary"
          onClick={(e) => {
            logOut();
          }}
        />
        <div id="menuToggle">   
          <input type="checkbox" onChange={navHandler} />
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};
