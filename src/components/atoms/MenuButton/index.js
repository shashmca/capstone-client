import React from 'react';
import './MenuButton.scss';

function handleClick({ isMenuCollapsed, showMenu, hideMenu }) {
    if (isMenuCollapsed) {
        showMenu();
    } else {
        hideMenu();
    }
}

const MenuButton = (props) => (
    <button type="button" className="wwn-header-menu" onClick={() => handleClick(props)}>
        {/*?xml version="1.0"?*/}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
            <path style={{ lineHeight: 'normal', textIndent: 0, textAlign: 'start', textDecorationLine: 'none', textDecorationStyle: 'solid', textDecorationColor: '#000', textTransform: 'none', blockProgression: 'tb', isolation: 'auto', mixBlendMode: 'normal' }} d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" fontWeight={400} fontFamily="sans-serif" white-space="normal" overflow="visible" />
        </svg>
        <span className="sr-only">Hamburger Menu</span>
    </button>
);

export default MenuButton;