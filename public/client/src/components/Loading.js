import React, {PropTypes, Component} from 'react';

export default class Loading extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{position: "relative"}}>
                <div className="loader"></div>
                <div style={{
                    display: "inline-block",
                    height: "30px",
                    lineHeight: "30px",
                    position:"absolute",
                    marginLeft:'10px'
                }}>
                    {this.props.text}
                </div>
            </div>
        );
    }
}

Loading.propTypes = {
    text: PropTypes.string
};

Loading.defaultProps = {
    text: "Đang xử lý..."
};