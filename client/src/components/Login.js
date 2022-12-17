import { useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState('');

    const handleChange = ({ currentTarget: input}) => {
        setData({...data, [input.name]: input.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = 'http://localhost:8080/login';
            await axios.post(url, data);
            localStorage.setItem('token', data.email);
            window.location = '/';
        } catch (err) {
            if (err.response && err.response.status >= 400 && err.response.status <= 500) {
                setError(err.response.data.message);
            }
        }
    };

    return (
    <div id="login">
        <h1>Log In</h1>
        <form id="form-container" onSubmit={handleSubmit}>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" onChange={handleChange} value={data.email} required/>
            <label for="password">Password</label>
            <input type="password" name="password" id="password" onChange={handleChange} value={data.password} required/>
            {error && <div className="errorSquare">{error}</div>}
            <div id="buttons">
                <button type='submit'>Log In</button>
                <Link to='/'>Home</Link>
            </div>
        </form>    
    </div>
  )
}

export default Login