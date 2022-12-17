import { Link } from 'react-router-dom';
import Experienta from './Experienta';

const Guest = ({ search, setSearch, experiente, users }) => {
    return (
    <div className="lista-experiente-center">
        <div className='lista-experiente'>
            <div className="nav-center">
                <nav>
                    <ul>
                        <li><Link to='/register'>Register</Link></li>
                        <li><Link to='/login'>Log In</Link></li>
                        <li><input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)}/></li>
                    </ul>
                </nav>
            </div>
            <div className="experiente-center">
                <div className="experiente-column">
                    {experiente.map(e => <Experienta key={e.id} item={e} 
                    emailExp={(users.filter((user) => user.id === e.userId))[0].email}
                    />)}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Guest;