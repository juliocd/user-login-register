import React from "react";

import styles from './LoginList.module.css';
import User from '../User/User';

const LoginList = (props) => {
    return (
        <div className={styles.container}>
          {props.users.map(item => 
            <User
                username={item.username} 
                id={item.id}
                key={item.id}
                age={item.age}/>)}  
        </div>
    );
}

export default LoginList;