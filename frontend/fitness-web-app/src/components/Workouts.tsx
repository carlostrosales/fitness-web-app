import rectangleImage from '../components/authentication/Rectangle.png';
import rectangleImage4 from '../components/authentication/Rectangle4.png';
import styles from './Workouts.module.css';
import { useState } from 'react';

export const Workouts = () => {
    const [ quads, setQuads ] = useState('Quad Exercise');
    const [ hams, setHams ] = useState('Hamstring Exercise');
    const [ shoulders, setShoulders ] = useState('Shoulder Exercise');
    const [ chest, setChest ] = useState('Chest Exercise');
    const [ back, setBack ] = useState('Back Exercise');
    return (
        <div className={styles.flex}>
            <img src={rectangleImage} className={styles.cornerImage}/>
            <img src={rectangleImage4} className={styles.cornerImage1}/>
            <h2 className={styles.title}>Workout</h2>
            <div className={styles.box}>{quads}</div>
            <div className={styles.box}>{hams}</div>
            <div className={styles.box}>{shoulders}</div>
            <div className={styles.box}>{chest}</div>
            <div className={styles.box}>{back}</div>
            <button className={styles.exerciseBtn}>Add Exercise</button>
        </div>
    )
}