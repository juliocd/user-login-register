import React from 'react';

import styles from './Popup.module.css';

const Popup = (props) => {
    return (
        <div className={styles.popup}>
            <p>{props.message}</p>
            <button onClick={props.closeButton}>Close</button>
        </div>
    )
}

export default Popup;