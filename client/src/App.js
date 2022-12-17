import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import Guest from "./components/Guest";
import Main from "./components/Main";
import Register from "./components/Register";
import Login from "./components/Login";
import ExperientaForm from "./components/ExperientaForm";
import ChangePassword from "./components/ChangePassword";
import DeleteAccount from "./components/DeleteAccount";

const App = () => {
  let user = localStorage.getItem('token');
  const [experiente, setExperiente] = useState([]);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const SERVER = 'http://localhost:8080';

  const fetchUsers = async () => {
    try {
        const response = await fetch(`${SERVER}/users`);
        if (!response.ok) {
            throw response;
        }
        setUsers(await response.json());
    } catch (err) {
        console.log(err);
    }
  }

  const fetchExperiente = async () => {
    try {
      const response = await fetch(`${SERVER}/experiente`);
      if (!response.ok) {
        throw response;
      }
      setExperiente(await response.json());
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchUsers();
    fetchExperiente();
  }, []);

  if (users.length > 0 ) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === localStorage.getItem('token')) {
        user = users[i];
      }
    }
  }

  useEffect(() => {
    const filteredExperiente = experiente.filter(
      (exp) => (exp.punctPlecare).toLowerCase().includes(search.toLowerCase()) ||
      (exp.punctSosire).toLowerCase().includes(search.toLowerCase()) ||
      (exp.mijlocTransport).toLowerCase().includes(search.toLowerCase()) ||
      (users.filter((user) => user.id === exp.userId))[0].email.includes(search.toLowerCase())
    );
    setSearchResults(filteredExperiente);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [experiente, search]);

  const deleteExperienta = async (id) => {
    try {
      const response = await fetch(`${SERVER}/experiente/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw response;
      }
      fetchExperiente();
    } catch (err) {
      console.log(err);
    }
  };

  const addExperienta = async (experienta) => {
    try {
        const response = await fetch(`${SERVER}/experiente`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(experienta)
        });
        if (!response.ok) {
            throw response;
        }
        fetchExperiente();
    } catch (err) {
      return err.json();
    }
  };

  const editExperienta = async (id, experienta) => {
    try {
      const response = await fetch(`${SERVER}/experiente/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(experienta)
      });
      if (!response.ok) {
        throw response;
      }
      fetchExperiente();
    } catch (err) {
      return err.json();
    }
  };

  const changePassword = async (id, data) => {
    try {
      const response = await fetch(`${SERVER}/users/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        throw response;
      }
      fetchUsers();
    } catch (err) {
      return err.json();
    }
  };

  const delAccount = async (userId, data) => {
    try {
      for (let i = 0; i < experiente.length; i++) {
        if (String(experiente[i].userId) === String(userId)) {
          await deleteExperienta(experiente[i].id);
        }
      }
      const response = await fetch(`${SERVER}/users/${userId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        throw response;
      }
      fetchUsers();
    } catch (err) {
      return err.json();
    }
  };

  return (
    <div className="App">
      {
        users.length ?
      <>
      <Routes>
        <Route path='/' element={
          <>
          {
            user ? 
            <Main user={user} search={search} setSearch={setSearch} experiente={searchResults} deleteExperienta={deleteExperienta} users={users}/>
            :
            <Guest search={search} setSearch={setSearch} experiente={searchResults} users={users}/>
          }
          </>
        } />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        {
          user ?
          <>
          <Route path="/newExperienta" element={<ExperientaForm user={user} addExperienta={addExperienta} editExperienta={editExperienta} />} />
          <Route path="/changePassword" element={<ChangePassword user={user} changePassword={changePassword} />} />
          <Route path='/deleteAccount' element={<DeleteAccount user={user} delAccount={delAccount} />} />
          </>
          :
          <>
          <Route path="/newExperienta" element={<Navigate replace to ='/' />} />
          <Route path='/changePassword' element={<Navigate replace to='/' />} />
          <Route path='/deleteAccount' element={<Navigate replace to='/' />} />
          </>
        }
      </Routes>
      </>
        :
        <>
        </>
      }
    </div>
  );
}

export default App;
