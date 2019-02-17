import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from '../reducer';
import thunkMiddleware from 'redux-thunk';

let newCreateStore = applyMiddleware(thunkMiddleware)(createStore);
export const store = newCreateStore(rootReducer);