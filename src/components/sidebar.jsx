import React from 'react';
import { Link } from 'react-router-dom';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import MapRoundedIcon from '@material-ui/icons/MapRounded';
export const Sidebar = ({ showed }) => {
  return (
    <aside className={showed ? 'showed' : ''}>
      <ul>
        <li>
          <DashboardRoundedIcon />
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <MapRoundedIcon />
          <Link to="/rutas">Rutas</Link>
        </li>
      </ul>
    </aside>
  );
};
