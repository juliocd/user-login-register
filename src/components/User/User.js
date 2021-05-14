import React from 'react';

import styles from './User.module.css';

const User = (props) => {
    return (
        <label key={props.id}>{props.username} ({props.age} years old)</label>
    )
}

export default User;