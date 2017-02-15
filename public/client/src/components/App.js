import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            {/*<a className="navbar-brand" href="#">KeeApp</a>*/}
                            <IndexLink to="/">
                                <span className="navbar-brand">KeeApp</span>
                            </IndexLink>
                        </div>

                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link to="/login">Đăng nhập</Link>
                            </li>
                        </ul>

                    </div>
                </nav>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.element
};

export default App;
