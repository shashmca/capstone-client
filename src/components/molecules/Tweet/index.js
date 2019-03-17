import React from 'react';
import { Link } from 'react-router-dom';
import './Tweet.scss';
import YTIcon from '../../atoms/YTIcon';

const Tweet = ({ displayName, isVerified, text, username, type, videoId }) => {
    if (type === 'yt') {
        return (
            <div className="wwn-yt-video col-md-4">
                <div className="wwn-yt-video-icon">
                    <YTIcon />
                </div>
                <div className="wwn-yt-video-box">
                    <iframe title="Promotional Video" src={`https://youtube.com/embed/${videoId}`} frameBorder={0} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
            </div>
        );
    }
    if (isVerified) {
        return (
            <div className="wwn-twitter-item col-md-4">
                <div className="tw-block-parent">
                    <div className="timeline-TweetList-tweet">
                        <div className="timeline-Tweet">
                            <div className="timeline-Tweet-brand">
                                <div className="Icon Icon--twitter" />
                            </div>
                            <div className="timeline-Tweet-author">
                                <div className="TweetAuthor"><Link className="TweetAuthor-link" href="#channel"> </Link><span className="TweetAuthor-avatar">
                                    <div className="Avatar"> </div></span><span className="TweetAuthor-name">{displayName} </span><span className="Icon Icon--verified"> </span><span className="TweetAuthor-screenName">{`@${username}`} </span></div>
                            </div>
                            <div className="timeline-Tweet-text">{text}</div>
                            <ul className="timeline-Tweet-actions">
                                <li className="timeline-Tweet-action"><button className="Icon Icon--heart" /></li>
                                <li className="timeline-Tweet-action"><button className="Icon Icon--share" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="wwn-twitter-item col-md-4">
            <div className="tw-block-parent">
                <div className="timeline-TweetList-tweet">
                    <div className="timeline-Tweet">
                        <div className="timeline-Tweet-brand">
                            <div className="Icon Icon--twitter" />
                        </div>
                        <div className="timeline-Tweet-author">
                            <div className="TweetAuthor"><Link className="TweetAuthor-link" href="#channel"> </Link><span className="TweetAuthor-avatar">
                                <div className="Avatar"> </div></span><span className="TweetAuthor-name">{displayName} </span><span className="TweetAuthor-screenName">{`@${username}`} </span></div>
                        </div>
                        <div className="timeline-Tweet-text">{text}</div>
                        <ul className="timeline-Tweet-actions">
                            <li className="timeline-Tweet-action"><button className="Icon Icon--heart" /></li>
                            <li className="timeline-Tweet-action"><button className="Icon Icon--share" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Tweet;