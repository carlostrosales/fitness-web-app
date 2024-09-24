import { Dialog, FormControl, InputLabel, Select, MenuItem, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Button } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';


// Redefine the types for muscle groups and exercises here
type MuscleGroup = {
    exercise: string;
    sets: number;
    reps: number;
};

type Exercises = {
    quads: MuscleGroup;
    hams: MuscleGroup;
    shoulders: MuscleGroup;
    chest: MuscleGroup;
    back: MuscleGroup;
};

interface FormDialogProps {
    open: boolean;
    onClose: () => void;
    onSubmit: (muscleGroup: keyof Exercises, exercise: string, sets: number, reps: number) => void;
}

const FormDialog = (props: FormDialogProps) => {
    const { open, onClose, onSubmit } = props;
    const [exercise, setExercise] = useState('');
    const [muscleGroup, setMuscleGroup] = useState<keyof Exercises>('quads');
    const [ sets, setSets ] = useState(0);
    const [ reps, setReps ] = useState(0);

    const handleSubmit = () => {
        onSubmit(muscleGroup, exercise, sets, reps);
        onClose();
    }

    return (
        <React.Fragment>
            <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
                <DialogTitle>Add Exercise</DialogTitle>
                <TextField label="Exercise" value={exercise} onChange={(e) => setExercise(e.target.value)} />
                <FormControl fullWidth>
                    <InputLabel>Muscle Group</InputLabel>
                    <Select
                        label="Muscle Group"
                        onChange={(e) => setMuscleGroup(e.target.value as keyof Exercises)}
                    >
                        <MenuItem value="quads">Quads</MenuItem>
                        <MenuItem value="hams">Hamstring</MenuItem>
                        <MenuItem value="shoulders">Shoulder</MenuItem>
                        <MenuItem value="chest">Chest</MenuItem>
                        <MenuItem value="back">Back</MenuItem>
                    </Select>
                </FormControl>
                <TextField label="Sets" value={sets} onChange={(e) => setSets(Number(e.target.value))} />
                <TextField label="Reps" value={reps} onChange={(e) => setReps(Number(e.target.value))} />
                <Button onClick={handleSubmit}>Submit</Button>
            </Dialog>
        </React.Fragment>
    );
}

export default FormDialog;