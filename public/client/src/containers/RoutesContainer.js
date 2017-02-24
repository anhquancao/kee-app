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
import * as authActions from '../actions/authActions';

class RoutesContainer extends Component {
    constructor(props, context) {
        super(props, context);
        this.checkLoggedIn = this.checkLoggedIn.bind(this);
        this.requireAuth = this.requireAuth.bind(this);
        this.authNotAccess = this.authNotAccess.bind(this);
        // this.firstLocation = "";
        this.checkLoggedIn();
        this.routes = (
            <Route path="/" component={AppContainer}>
                <IndexRoute component={HomeContainer}/>
                <Route path="/login" component={LoginContainer} onEnter={this.authNotAccess}/>
                <Route path="/dashboard" component={DashboardContainer} onEnter={this.requireAuth}/>
                <Route path="*" component={NotFoundPage}/>
            </Route>
        );
    }


    componentWillMount() {
        this.checkLoggedIn();
    }

    checkLoggedIn() {
        let that = this;
        /* eslint-disable */
        return localforage.getItem("kee_app_token", function (err, token) {
            if (token != null) {
                const expire = token.expire;
                const today = new Date();

                if (expire.getTime() > today.getTime()) {
                    that.props.authActions.loadUserFromToken(token.user, token.value);
                    if (that.firstLocation) {
                        browserHistory.push(that.firstLocation);
                        that.firstLocation="";
                    }
                } else {
                    browserHistory.push("/");
                    localforage.removeItem("kee_app_token");
                }
            }
        });
        /* eslint-enable */
    }

    authNotAccess() {
        if (this.props.isLoggedIn) {
            browserHistory.push("/");
        } else {
            return true;
        }
    }

    requireAuth(nextState) {
        this.firstLocation = nextState.location.pathname;
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
    isLoggedIn: PropTypes.bool,
    history: PropTypes.object,
    authActions: PropTypes.object
};

function mapStateToProps(state) {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
}

function mapDispatchToProps(dispatch) {
    return {
        authActions: bindActionCreators(authActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RoutesContainer);