import axios from 'axios';
import {API_BASE_URL} from '../constants/.env';

export default {
    login(email, password){
        return axios.post(API_BASE_URL + 'login', {email, password});
    },
    register(email, password, name, password_confirmation){
        return axios.post(API_BASE_URL + 'register', {email, password, name, password_confirmation});
    },
    refreshToken(token){
        return axios.get(API_BASE_URL + "refresh-token?token=" + token);
    }
};