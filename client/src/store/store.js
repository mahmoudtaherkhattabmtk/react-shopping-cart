import {createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers/reducer';
import reduxThunk from 'redux-thunk'; 

const initState = {};
const enhancer = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose
const store = createStore(reducer, initState, enhancer(applyMiddleware(reduxThunk)))
export default store


//create static type 
//crete action creator => dispatch(action)
//create reducer
// view 
