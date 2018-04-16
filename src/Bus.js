import React from 'react';
import {Marker} from 'react-map-gl';


const Bus = (props) => {
  return (
    <Marker latitude={props.Latitude} longitude={props.Longitude}>
      <div className="bus" />
    </Marker>
  );
}

export default Bus;