import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import peopleReducer from './reducers';

const store = createStore(combineReducers({ peoples: peopleReducer }), applyMiddleware(thunk));

export default store;
