export default {
    login(email, password){
        return axios.post(apiBaseUrl + 'login', {email, password});
    }
}