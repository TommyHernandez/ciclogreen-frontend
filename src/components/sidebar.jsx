import React from 'react';
import { NavLink } from 'react-router-dom';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import MapRoundedIcon from '@material-ui/icons/MapRounded';

export const Sidebar = ({ showed }) => {
  return (
    <aside className={showed ? 'showed' : ''}>
      <ul>
        <li>
          <DashboardRoundedIcon color="secondary" />
          <NavLink to="/dashboard" activeClassName="selected">
            Dashboard
          </NavLink>
        </li>
        <li>
          <MapRoundedIcon color="secondary" />
          <NavLink to="/rutas" activeClassName="selected">
            Rutas
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};
