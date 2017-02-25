import React, {PropTypes, Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import Validator from '../utils/Validator';
import RenderField from './RenderField';

class RegisterForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div className="panel-body">
                    <Field type="text" name="name" component={RenderField}
                           label="Họ tên"/>
                    <Field type="text" component={RenderField} name="email"
                           label="Email"/>
                    <Field type="password" name="password"
                           component={RenderField}
                           label="Mật khẩu"/>
                    <Field type="password"
                           component={RenderField}
                           name="passwordConfirmation"
                           label="Xác nhận mật khẩu"/>

                    {
                        this.props.isProcessing ? <Loading/> :
                            <div className="form-group">
                                <button type="submit" className="btn btn-default">Đăng kí</button>
                            </div>
                    }

                </div>

            </form>

        );
    }
}
const validate = values => {
    const errors = {};
    if (!values.name || values.name.trim() === '') {
        errors.name = "Bạn vui lòng nhập tên";
    }
    if (!values.email || values.email.trim() === '') {
        errors.email = 'Bạn vui lòng nhập email';
    } else if (!Validator.validateEmail(values.email)) {
        errors.email = 'Email chưa đúng định dạng';
    }
    if (!values.password || values.password.trim() === '') {
        errors.password = 'Bạn vui lòng nhập password';
    } else if (!Validator.validatePassword(errors.password)) {
        errors.password = 'Mật khẩu cần có độ dài ít nhất 8 kí tự bao gồm cả Số và Chữ';
    } else if (values.password !== values.passwordConfirmation) {
        errors.passwordConfirmation = 'Mật khẩu và xác nhận chưa khớp';
    }
    return errors;
};

RegisterForm.propTypes = {
    isProcessing: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
    form: "register",
    validate
})(RegisterForm);
