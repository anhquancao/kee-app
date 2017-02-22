import * as types from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function authReducer(state = initialState.auth, action) {

    switch (action.type) {
        case types.UPDATE_LOGIN_FORM:
            return objectAssign({}, state, {user: action.user});
        case types.LOGGING_IN:
            return objectAssign({}, state, {
                isProcessing: true,
                error: ''
            });
        case types.LOG_IN_SUCCESS:
            return objectAssign(
                {}, state, {
                    isLoggedIn: true,
                    isProcessing: false,
                    error: '',
                    user: objectAssign({}, action.user, {password: ""})
                }
            );
        case types.LOG_IN_ERROR:
            return objectAssign({}, state, {
                error: action.error,
                isProcessing: false
            });
        default:
            return state;
    }
}
