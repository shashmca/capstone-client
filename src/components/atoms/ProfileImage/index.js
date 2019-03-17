import React from 'react';
import './ProfileImage.scss';

const ProfileImage = ({ imageUrl }) => (
    <div className="wwn-profile-image">
        <img src={imageUrl} alt="profile" />
    </div>
);

export default ProfileImage;