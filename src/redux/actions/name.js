import {MODIFY_NAME, REQUEST_MESSAGE} from '../constants/actionTypes.js';
import axios from 'axios';

export function modifyName(name) {
    return {
        type: MODIFY_NAME,
        name
    }
}

function receiveData(actions) {
    return Object.assign({}, actions, {
        type: REQUEST_MESSAGE
    })
}

// 异步action
export function getData(id) {
    return dispatch => {
        axios.get('data/msg.json?id='+id)
        .then( ({data}) => {
            console.log("data", data)
            dispatch(receiveData(data.jsonResult))
        })
    }
}