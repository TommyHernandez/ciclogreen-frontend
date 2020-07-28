import React, { useState } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DetailsIcon from '@material-ui/icons/Details';
import {MapComponent} from '../components';
const getPrettyDate = (date) => {
  const d = new Date(date.seconds * 1000);
  return ` ${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`;
};
export const Ruta = ({
  ciclos,
  distance,
  duration,
  type,
  uid,
  coord,
  timestamp,
}) => {
  const [show, setShow] = useState(false);
  return (
    <div className={show? 'route expanded':'route'}>
      <header onClick={() => {setShow(!show)}}>
        <div className="b-1">
          <AccountCircleIcon />
          <span className="type"> - {type}</span>
        </div>
        <div className="b-2">
          <span className="date">{getPrettyDate(timestamp)}</span>
          <DetailsIcon />
        </div>
      </header>
      <div className="content">
        <div className="map">
          <MapComponent containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />} coors={coord}/>
        </div>
        <div className="data-container">
          <div className="data-pill">
            <strong>Distancia:</strong>
            {distance} Km
          </div>
          <div className="data-pill">
            <strong>Duración</strong> {duration}
          </div>
          <div className="data-pill">
            <strong>Ciclos: </strong>
            {ciclos}
          </div>
          <div className="data-pill">
  <strong>CO2 ahorrado: {ciclos * (distance * 21)} g/co2</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
