import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddExperienta = ({ onAdd }) => {
    const [punctPlecare, setPunctPlecare] = useState('');
    const [punctSosire, setPunctSosire] = useState('');
    const [mijlocTransport, setMijlocTransport] = useState('');
    const [oraPlecare, setOraPlecare] = useState('');
    const [durata, setDurata] = useState(0);
    const [gradAglomerare, setGradAglomerare] = useState(1);
    const [observatii, setObservatii] = useState('');
    const [nivelSatisfactie, setNivelSatisfactie] = useState(1);

    const navigate = useNavigate();

    const add = () => {
        onAdd({ punctPlecare, punctSosire, mijlocTransport, oraPlecare, durata, gradAglomerare, observatii, nivelSatisfactie});
        navigate('/');
    }

    return (
    <div>
        <h2>Adauga Experienta</h2>
        <label htmlFor="punctPlecareFrm">Punct de plecare:</label>
        <input type="text" id='punctPlecareFrm' onChange={(e) => setPunctPlecare(e.target.value)} /><br></br>
        <label htmlFor="punctSosireFrm">Punct de sosire:</label>
        <input type="text" id='punctSosireFrm' onChange={(e) => setPunctSosire(e.target.value)} /><br></br>
        <label htmlFor="mijlocTransportFrm">Mijloc de transport:</label>
        <select id="mijlocTransportFrm" onChange={(e) => setMijlocTransport(e.target.value)}>
            <option value="Autobuz">Autobuz</option>
            <option value="Tramvai">Tramvai</option>
            <option value="Metrou">Metrou</option>
        </select><br></br>
        <label htmlFor="oraPlecareFrm">Ora plecare:</label>
        <input type="text" id='oraPlecareFrm' onChange={(e) => setOraPlecare(e.target.value)} /><br></br>
        <label htmlFor="durataFrm">Durata:</label>
        <input type="text" id="durataFrm" onChange={(e) => setDurata(e.target.value)} /><br></br>
        <label htmlFor="gradAglomerareFrm">Grad aglomerare:</label>
        <input type="range" min="1" max="10" value={gradAglomerare} id='gradAglomerareFrm' onChange={(e) => setGradAglomerare(e.target.value)}/>
        <span id='gradAglomerareValue'>{gradAglomerare}</span><br></br>
        <textarea placeholder="Observatii" onChange={(e) => setObservatii(e.target.value)} /><br></br>
        <label htmlFor="nivelSatisfactieFrm">Nivel satisfactie:</label>
        <input type="range" min="1" max="5" id='nivelSatisfactieFrm' value={nivelSatisfactie} onChange={(e) => setNivelSatisfactie(e.target.value)}/>
        <span id='nivelSatisfactieValue'>{nivelSatisfactie}</span><br></br>
        <input type="button" value='Adauga experienta' onClick={add}/>
    </div>
  )
}

export default AddExperienta

