import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// Import actions here!!

class DashboardContainer extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="container">
                <h1>Dashboard</h1>
            </div>
        );
    }
}

DashboardContainer.propTypes = {
    myProp: PropTypes.string
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

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);