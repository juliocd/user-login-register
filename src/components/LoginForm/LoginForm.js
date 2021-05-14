import React, {useState} from 'react';

import styles from './LoginForm.module.css';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import Popup from '../UI/Popup/Popup';

const LoginForm = (props) => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState(null);

    const usernameChangeEventHandler = (event) => {
        setUsername(event.target.value);
    }

    const ageChangeEventHandler = (event) => {
        setAge(event.target.value);
    }

    const formSubmitEventHandler = (event) => {
        event.preventDefault();

        if(username.trim().length === 0){
            setError({
                message: 'Enter a valid username',
                title: 'Username Error'
            })
        }else if(age < 1){
            setError({
                message: 'Age shoud be valid',
                title: 'Age Error'
            })
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

    const closeButtonHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && <Popup 
                        title={error.title} 
                        closeButton={closeButtonHandler} 
                        message={error.message} />}
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
        </div>
    )
}

export default LoginForm;