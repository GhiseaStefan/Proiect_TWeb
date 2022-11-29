import Experienta from './Experienta';

const ListaExperiente = ({ experiente, onDel, onUpdate }) => {
    return (
    <div className='ListaExperiente'>
      <div className='ListaExperiente-container'>
        {experiente.map(e => <Experienta key={e.id} item={e} onDel={onDel} onUpdate={onUpdate}/>)}
      </div>
    </div>
  )
}

export default ListaExperiente