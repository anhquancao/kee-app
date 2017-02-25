import {combineReducers} from 'redux';
import fuelSavings from './fuelSavingsReducer';
import authReducer from './authReducer';
import {routerReducer} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    fuelSavings,
    routing: routerReducer,
    auth: authReducer,
    form: formReducer
});

export default rootReducer;
