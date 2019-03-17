import React from 'react';
import './ListItem.scss';

const ListItem = ({ className, children }) => (
    <li className={className}>
        {children}
    </li>
);

export default ListItem;