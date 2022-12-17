import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ExperientaForm = ({ user, addExperienta, editExperienta }) => {
    const [punctPlecare, setPunctPlecare] = useState('');
    const [punctSosire, setPunctSosire] = useState('');
    const [mijlocTransport, setMijlocTransport] = useState('Metrou');
    const [oraPlecare, setOraPlecare] = useState(0);
    const [durataCalatorie, setDurataCalatorie] = useState(0);
    const [gradAglomerare, setGradAglomerare] = useState(0);
    const [observatii, setObservatii] = useState('');
    const [nivelSatisfactie, setNivelSatisfactie] = useState(0);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const add = (e) => {
      e.preventDefault();
      let userId = user.id;
      const response = addExperienta({ punctPlecare, punctSosire, mijlocTransport, oraPlecare, durataCalatorie, gradAglomerare, observatii, nivelSatisfactie, userId });
      response.then((j) => setError(String(j.message)))
        .catch(() => navigate('/')); 
    };

    const { experientaEditabila, edit } = useLocation().state;

    useEffect(() => {
      if (edit) {
        setPunctPlecare(experientaEditabila.punctPlecare);
        setPunctSosire(experientaEditabila.punctSosire);
        setMijlocTransport(experientaEditabila.mijlocTransport);
        setOraPlecare(experientaEditabila.oraPlecare);
        setDurataCalatorie(experientaEditabila.durataCalatorie);
        setGradAglomerare(experientaEditabila.gradAglomerare);
        setObservatii(experientaEditabila.observatii);
        setNivelSatisfactie(experientaEditabila.nivelSatisfactie);
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const edt = (e) => {
      e.preventDefault();
      const response = editExperienta(experientaEditabila.id, { punctPlecare, punctSosire, mijlocTransport, oraPlecare, durataCalatorie, gradAglomerare, observatii, nivelSatisfactie });
      response.then((j) => setError(String(j.message)))
        .catch(() => navigate('/')); 
    };

    return (
    <>
    {
      edit ? 
      <div id="post">
        <h1>Editare Experienta</h1>
        <div id="form-container">
            <div id="punctPlecareContainer">
                <label htmlFor="punctPlecare">Punct de plecare:</label>
                <input type="text" id="punctPlecare" onChange={(e) => setPunctPlecare(e.target.value)} value={punctPlecare}/>
            </div>
            <div id="punctSosireContainer">
                <label htmlFor="punctSosire">Punct de sosire:</label>
                <input type="text" id="punctSosire" onChange={(e) => setPunctSosire(e.target.value)} value={punctSosire}/>
            </div>
            <div id="mijlocTransportContainer">
                <label htmlFor="mijlocTransport">Mijloc de transport:</label>
                <select id="mijlocTransport" onChange={(e) => setMijlocTransport(e.target.value)} value={mijlocTransport}>
                    <option value="Metrou">Metrou</option>
                    <option value="Autobuz">Autobuz</option>
                    <option value="Tramvai">Tramvai</option>
                </select>
            </div>
            <div id="oraPlecareContainer">
                <label htmlFor="oraPlecare">Ora plecare (xx:xx):</label>
                <input type="text" id="oraPlecare" onChange={(e) => setOraPlecare(e.target.value)} value={oraPlecare}/>
            </div>
            <div id="durataCalatorieContainer">
                <label htmlFor="durataCalatorie">Durata calatoriei:</label>
                <input type="text" id="durataCalatorie" onChange={(e) => setDurataCalatorie(e.target.value)} value={durataCalatorie}/>
            </div>
            <div id="gradAglomerareContainer">
                <label htmlFor="gradAglomerare">Grad de aglomerare (1-10):</label>
                <input type="text" id="gradAglomerare" onChange={(e) => setGradAglomerare(e.target.value)} value={gradAglomerare}/>
            </div>
            <div id="observatiiContainer">
                <label htmlFor="observatii">Observatii:</label>
                <textarea id="observatii" onChange={(e) => setObservatii(e.target.value)} value={observatii}></textarea>
            </div>
            <div id="nivelSatisfactieContainer">
                <label htmlFor="nivelSatisfactie">Nivel satisfactie (1-5):</label>
                <input type="text" id="nivelSatisfactie" onChange={(e) => setNivelSatisfactie(e.target.value)} value={nivelSatisfactie}/>
            </div>
            {error && <div className="errorSquare">{error}</div>}
            <div id="buttons">
                <button type='submit' onClick={edt}>Editeaza Experienta</button>
                <button onClick={() => navigate('/')}>Pagina Principala</button>
            </div>
        </div>
      </div>
      :
      <div id="post">
        <h1>Experienta Noua</h1>
        <div id="form-container">
            <div id="punctPlecareContainer">
                <label htmlFor="punctPlecare">Punct de plecare:</label>
                <input type="text" id="punctPlecare" onChange={(e) => setPunctPlecare(e.target.value)}/>
            </div>
            <div id="punctSosireContainer">
                <label htmlFor="punctSosire">Punct de sosire:</label>
                <input type="text" id="punctSosire" onChange={(e) => setPunctSosire(e.target.value)}/>
            </div>
            <div id="mijlocTransportContainer">
                <label htmlFor="mijlocTransport">Mijloc de transport:</label>
                <select id="mijlocTransport" onChange={(e) => setMijlocTransport(e.target.value)}>
                    <option value="Metrou">Metrou</option>
                    <option value="Autobuz">Autobuz</option>
                    <option value="Tramvai">Tramvai</option>
                </select>
            </div>
            <div id="oraPlecareContainer">
                <label htmlFor="oraPlecare">Ora plecare (xx:xx):</label>
                <input type="text" id="oraPlecare" onChange={(e) => setOraPlecare(e.target.value)}/>
            </div>
            <div id="durataCalatorieContainer">
                <label htmlFor="durataCalatorie">Durata calatoriei:</label>
                <input type="text" id="durataCalatorie" onChange={(e) => setDurataCalatorie(e.target.value)}/>
            </div>
            <div id="gradAglomerareContainer">
                <label htmlFor="gradAglomerare">Grad de aglomerare (1-10):</label>
                <input type="text" id="gradAglomerare" onChange={(e) => setGradAglomerare(e.target.value)}/>
            </div>
            <div id="observatiiContainer">
                <label htmlFor="observatii">Observatii:</label>
                <textarea id="observatii" onChange={(e) => setObservatii(e.target.value)}></textarea>
            </div>
            <div id="nivelSatisfactieContainer">
                <label htmlFor="nivelSatisfactie">Nivel satisfactie (1-5):</label>
                <input type="text" id="nivelSatisfactie" onChange={(e) => setNivelSatisfactie(e.target.value)}/>
            </div>
            {error && <div className="errorSquare">{error}</div>}
            <div id="buttons">
                <button type='submit' onClick={add}>Adauga Experienta</button>
                <button onClick={() => navigate('/')}>Pagina Principala</button>
            </div>
        </div>
      </div>
    }
    </>
  )
};

export default ExperientaForm