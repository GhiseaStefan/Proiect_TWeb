import { useState } from 'react';

const Experienta = ({ item, onDel, onUpdate }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [punctPlecare, setPunctPlecare] = useState(item.punctPlecare);
    const [punctSosire, setPunctSosire] = useState(item.punctSosire);
    const [mijlocTransport, setMijlocTransport] = useState(item.mijlocTransport);
    const [oraPlecare, setOraPlecare] = useState(item.oraPlecare);
    const [durata, setDurata] = useState(item.durata);
    const [gradAglomerare, setGradAglomerare] = useState(item.gradAglomerare);
    const [observatii, setObservatii] = useState(item.observatii);
    const [nivelSatisfactie, setNivelSatisfactie] = useState(item.nivelSatisfactie);

    const emojiSatisfactie = () => {
        let content = [];
        for (let i = 0; i < item.nivelSatisfactie; i++) {
            content.push(<span>&#128516;</span>);
        }
        return content;
    }

    const del = () => {
        onDel(item.id);
    };

    const modify = () => {
        onUpdate(item.id, { punctPlecare, punctSosire, mijlocTransport, oraPlecare, durata, gradAglomerare, observatii, nivelSatisfactie });
        setIsEditing(false);
    };
    
    return (
        <>
        {
            isEditing ?
            (
                <>
                    <div>
                        <h2>Editeaza Experienta</h2>
                        <label htmlFor="punctPlecareFrm">Punct de plecare:</label>
                        <input type="text" id='punctPlecareFrm' value={punctPlecare} onChange={(e) => setPunctPlecare(e.target.value)} /><br></br>
                        <label htmlFor="punctSosireFrm">Punct de sosire:</label>
                        <input type="text" id='punctSosireFrm' value={punctSosire} onChange={(e) => setPunctSosire(e.target.value)} /><br></br>
                        <label htmlFor="mijlocTransportFrm">Mijloc de transport:</label>
                        <select id="mijlocTransportFrm" value={mijlocTransport} onChange={(e) => setMijlocTransport(e.target.value)}>
                            <option value="Autobuz">Autobuz</option>
                            <option value="Tramvai">Tramvai</option>
                            <option value="Metrou">Metrou</option>
                        </select><br></br>
                        <label htmlFor="oraPlecareFrm">Ora plecare:</label>
                        <input type="text" id='oraPlecareFrm' value={oraPlecare} onChange={(e) => setOraPlecare(e.target.value)} /><br></br>
                        <label htmlFor="durataFrm">Durata:</label>
                        <input type="text" id="durataFrm" value={durata} onChange={(e) => setDurata(e.target.value)} /><br></br>
                        <label htmlFor="gradAglomerareFrm">Grad aglomerare:</label>
                        <input type="range" min="1" max="10" value={gradAglomerare} id='gradAglomerareFrm' onChange={(e) => setGradAglomerare(e.target.value)}/>
                        <span id='gradAglomerareValue'>{gradAglomerare}</span><br></br>
                        <textarea placeholder="Observatii" value={observatii} onChange={(e) => setObservatii(e.target.value)} /><br></br>
                        <label htmlFor="nivelSatisfactieFrm">Nivel satisfactie:</label>
                        <input type="range" min="1" max="5" id='nivelSatisfactieFrm' value={nivelSatisfactie} onChange={(e) => setNivelSatisfactie(e.target.value)}/>
                        <span id='nivelSatisfactieValue'>{nivelSatisfactie}</span><br></br>
                        <input type="button" value='Modifica experienta' onClick={modify}/>
                    </div>
                    <input type="button" value='Cancel Edit Mode' onClick={() => setIsEditing(false)}/>
                </>
            ) :
            (
                <div className="Experienta">
                    <h3>Punct de plecare: {item.punctPlecare}</h3>
                    <h3>Punct de sosire: {item.punctSosire}</h3>
                    <h3>Mijloc de transport: {item.mijlocTransport}</h3>
                    <h3>Ora plecare: {item.oraPlecare}</h3>
                    <h3>Durata calatoriei: {item.durata} {parseInt(item.durata) > 1 ? "minute" : "minut"}</h3>
                    <h3>Grad de aglomerare: {item.gradAglomerare} / 10</h3>
                    <p>Observatii: {item.observatii}</p>
                    <h3>{emojiSatisfactie()}</h3>
                    <input type="button" value='Trash' onClick={del} />
                    <input type="button" value='Edit' onClick={() => setIsEditing(true)}/>
                </div>
            )
        }
        </>
  )
}

export default Experienta;
