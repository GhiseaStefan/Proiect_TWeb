import { useNavigate, Link } from "react-router-dom"
import { useState } from 'react';
import axios from "axios";

const Register = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input}) => {
        setData({...data, [input.name]: input.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = 'http://localhost:8080/register';
            await axios.post(url, data);
            navigate('/login');
        } catch (err) {
            if (err.response && err.response.status >= 400 && err.response.status <= 500) {
                setError(err.response.data.message);
            }
        }
    };

    return (
    <div id="register">
        <h1>Create Account</h1>
        <form id="form-container" onSubmit={handleSubmit}>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" onChange={handleChange} value={data.email} required/>
            <label for="password">Password</label>
            <input type="password" name="password" id="password" onChange={handleChange} value={data.password} required/>
            {error && <div className="errorSquare">{error}</div>}
            <div id="buttons">
                <button type="submit">Register</button>
                <Link to='/'>Home</Link>
            </div>
        </form>
    </div>
  )
}

export default Register