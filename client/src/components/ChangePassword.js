import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ChangePassword = ({ user, changePassword }) => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const chg = () => {
        const response = changePassword(user.id, {oldPassword, newPassword});
        response.then((j) => setError(String(j.message)))
        .catch(() => {
            localStorage.removeItem('token');
            navigate('/login');
        });
    };

    return (
    <div id="change-password">
        <h1>Change Password</h1>
        <div id="form-container">
            <label htmlFor="oldPwd">Old Password</label>
            <input type="password" id="oldPwd" required onChange={(e) => setOldPassword(e.target.value)}/>
            <label htmlFor="newPwd">New Password</label>
            <input type="password" id="newPwd" required onChange={(e) => setNewPassword(e.target.value)}/>
            {error && <div className="errorSquare">{error}</div>}
            <div id="buttons">
                <button type='submit' onClick={chg}>Change Password</button>
                <button onClick={() => navigate('/')}>Home</button>
            </div>
        </div>
    </div>
  )
}

export default ChangePassword