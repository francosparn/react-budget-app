import React from 'react';
import PropTypes from 'prop-types';

const Error = ({message}) => (
    <p className="alert alert-danger text-center mt-3"><img src="assets/img/error.png" alt="Error"/> {message}</p>
)

Error.propTypes = {
    message: PropTypes.string.isRequired
}
 
export default Error;