import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import './Link.scss';

const onLinkClick = (e, hideMenu, disableClick) => {
    if (disableClick) {
        e.preventDefault();
    } else {
        hideMenu();
    }
};

const Link = ({ href, className, isExternal, children, role = 'button', hideMenu, disableClick }) => {
    if (href) {
        if (isExternal) {
            return (
                <a href={href} className={className} target="_blank" rel="noopener noreferrer" onClick={(e) => onLinkClick(e, hideMenu, disableClick)}>
                    {children}
                </a>
            );
        }
        return (
            <ReactLink to={href} className={className} onClick={(e) => onLinkClick(e, hideMenu, disableClick)}>
                {children}
            </ReactLink>
        );
    }
    return (
        <button tabIndex="0" className={className}>
            {children}
        </button>
    );
};

export default Link;