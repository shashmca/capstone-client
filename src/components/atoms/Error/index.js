import React from 'react';
import './Error.scss';

const Error = ({ message }) => (
    <span className="wwn-error">
        {message}
    </span>
);

export default Error;