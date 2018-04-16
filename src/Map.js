import React, {Component} from 'react';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const request = require('superagent');

request
  .get('/rttiapi/v1/buses')
  .query({ apikey: process.env.REACT_APP_TRANSLINK_KEY })
  .set('Accept', 'application/json')
  .withCredentials()
  .end((err, res) => {
    // Calling the end function will send the request
    console.log(err);
    console.log(res.body);
  });

class Map extends Component {

  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 49.2827,
      longitude: -123.1207,
      zoom: 10
    }
  };

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewport) => this.setState({viewport})}
      />
    );
  }
}

export default Map;