import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import RegisterForm from '../components/RegisterForm';
// Import actions here!!
import * as authActions from '../actions/authActions';

class RegisterContainer extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        // console.log(values);
        this.props.authActions.register(values);
    }

    render() {
        return (
            <div className="container">
                <div className="col-sm-6 col-sm-offset-3">
                    <div className="panel panel-default">
                        <div className="panel-heading">Đăng kí</div>
                        {this.props.registerError && <div className="alert alert-danger">{this.props.registerError}</div>}
                        <RegisterForm
                            isProcessing={this.props.isProcessing}
                            onSubmit={this.handleSubmit}/>
                    </div>
                </div>
            </div>
        );
    }
}

RegisterContainer.propTypes = {
    isProcessing: PropTypes.bool.isRequired,
    authActions: PropTypes.object.isRequired,
    registerError: PropTypes.string
};

function mapStateToProps(state) {
    return {
        isProcessing: state.auth.isProcessing,
        registerError: state.auth.registerError
    };
}

function mapDispatchToProps(dispatch) {
    return {
        authActions: bindActionCreators(authActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);