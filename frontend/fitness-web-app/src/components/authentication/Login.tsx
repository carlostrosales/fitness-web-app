import { useState } from 'react';
import rectangleImage from './Rectangle.png';
import rectangleImage1 from './Rectangle1.png';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import { LoginUser, PostUserData } from '../../services/authentication/UserServices.tsx';

const Login = () => {
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (event: any) => {
        setEmailInput(event.target.value);
    };

    const handlePasswordChange = (event: any) => {
        setPasswordInput(event.target.value);
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        try {
            const result = await PostUserData(emailInput, passwordInput);
            console.log("Success", result);
        } catch (error: any) {
            console.log("Error", error.message);
        }
    };

    const handleLogin = async (event: any) => {
        event.preventDefault();

        try {
            const result = await LoginUser(emailInput, passwordInput);
            console.log("Success", result);
            navigate('/home');

        } catch (error: any) {
            console.log("Error", error.message)
        }
    }

    const handleClick = () => {
        navigate('/signup');
    }

    return (
        <div className={styles.flex}>
            <img src={rectangleImage} alt="rectangle-image" className={styles.cornerImage}/>
            <img src={rectangleImage1} alt="rectangle-image1" className={styles.cornerImage1}/>
        <h2 className={styles.title}>Login</h2>
        <label className={styles.forms}>
            Email ID <input value={emailInput} onChange={handleEmailChange}className={styles.input}></input>
        </label>
        <label className={styles.forms}> 
            Password <input value={passwordInput} onChange={handlePasswordChange} className={styles.input}></input>
        </label>
        <div className={styles.divRow}>
        <button onClick={handleLogin} className={styles.loginBtn}>Login</button>
        <p className={styles.password}>Forgot password?</p>
        </div>
        <p className={styles.account} onClick={handleClick}>Don't have an account? <a className={styles.createNew}href="#">Create new</a></p>
        <div className={styles.loginWithContainer}><p className={styles.loginWith}>Or login with</p></div>
        <button onClick={handleSubmit} className={styles.googleBtn}>Sign In with Google</button>
        </div>
    )
}

export default Login

