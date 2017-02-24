import * as types from '../constants/actionTypes';
import authApi from '../apis/authApi';
import {browserHistory} from 'react-router';

export function loadUserFromToken(user, token) {
    return function (dispatch) {
        dispatch({
            type: types.LOG_IN_SUCCESS,
            user: user,
            token: token
        });

    };
}

export function logOut() {
    return function (dispatch) {
        dispatch({
            type: types.LOG_OUT
        });
        /* eslint-disable */
        localforage.removeItem("kee_app_token");
        /* eslint-enable */
    };
}

export function updateLoginForm(user) {
    return function (dispatch) {
        dispatch({
            type: types.UPDATE_LOGIN_FORM,
            user
        });
    };
}

export function login(user) {
    return function (dispatch) {
        dispatch({type: types.LOGGING_IN});
        authApi.login(user.email, user.password)
            .then(res => {
                let token = {
                    user: res.data.user,
                    value: res.data.token,
                    expire: new Date(new Date().getTime() + (6 * 24 * 60 * 60 * 1000))
                };
                /* eslint-disable */
                localforage.setItem("kee_app_token", token);
                /* eslint-enable */
                dispatch({
                    type: types.LOG_IN_SUCCESS,
                    user: res.data.user,
                    token: token.value
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

    };
}
