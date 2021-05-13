import React, {useState} from 'react';
import styles from './App.module.css';

import LoginForm from './components/LoginForm/LoginForm';
import LoginList from './components/LoginList/LoginList';
import Popup from './components/UI/Popup/Popup';

function App() {
  const [users, setUser] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const updateUsersHandler = (item) => {
    if(item.message){
      setShowPopup(true);
      setPopupMessage(item.message);
    }else{
      setUser(prevValue => {
        return [item, ...prevValue];
      });
    } 
  }

  const closeButtonHandler = () =>{
    setShowPopup(false);
  }

  return (
    <div className={styles.app}>
      <LoginForm updateUsers={updateUsersHandler}/>
      {showPopup && <Popup closeButton={closeButtonHandler} message={popupMessage} />}
      {users.length > 0 && <LoginList users={users}/>}
    </div>
  );
}

export default App;