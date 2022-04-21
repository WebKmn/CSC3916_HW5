/*
* Review Actions feeds data into review Reducer using dispatch
*/

import actionTypes from '../constants/actionTypes';
import runtimeEnv from '@mars/heroku-js-runtime-env';

function setReview(){
    return {
        type: actionTypes.SET_REVIEW
    }
}

export function submitReview(data){
    const env = runtimeEnv();
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/reviews`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify(data),
            mode: 'cors'
        }).then((response) =>{
            if(!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        }).then(() => {
            dispatch(setReview());
        }).catch((e) => console.log(e));
    }
}