import React from 'react';
import {Marker} from 'react-map-gl';


const Bus = (props) => {
  return (
    <Marker latitude={props.Latitude} longitude={props.Longitude} offsetLeft={-5} offsetTop={-5}>
      <div className="bus" onClick={props.onClick}/>
    </Marker>
  );
}

export default Bus;