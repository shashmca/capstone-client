import React from 'react';
import './Body.scss';
import Content from '../Content';

const Body = () => {
    if (window.location.pathname === '/') {
        return (
            <div className="wwn-body">
                <Content />
            </div>
        );
    }
    return (
        <div className="wwn-body">
            <Content />
        </div>
    );
};

export default Body;