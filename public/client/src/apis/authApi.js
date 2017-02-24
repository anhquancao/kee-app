import axios from 'axios';
import {API_BASE_URL} from '../constants/.env';

export default {
    login(email, password){
        return axios.post(API_BASE_URL + 'login', {email, password});
    }
};