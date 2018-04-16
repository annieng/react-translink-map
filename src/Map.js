import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as busActions from './actions/busActions';
import Bus from './Bus.js';
import React, {Component} from 'react';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: 1000,
        height: 600,
        latitude: 49.2827,
        longitude: -123.1207,
        zoom: 10
      }
    };
  }

  componentWillMount() {
    this.props.busActions.fetchBuses();
    setInterval(this.props.busActions.fetchBuses, 100000);
  }

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewport) => this.setState({viewport})}
      >
        {this.props.buses.map((bus) => <Bus {...bus} key={bus.VehicleNo} />)}
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