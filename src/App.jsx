import Sidebar from './Components/Sidebar';
import { Outlet } from 'react-router';
import './assets/styles/index.css'
import { useState } from 'react';
import Login from './routes/Login'

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
        <Login
          setter={setLogado}
        /> 
      );
    }

export default App;
