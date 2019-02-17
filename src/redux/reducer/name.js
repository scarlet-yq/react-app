import {MODIFY_NAME, EMPTY_NAME,REQUEST_MESSAGE } from '../constants/actionTypes.js';

export function modifyNameReducer(state = {name: '二狗子'}, action) {
    switch(action.type) {
        case MODIFY_NAME:
            return Object.assign({}, state, action);
            break;
        case EMPTY_NAME:
            return Object.assign({}, state, {name: '---'});
            break;
        case REQUEST_MESSAGE:
            return Object.assign({}, state, action);
        default:
            return state;
    }
}