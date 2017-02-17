import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import HomeContainer from './containers/HomeContainer';
import LoginContainer from './containers/LoginContainer';

import FuelSavingsPage from './containers/FuelSavingsPage'; // eslint-disable-line import/no-named-as-default
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomeContainer}/>
        <Route path="/login" component={LoginContainer}/>
        <Route path="*" component={NotFoundPage}/>
    </Route>
);
