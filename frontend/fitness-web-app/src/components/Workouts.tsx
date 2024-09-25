import rectangleImage from '../components/authentication/Rectangle.png';
import rectangleImage4 from '../components/authentication/Rectangle4.png';
import styles from './Workouts.module.css';
import { useState } from 'react';
import FormDialog from './FormDialog.tsx';

export const Workouts = () => {

    // Define a type for the shape of each muscle group
    type MuscleGroup = {
        exercise: string;
        sets: number;
        reps: number;
        weight: number;
    };

    // Define the state type
    type Exercises = {
        quads: MuscleGroup;
        hams: MuscleGroup;
        shoulders: MuscleGroup;
        chest: MuscleGroup;
        back: MuscleGroup;
    };

    // Define the valid keys for muscle groups
    type MuscleGroupKey = keyof Exercises;


    const [exercises, setExercises] = useState<Exercises>({
        quads: { exercise: 'Quad Exercise', sets: 0, reps: 0, weight: 0},
        hams: { exercise: 'Hamstring Exercise', sets: 0, reps: 0, weight: 0 },
        shoulders: { exercise: 'Shoulders Exercise', sets: 0, reps: 0, weight: 0 },
        chest: { exercise: 'Chest Exercise', sets: 0, reps: 0, weight: 0 },
        back: { exercise: 'Back Exercise', sets: 0, reps: 0, weight: 0},
    })

    const [dialogOpen, setDialogOpen] = useState(false);

    const handleDialogOpen = () => {
        setDialogOpen(true);
    }

    const handleDialogClose = () => {
        setDialogOpen(false);
    }

    const handleFormSubmit = (muscleGroup: MuscleGroupKey, exercise: string, sets: number, reps: number, weight: number) => {
        setExercises(prev => ({
            ...prev,
            [muscleGroup]: {
                ...prev[muscleGroup],
                exercise,
                sets,
                reps,
                weight,
            }
        }))
    }

    return (
        <div className={styles.flex}>
            <img src={rectangleImage} className={styles.cornerImage} />
            <img src={rectangleImage4} className={styles.cornerImage1} />
            <h2 className={styles.title}>Workout</h2>
            <div className={styles.box}>{exercises.quads.exercise}{exercises.quads.sets}x{exercises.quads.reps}{exercises.quads.weight}</div>
            <div className={styles.box}>{exercises.hams.exercise}{exercises.hams.sets}x{exercises.hams.reps}{exercises.hams.weight}</div>
            <div className={styles.box}>{exercises.shoulders.exercise}{exercises.shoulders.sets}x{exercises.shoulders.reps}{exercises.shoulders.weight}</div>
            <div className={styles.box}>{exercises.chest.exercise}{exercises.chest.sets}x{exercises.chest.reps}{exercises.chest.weight}</div>
            <div className={styles.box}>{exercises.back.exercise}{exercises.back.sets}x{exercises.back.reps}{exercises.back.weight}</div>
            <button className={styles.exerciseBtn} onClick={handleDialogOpen}>Add Exercise</button>
            <FormDialog open={dialogOpen} onClose={handleDialogClose} onSubmit={handleFormSubmit} />
        </div>
    )
}