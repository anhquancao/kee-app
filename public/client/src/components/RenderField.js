import React, {PropTypes} from 'react';

const RenderField = ({input, label, type, meta: {touched, error, warning}}) => (
    <div className="form-group">
        <label htmlFor="password">{label}</label>
        <input {...input}  className="form-control" placeholder={label} type={type}/>
        {touched && ((error && <div className="alert alert-danger">{error}</div>) || (warning && <span>{warning}</span>))}
    </div>
);


RenderField.propTypes = {
    input: PropTypes.object,
    label: PropTypes.string,
    type: PropTypes.string,
    meta: PropTypes.object
};

export default RenderField;