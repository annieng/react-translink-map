import * as types from './actionTypes';

const request = require('superagent');

export function receiveBuses(json) {
  return {type: types.RECEIVE_BUSES, buses: json};
}

export function fetchBuses() {
  return dispatch => {
    return request
    .get('https://guisers-cors-proxy.herokuapp.com/http://api.translink.ca/rttiapi/v1/buses')
    .query({ apikey: process.env.REACT_APP_TRANSLINK_KEY })
    .set('Accept', 'application/json')
    .then(res => res.body)
    .then(json => dispatch(receiveBuses(json)))
    .catch(err => console.log(err));
  };
}