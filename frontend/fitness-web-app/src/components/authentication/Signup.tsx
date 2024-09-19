import styles from "./Signup.module.css";
import rectangleImage from './Rectangle3.png';
import rectangleImage1 from './Rectangle4.png';
import { useState } from 'react';
import { PostUserData } from '../../services/authentication/UserServices.tsx';
import { useNavigate } from 'react-router-dom';

export const Signup = () => {

    const [ emailInput, setEmailInput ] = useState("");
    const [ passwordInput, setPasswordInput ] = useState("")
    const navigate = useNavigate();

    const handleEmailChange = async (event: any) => {
        setEmailInput(event.target.value);
    }
    
    const handlePasswordChange = async (event: any) => {
        setPasswordInput(event.target.value);
    }

    const handleSignUp = async (event: any) => {
        event.preventDefault();

        try {
            const result = await PostUserData(emailInput, passwordInput);
            console.log("Success", result)
        } catch (error: any) {
            console.log("Error", error.message);
        }
    }

    const handleClick = () => {
        navigate("/");
    }

    return (
        <div className={styles.flex}>
            <img src={rectangleImage} alt="rectangle-image" className={styles.cornerImage}/>
            <img src={rectangleImage1} alt="rectangle-image1" className={styles.cornerImage1}/>
        <h2 className={styles.title}>Sign up</h2>
        <label className={styles.forms}>
            Email ID <input value={emailInput} onChange={handleEmailChange}className={styles.input}></input>
        </label>
        <label className={styles.forms}> 
            Password <input value={passwordInput} onChange={handlePasswordChange} className={styles.input}></input>
        </label>
        <div className={styles.divRow}>
        <button onClick={handleSignUp} className={styles.loginBtn}>Sign Up</button>
        </div>
        <p className={styles.account} onClick={handleClick}>Already have an account? <a className={styles.createNew}href="#">Signup</a></p>
        <div className={styles.loginWithContainer}><p className={styles.loginWith}>Or sign up with</p></div>
        <button onClick={handleSignUp} className={styles.googleBtn}>Sign Up with Google</button>
        </div>
    )
}