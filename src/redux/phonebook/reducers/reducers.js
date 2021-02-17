import { combineReducers } from 'redux';
import actionTypes from '../actions/actionsTypes';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.ADD:
      return [payload, ...state];

    case actionTypes.DELETE:
      return state.filter(({ id }) => id !== payload);
    
    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});