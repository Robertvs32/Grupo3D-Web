import Sidebar from './Components/Sidebar';
import { Outlet } from 'react-router';
import './assets/styles/index.css'
import { useState } from 'react';

function App() {

  const [logado, setLogado] = useState(false)


  if(logado == true){
      return (
        <>
          <Sidebar
            setterLogout={setLogado}
          />
          <Outlet/>
        </> 
      );
    } 

      return (
        <>
          <h1>Login</h1>
          <button
            onClick={() => setLogado(true)}
          >
            Logar
          </button>
        </> 
      );
    }

export default App;
