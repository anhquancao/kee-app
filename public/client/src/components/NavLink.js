import React, {PropTypes, Component} from 'react';
import {Link} from 'react-router';

export default class NavLink extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let isActive = this.context.router.isActive(this.props.to, true);
        let className = isActive ? "active" : "";
        return (
            <li className={className}>
                <Link {...this.props}>
                    {this.props.children}
                </Link>
            </li>
        );
    }
}

NavLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node
};
NavLink.contextTypes = {
    router: PropTypes.object
};

NavLink.defaultProps = {};