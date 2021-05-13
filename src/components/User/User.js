import React from 'react';

import styles from './User.module.css';

const User = (props) => {
    return (
        <div  className={styles.user}>
            <label key={props.id}>{props.username} ({props.age} years old)</label>
        </div>
    )
}

export default User;