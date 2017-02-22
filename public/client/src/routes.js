import React from 'react';
import {Route, IndexRoute} from 'react-router';

import AppContainer from './containers/AppContainer';
import HomeContainer from './containers/HomeContainer';
import LoginContainer from './containers/LoginContainer';
import DashboardContainer from './containers/DashboardContainer';

import NotFoundPage from './components/NotFoundPage';

export default (
    <Route path="/" component={AppContainer}>
        <IndexRoute component={HomeContainer}/>
        <Route path="/login" component={LoginContainer}/>
        <Route path="/dashboard" component={DashboardContainer}/>
        <Route path="*" component={NotFoundPage}/>
    </Route>
);
