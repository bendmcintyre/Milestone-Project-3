import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styles from '../styles/Login.module.scss'

const Login = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  if (!isAuthenticated) {
    return (
      <div className={styles['login-container']}>
        <button className={styles['login-button']} onClick={() => loginWithRedirect()}>Log in</button>
      </div>
    );
  }

  return (
    <div>
      <h1>You are logged in</h1>
    </div>
  );
};

export default Login;

