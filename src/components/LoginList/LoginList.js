import React from "react";

import styles from './LoginList.module.css';
import User from '../User/User';
import Card from '../UI/Card/Card';

const LoginList = (props) => {
    return (
        <Card>
            <ul>
            {props.users.map(item => 
                <li><User
                    username={item.username} 
                    id={item.id}
                    key={item.id}
                    age={item.age}/></li>)}  
            </ul>
        </Card>
    );
}

export default LoginList;