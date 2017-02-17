import * as types from '../constants/actionTypes';
import calculator from '../utils/fuelSavingsCalculator';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function authReducer(state = initialState.auth, action) {

    switch (action.type) {
        case types.UPDATE_LOGIN_FORM:
            return objectAssign({}, state, {user: action.user});
        case types.LOGGING_IN:
            return objectAssign({}, state, {isProcessing: true});
        case types.LOG_IN_SUCCESS:
            return objectAssign({}, state, {
                isProcessing: false,
                user: objectAssign({}, action.user, {password: ""})
            });
        default:
            return state;
    }
}
