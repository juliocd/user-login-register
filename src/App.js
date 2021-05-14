import React, {useState} from 'react';
import styles from './App.module.css';

import LoginForm from './components/LoginForm/LoginForm';
import LoginList from './components/LoginList/LoginList';

function App() {
  const [users, setUser] = useState([]);

  const updateUsersHandler = (item) => {
    setUser(prevValue => {
      return [item, ...prevValue];
    });
  }

  return (
    <div className={styles.app}>
      <LoginForm updateUsers={updateUsersHandler}/>
      {users.length > 0 && <LoginList users={users}/>}
    </div>
  );
}

export default App;