import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import RegisterForm from '../components/RegisterForm';
// Import actions here!!

class RegisterContainer extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log(values);
    }

    render() {
        return (
            <div className="container">
                <div className="col-sm-6 col-sm-offset-3">
                    <div className="panel panel-default">
                        <div className="panel-heading">Đăng kí</div>
                        <RegisterForm isProcessing={this.props.isProcessing} onSubmit={this.handleSubmit}/>
                    </div>
                </div>
            </div>
        );
    }
}

RegisterContainer.propTypes = {
    isProcessing: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return {
        isProcessing: state.auth.isProcessing
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);