import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const DeleteAccount = ({ user, delAccount }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const delAcc = () => {
        const response = delAccount(user.id, { email, password });
        response
        .then((j) => setError(String(j.message)))
        .catch(() => {
            localStorage.removeItem('token');
            navigate('/');
        });
    }

    return (
    <div id="delete-account">
        <h1>Delete Account</h1>
        <div id="form-container">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required onChange={(e) => setPassword(e.target.value)}/>
            {error && <div className="errorSquare">{error}</div>}
            <div id="buttons">
                <button type='submit' onClick={delAcc}>Delete Account</button>
                <button onClick={() => navigate('/')}>Home</button>
            </div>
        </div>
    </div>
  )
}

export default DeleteAccount