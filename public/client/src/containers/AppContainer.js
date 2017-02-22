import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import NavLink from '../components/NavLink';
import {IndexLink} from 'react-router';

class AppContainer extends Component {
    constructor(props, context) {
        super(props, context);
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
                                    <li>
                                        <p className="navbar-text">{this.props.user.name}</p>
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
    children: PropTypes.element
};

function mapStateToProps(state) {
    return {
        user: state.auth.user,
        isLoggedIn: state.auth.isLoggedIn
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);