import React from 'react';

import logo from '../../../../logo.svg';
import s from './post.module.scss';

const Post = props => {
    return (
        <div className={s.item}>
            <img src={logo} alt=""/>
            {props.message}
            <br/>
            <span>Like</span> {props.likesCount}
        </div>
    )
};

export default Post;
