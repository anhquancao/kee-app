import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// Import actions here!!

class LoginContainer extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>Login</div>
        );
    }
}

LoginContainer.propTypes = {
    //myProp: PropTypes.string.isRequired
};

function mapStateToProps(state) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);