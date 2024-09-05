import React, { useState } from 'react';
import rectangleImage from './Rectangle.png';
import rectangleImage1 from './Rectangle1.png';

import styles from './Login.module.css';

const Login = () => {
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');


    const handleEmailChange = (event) => {
        setEmailInput(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPasswordInput(event.target.value);
    };

    const submitUserInformation = () => {
        const response = await fetch
    };

    return (
        <div className={styles.flex}>
            <img src={rectangleImage} alt="rectangle-image" className={styles.cornerImage}/>
            <img src={rectangleImage1} alt="rectangle-image1" className={styles.cornerImage1}/>
        <h2 className={styles.title}>Login</h2>
        <label className={styles.forms} name="email">
            Email ID <input value={emailInput} onChange={handleEmailChange}className={styles.input}></input>
        </label>
        <label className={styles.forms} name="password"> 
            Password <input value={passwordInput} onChange={handlePasswordChange} className={styles.input}></input>
        </label>
        <div className={styles.divRow}>
        <button className={styles.loginBtn}>Login</button>
        <p className={styles.password}>Forgot password?</p>
        </div>
        <p className={styles.account}>Don't have an account? <a className={styles.createNew}href="#">Create new</a></p>
        <div className={styles.loginWithContainer}><p className={styles.loginWith}>Or login with</p></div>
        <button onClick={submitUserInformation}className={styles.googleBtn}>Sign in with Google</button>

        <p>{emailInput}     {passwordInput}</p>
        </div>
    )
}

export default Login

