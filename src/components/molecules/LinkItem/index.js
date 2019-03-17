import React from 'react';
import './LinkItem.scss';
import ListItem from '../../atoms/ListItem';
import VisibleLink from '../../hoc/VisibleLink';

const LinkItem = ({ href, isExternal, liClassName, className, children }) => (
    <ListItem className={liClassName}>
        <VisibleLink href={href} isExternal={isExternal} className={className}>
            {children}
        </VisibleLink>
    </ListItem>
);

export default LinkItem;