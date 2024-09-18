import { Routes, Route } from 'react-router-dom';
import Login from '../components/authentication/Login.tsx';
import Home from '../components/Home.tsx';

export const App = () => {
    return (
        <>
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/home" element={<Home />}/>
        </Routes>
        </>
    );
};