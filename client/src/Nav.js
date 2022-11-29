import { Link } from 'react-router-dom';

const Nav = ({ search, setSearch }) => {
  return (
    <nav className='Nav'>
      <ul>
          <li><Link to='/'>Acasa</Link></li>
          <li><Link to='/addExperienta'>Impartaseste Experienta</Link></li>
      </ul>
      <input type="text" id='search' placeholder='Cauta experiente' value={search} onChange={(e) => setSearch(e.target.value)} />
    </nav>
  )
}

export default Nav