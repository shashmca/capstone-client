import React from 'react';
import LinkIcon from '../../atoms/LinkIcon';
import VisibleLink from '../../hoc/VisibleLink';
import ListItem from '../../atoms/ListItem';
import './FooterLinkItem.scss';

const FooterLinkItem = ({ href, isExternal, liClassName, className, iconClassName, children }) => (
    <ListItem className={liClassName}>
        <LinkIcon className={iconClassName} />
        <VisibleLink href={href} isExternal={isExternal} className={className} disableClick={true}>
            {children}
        </VisibleLink>
    </ListItem>
);

export default FooterLinkItem;