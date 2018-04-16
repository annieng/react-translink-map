import {combineReducers} from 'redux';
import buses from './busesReducer';

const rootReducer = combineReducers({
  buses
});

export default rootReducer;