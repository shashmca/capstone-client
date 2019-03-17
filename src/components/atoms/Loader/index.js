import React from 'react';
import './Loader.scss';

const Loader = () => (
    <div className="j-act-skeleton">
        <div className="j-act-skeleton-top"><span className="j-act-skeleton-avatar" /><span className="j-act-skeleton-name" /><span className="j-act-skeleton-meta" /></div>
        <p className="j-act-skeleton-content" />
        <p className="j-act-skeleton-content" />
    </div>
);

export default Loader;