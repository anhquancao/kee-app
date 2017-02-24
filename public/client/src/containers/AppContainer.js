import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import NavLink from '../components/NavLink';
import {IndexLink, browserHistory, Link} from 'react-router';
import * as authActions from '../actions/authActions';

class AppContainer extends Component {
    constructor(props, context) {
        super(props, context);
        this.logOut = this.logOut.bind(this);
    }

    logOut() {
        this.props.authActions.logOut();
        browserHistory.push("/");
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <IndexLink to="/">
                                <span className="navbar-brand">KeeApp</span>
                            </IndexLink>
                        </div>

                        <ul className="nav navbar-nav navbar-right">
                            {
                                this.props.isLoggedIn ?
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                           aria-haspopup="true" aria-expanded="false">{this.props.user.name} <span
                                            className="caret"></span></a>
                                        <ul className="dropdown-menu">
                                            <li><Link to="/dashboard">Quản lý</Link></li>
                                            <li role="separator" className="divider"></li>
                                            <li><a href="#" onClick={this.logOut}>Đăng xuất</a></li>
                                        </ul>
                                    </li>

                                    : (
                                        <NavLink to="/login">
                                            Đăng nhập
                                        </NavLink>
                                    )
                            }
                        </ul>

                    </div>
                </nav>
                {this.props.children}
            </div>
        );
    }
}

AppContainer.propTypes = {
    user: PropTypes.object,
    isLoggedIn: PropTypes.bool,
    children: PropTypes.element,
    authActions: PropTypes.object
};

function mapStateToProps(state) {
    return {
        user: state.auth.user,
        isLoggedIn: state.auth.isLoggedIn
    };
}

function mapDispatchToProps(dispatch) {
    return {
        authActions: bindActionCreators(authActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);