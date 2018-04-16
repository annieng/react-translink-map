import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as busActions from './actions/busActions';
import Bus from './Bus.js';
import React, {Component} from 'react';
import ReactMapGL, {Popup} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: 1000,
        height: 600,
        latitude: 49.2420,
        longitude: -122.9441,
        zoom: 10
      },
      popup: null
    };
    this._renderPopup = this._renderPopup.bind(this);
  }

  componentWillMount() {
    this.props.busActions.fetchBuses();
    setInterval(this.props.busActions.fetchBuses, 1000);
  }

  _renderPopup() {
    const {popup} = this.state;

    return popup && (
      <Popup tipSize={5}
        anchor="bottom"
        longitude={popup.Longitude}
        latitude={popup.Latitude}
        onClose={() => this.setState({popup: null})} >
        <p>Route No: {popup.RouteNo}</p>
        <p>Destination: {popup.Destination}</p>
        <p>Direction: {popup.Direction}</p>
        <p>Last updated: {popup.RecordedTime}</p>
      </Popup>
    );
  }

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewport) => this.setState({viewport})}
      >
        {this.props.buses.map((bus) =>
          <Bus {...bus} key={bus.VehicleNo} onClick={() => this.setState({popup: bus})} />
        )}
        {this._renderPopup()}
      </ReactMapGL>
    );
  }
}


function mapStateToProps(state) {
  return {
    buses: state.buses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    busActions: bindActionCreators(busActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);