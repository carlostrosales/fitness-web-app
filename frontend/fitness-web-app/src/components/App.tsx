import { Routes, Route } from 'react-router-dom';
import Login from '../components/authentication/Login.tsx';
import Home from '../components/Home.tsx';
import {Workouts} from '../components/Workouts.tsx';

export const App = () => {
    return (
        <>
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/workout" element={<Workouts />}/>
        </Routes>
        </>
    );
};