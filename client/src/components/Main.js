import { Link, useNavigate } from 'react-router-dom';
import Experienta from './Experienta';

const Main = ({ user, experiente, deleteExperienta, search, setSearch, users }) => {
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    };
    const navigate = useNavigate();

    return (
    <div>
        <div id="account-info">
            <h2>User: {user.email.split('@')[0]}</h2>
            <button onClick={() => navigate('/changePassword')}>Change Password</button>
            <button onClick={() => navigate('/deleteAccount')}>Delete Account</button>
            <button onClick={handleLogout}>Log Out</button>
        </div>
        <div className="lista-experiente-center">
            <div className='lista-experiente'>
                <div className="nav-center">
                    <nav>
                        <ul>
                            <li><Link to='/newExperienta' state={{ }}>Experienta Noua</Link></li>
                            <li><input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)}/></li>
                        </ul>
                    </nav>
                </div>
                <div className="experiente-center">
                    <div className="experiente-column">
                        {experiente.map(e => <Experienta key={e.id} item={e} 
                        emailExp={(users.filter((user) => user.id === e.userId))[0].email}
                        user={user} deleteExperienta={deleteExperienta}
                        />)}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main