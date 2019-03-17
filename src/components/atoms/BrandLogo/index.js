import React from 'react';
import { Link } from 'react-router-dom';
import './BrandLogo.scss';
import brandLogo from '../../../static/images/wwnlogo.jpg';

const BrandLogo = ({ className, href, hideMenu }) => {
    href = window.location.pathname === '/' ? '/' : href;
    return (
        <div className={className}>
            <Link className="wwn-brand-link" to={href} onClick={() => hideMenu()}>
                <img src={brandLogo} className="wwn-brand-logo-img" alt="Wonderwomen Network" />
            </Link>
        </div>
    );
};

export default BrandLogo;