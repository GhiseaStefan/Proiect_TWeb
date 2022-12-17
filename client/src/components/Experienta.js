import { Link } from 'react-router-dom';
const Experienta = ({ item, user, deleteExperienta, emailExp }) => {

    const del = () => {
        deleteExperienta(item.id);
    }

    const emojiSatisfactie = () => {
        let content = [];
        for (let i = 0; i < item.nivelSatisfactie; i++) {
            content.push(<span>&#128516;</span>);
        }
        return content;
    }

    return (
    <div className="experienta">
        <p><span className="category-bold">Punct de plecare: </span>{item.punctPlecare}</p>
        <p><span className="category-bold">Punct de sosire: </span>{item.punctSosire}</p>
        <p><span className="category-bold">Mijloc de transport: </span>{item.mijlocTransport}</p>
        <p><span className="category-bold">Ora plecare: </span>{item.oraPlecare}</p>
        <p><span className="category-bold">Durata calatoriei: </span>{item.durataCalatorie} minute</p>
        <p><span className="category-bold">Grad de aglomerare: </span>{item.gradAglomerare} / 10</p>
        <p><span className="category-bold">Observatii: </span>{item.observatii}</p>
        <p>{emojiSatisfactie()}</p>
        <p className="user-post">Posted by: <span className="category-bold">{ emailExp }</span></p>
        {
            user && user.id === item.userId ?
            <>
            <button className="trash" type="button" onClick={del}><i className="fa fa-trash-o"></i></button>
            <button className="edit"><Link to='/newExperienta' state={{ experientaEditabila: item, edit: true}}><i className="fa fa-pencil"></i></Link></button>
            </> :
            <>
            </>
        }
    </div>
  )
}

export default Experienta;