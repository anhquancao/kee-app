import * as types from '../constants/actionTypes';
import authApi from '../apis/authApi';
import {browserHistory} from 'react-router';

export function updateLoginForm(user) {
    return function (dispatch) {
        dispatch({
            type: types.UPDATE_LOGIN_FORM,
            user
        })
    }
}

export function login(user) {
    return function (dispatch) {
        dispatch({type: types.LOGGING_IN});
        authApi.login(user.email, user.password)
            .then(res => {
                let token = {
                    value: res.data.token,
                    expire: new Date(new Date().getTime() + (6 * 24 * 60 * 60 * 1000))
                };
                localforage.setItem("kee_app_token", token);
                dispatch({
                    type: types.LOG_IN_SUCCESS,
                    user: res.data.user
                });
                browserHistory.push('/dashboard');
            })
            .catch(e => {
                const error = e.response.data;
                dispatch({
                    type: types.LOG_IN_ERROR,
                    error: error.error
                });
            });

    }
}
