import React from 'react';
import classes from './Popup.module.css';

import Card from '../Card/Card';
import Button from '../../UI/Button/Button';

const Popup = (props) => {
    return (
        <div className={classes.backdrop}>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button 
                        clickButton={props.closeButton}
                        type="button">Okay</Button>
                </footer>
            </Card>
        </div>
    )
}

export default Popup;