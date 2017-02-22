import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import  {Router, Route, IndexRoute, browserHistory} from 'react-router';
import AppContainer from './AppContainer';
import HomeContainer from './HomeContainer';
import LoginContainer from './LoginContainer';
import DashboardContainer from './DashboardContainer';
import NotFoundPage from '../components/NotFoundPage';
// Import actions here!!

class RoutesContainer extends Component {
    constructor(props, context) {
        super(props, context);
        this.requireAuth = this.requireAuth.bind(this);
        this.routes = (
            <Route path="/" component={AppContainer}>
                <IndexRoute component={HomeContainer}/>
                <Route path="/login" component={LoginContainer}/>
                <Route path="/dashboard" component={DashboardContainer} onEnter={this.requireAuth}/>
                <Route path="*" component={NotFoundPage}/>
            </Route>
        );
    }

    requireAuth() {
        if (this.props.isLoggedIn) {
            return true;
        } else {
            browserHistory.push("/");
        }
    }

    render() {
        return (
            <Router history={this.props.history} routes={this.routes}/>
        );
    }
}

RoutesContainer.propTypes = {
    isLoggedIn: PropTypes.bool
};

function mapStateToProps(state) {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RoutesContainer);