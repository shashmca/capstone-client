import React, { Component } from 'react';
import FooterLinkItem from '../FooterLinkItem';
import './FooterNav.scss';

const footerLinks = [];

const footerContext = require.context('../../templates/Pages', true, /\.js$/);
footerContext.keys().forEach(page => {
    const { metaData } = footerContext(page);
    if (metaData && metaData.isFooterLink) {
        footerLinks.push(metaData);
    }
});

class FooterNav extends Component {
    renderFooterLinks = (footerLinks) => {
        return footerLinks.map(({ title, link, isExternal }, index) => (
            <FooterLinkItem href={link} isExternal={isExternal} liClassName="wwn-footer-li" className="wwn-footer-li-link" iconClassName="wwn-footer-li-icon" key={index}>
                {title}
            </FooterLinkItem>
        ));
    };
    render() {
        return (
            <nav className="wwn-footer-nav">
                <ul className="wwn-footer-links">
                    {this.renderFooterLinks(footerLinks)}
                </ul>
            </nav>
        );
    }
}

export default FooterNav;