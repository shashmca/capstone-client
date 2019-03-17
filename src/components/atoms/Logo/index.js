import React from 'react';
import { Link } from 'react-router-dom';
import psLogo from '../../../static/images/ps-logo.png';
import './Logo.scss';

const Logo = ({ href }) => {
    if (href) {
        return (
            <Link href={href} className="wwn-logo">
                <img src={psLogo} alt="Publicis Sapient" />
            </Link>
        );
    }
    return (
        <div className="wwn-logo">
            <img src={psLogo} alt="Publicis Sapient" />
        </div>
    );
};

export default Logo;