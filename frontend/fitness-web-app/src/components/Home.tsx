import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    const handleChange = async (event: any) => {

        event.preventDefault();

        navigate('/workout');
        
    }
    
    return (
        <div>
            <p>Home Page</p>
            <button onClick={handleChange}></button>
        </div>
    );
}

export default Home;