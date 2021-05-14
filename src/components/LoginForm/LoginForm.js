import React, {useState} from 'react';

import styles from './LoginForm.module.css';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';

const LoginForm = (props) => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

    const usernameChangeEventHandler = (event) => {
        setUsername(event.target.value);
    }

    const ageChangeEventHandler = (event) => {
        setAge(event.target.value);
    }

    const formSubmitEventHandler = (event) => {
        event.preventDefault();

        let message = null;
        if(age < 1){
            message = 'Age shoud be valid';
            props.updateUsers({
                message: message
            });
        }else{
            props.updateUsers({
                id: Math.random().toString(),
                username,
                age
            });
        }

        setAge('');
        setUsername('');
    }

    return (
        <Card>
            <form onSubmit={formSubmitEventHandler}>
                <div className={styles["form-control"]}>
                    <label>Username</label>
                    <input 
                        value={username}
                        onChange={usernameChangeEventHandler}
                        type="text" />
                </div>
                <div className={styles["form-control"]}>
                    <label>Age (Year)</label>
                    <input 
                        value={age}
                        onChange={ageChangeEventHandler}
                        type="number"/>
                </div>
                <Button 
                    type="submit"
                    >Add User</Button>
            </form>
        </Card>
    )
}

export default LoginForm;