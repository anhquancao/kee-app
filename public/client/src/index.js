/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {browserHistory} from 'react-router';

import configureStore from './store/configureStore';
import axios from 'axios';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import {syncHistoryWithStore} from 'react-router-redux';
import RoutesContainer from './containers/RoutesContainer';


window.axios = axios;
window.apiBaseUrl = "http://kee.app/api/";

const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <RoutesContainer history={history}/>
    </Provider>, document.getElementById('app')
);