require('./bootstrap');

import store from './store/store';

const app = new Vue({
    el: '#app',
    store
});
