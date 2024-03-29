import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import Loading from '../components/Loading';
// Import actions here!!
import * as authActions from '../actions/authActions';

class LoginContainer extends Component {
    constructor(props, context) {
        super(props, context);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        let user = Object.assign({}, this.props.user);
        user[event.target.name] = event.target.value;
        this.props.authActions.updateLoginForm(user);
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.authActions.login(this.props.user);
    }

    render() {
        return (
            <div className="container">
                <div className="col-sm-6 col-sm-offset-3">
                    <div className="panel panel-default">
                        <div className="panel-heading">Đăng nhập</div>
                        <form onSubmit={this.onSubmit}>
                            <div className="panel-body">
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="text" name="email" onChange={this.onChange}
                                           value={this.props.user.email} className="form-control"
                                           placeholder="Email"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Mật khẩu</label>
                                    <input type="password" name="password" onChange={this.onChange}
                                           value={this.props.user.password} className="form-control"
                                           placeholder="Mật khẩu"/>
                                </div>
                                {
                                    this.props.error && (
                                        <div className="alert alert-danger">
                                            {this.props.error}
                                        </div>
                                    )}

                                {
                                    this.props.isProcessing ? <Loading/> :
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-default">Đăng nhập</button>
                                        </div>
                                }
                                <div className="alert alert-info">
                                    Bạn chưa có tài khoản?
                                    <Link to="/register"> Bấm vào đây để tại tài khoản.</Link>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

LoginContainer.propTypes = {
    authActions: PropTypes.object.isRequired,
    user: PropTypes.object,
    error: PropTypes.string.isRequired,
    isProcessing: PropTypes.bool
};

function mapStateToProps(state) {
    return {
        user: state.auth.user,
        error: state.auth.error,
        isProcessing: state.auth.isProcessing
    };
}

function mapDispatchToProps(dispatch) {
    return {
        authActions: bindActionCreators(authActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);