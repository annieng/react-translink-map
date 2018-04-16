import initialState from './initialState';
import {RECEIVE_BUSES} from '../actions/actionTypes';

export default function buses(state = initialState.buses, action) {
  let newState;
  switch (action.type) {
    case RECEIVE_BUSES:
      newState = action.buses;
      return newState;
    default:
      return state;
  }
}