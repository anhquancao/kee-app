import {combineReducers} from 'redux';
import fuelSavings from './fuelSavingsReducer';
import authReducer from './authReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
    fuelSavings,
    routing: routerReducer,
    auth: authReducer
});

export default rootReducer;
