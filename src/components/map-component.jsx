import React from 'react';
import { GoogleMap, withGoogleMap } from 'react-google-maps';

export const MapComponent = withGoogleMap((props) => {console.log(props);
  return(
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: props.coors[0].ha, lng: props.coors[0].oa }}
  ></GoogleMap>
)});
