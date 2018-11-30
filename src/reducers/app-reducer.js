import { combineReducers } from 'redux';
import NavReducer from './nav-reducer';

const AppReducer = combineReducers({
  nav: NavReducer,
});

export default AppReducer;
