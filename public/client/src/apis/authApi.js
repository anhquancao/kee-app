import axios from 'axios';
import env from '../constants/.env';

export default {
    login(email, password){
        return axios.post(env.API_BASE_URL + 'login', {email, password});
    },
    register(email, password, name, password_confirmation){
        return axios.post(env.API_BASE_URL + 'register', {email, password, name, password_confirmation});
    },
    refreshToken(token){
        return axios.get(env.API_BASE_URL + "refresh-token?token=" + token);
    }
};