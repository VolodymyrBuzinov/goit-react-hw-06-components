import { createStore, combineReducers } from 'redux';
import phonebookReducer from './phonebook/reducers/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
const mainReducer = combineReducers({
  contacts: phonebookReducer,
});

const store = createStore(mainReducer, composeWithDevTools());


export default store;


