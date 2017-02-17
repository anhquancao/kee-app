import * as types from '../constants/actionTypes';
import authApi from '../apis/authApi';

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
                localStorage.setItem("kee_app_token", JSON.stringify(token));
                dispatch({
                    type: types.LOG_IN_SUCCESS,
                    user: res.data.user
                });
            })
            .catch(e => {
                const error = e.response.data;
                console.log(error);
            });

    }
}
