import React from 'react';
import s from './ProfileInfo.module.scss';
import Preloader from '../../common/preloader/preloader';
import CONST from '../../../CONST';

const ProfileInfo = props => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <h2>{ props.profile.fullName }</h2>
                <img src={
                    props.profile.photos.large
                    ? props.profile.photos.large
                    : CONST.PHOTO_URL
                } alt=""/>
            </div>
            <div className={ s.descriptionBlock }>
                { props.profile.lookingForAJobDescription }
            </div>
        </div>
    );
};

export default ProfileInfo;
