import axios from 'axios';
import {
    LOGIN_SUCCESS, LOGIN_FAILURE
} from './actionTypes';

const apiUrl = "https://floating-crag-05232.herokuapp.com"

export const authLogin = (authInfo) => {
    return (dispatch) => {
        return axios.post(`${apiUrl}/users/login`, authInfo)
            .then(response => {
                dispatch(loginSuccess(response.data.token));
                localStorage.setItem('token', response.data.token);
            })
            .catch(error => {
                dispatch(loginFailure());
            })
    }
}

export const loginSuccess = () => {
    return {
        type: LOGIN_SUCCESS,
    }
}

export const loginFailure = () => {
    return {
        type: LOGIN_FAILURE,
        payload: 'Invalid email or password.'
    }
}