import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// Import actions here!!

class HomeContainer extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <h1>Home page</h1>
        );
    }
}

HomeContainer.propTypes = {
    //myProp: PropTypes.string.isRequired
};

function mapStateToProps(state) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);