import React from 'react';
import './Username.scss';

const Username = ({ username }) => (
    <div className="wwn-username">
        <span className="wwn-username-welcomemsg">Welcome </span>
        <span className="wwn-username-value">{username}</span>
    </div>
);

export default Username;