import {combineReducers} from 'redux';
import {modifyNameReducer} from './name.js';
import {routerReducer} from 'react-router-redux';

export const rootReducer = combineReducers({
    modifyNameReducer: modifyNameReducer,
    routerReducer
})