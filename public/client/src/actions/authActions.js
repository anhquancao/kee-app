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

function processUserAfterAuthenticated(user, tokenValue, dispatch) {
    let token = {
        user: user,
        value: tokenValue,
        expire: new Date(new Date().getTime() + (6 * 24 * 60 * 60 * 1000))
    };
    /* eslint-disable */
    localforage.setItem("kee_app_token", token);
    /* eslint-enable */
    dispatch({
        type: types.LOG_IN_SUCCESS,
        user: user,
        token: tokenValue
    });
    browserHistory.push('/dashboard');
}

export function register(user) {
    return function (dispatch) {
        dispatch({type: types.REGISTERING});
        authApi.register(user.email, user.password, user.name, user.password_confirmation)
            .then(res => {
                if (res.data.status == 0) {
                    dispatch({
                        type: types.REGISTER_ERROR,
                        registerError: res.data.message
                    });
                } else {
                    processUserAfterAuthenticated(res.data.user, res.data.token, dispatch);
                }
            })
            .catch(e => {
                const error = e.response.data;
                console.log(error);
                dispatch({
                    type: types.REGISTER_ERROR,
                    registerError: "Có lỗi xảy ra"
                });
            });
    }
}

export function login(user) {
    return function (dispatch) {
        dispatch({type: types.LOGGING_IN});
        authApi.login(user.email, user.password)
            .then(res => {
                processUserAfterAuthenticated(res.data.user, res.data.token, dispatch)
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
