import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import experienteServer from './ExperienteServer';
import Nav from "./Nav";
import ListaExperiente from "./ListaExperiente";
import AddExperienta from "./AddExperienta";

function App() {
  const [experiente, setExperiente] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
    
  useEffect(() => {
      experienteServer.getExperiente();
      experienteServer.emitter.addListener('GET_EXPERIENTE_SUCCESS', () => {
          setExperiente(experienteServer.data);
      });
  }, []);

  const addExperienta = (experienta) => {
    experienteServer.addExperienta(experienta);
  }

  const deleteExperienta = (id) => {
    experienteServer.deleteExperienta(id);
  }

  const updateExperienta = (id, experienta) => {
    experienteServer.updateExperienta(id, experienta);
  }

  useEffect(() => {
    const filteredExperiente = experiente.filter(
      (exp) => (exp.punctPlecare).toLowerCase().includes(search.toLowerCase()) ||
      (exp.punctSosire).toLowerCase().includes(search.toLowerCase()) ||
      (exp.mijlocTransport).toLowerCase().includes(search.toLowerCase())
      );
    setSearchResults(filteredExperiente);
  }, [experiente, search]);

  return (
    <div className="App">
      <Router>
        <Nav search={search} setSearch={setSearch} />
        <Routes>
          <Route path='/' element={<ListaExperiente experiente={searchResults} onDel={deleteExperienta} onUpdate={updateExperienta} />} />
          <Route path='/addExperienta' element={<AddExperienta onAdd={addExperienta} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
