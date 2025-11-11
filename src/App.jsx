import Sidebar from './Components/Sidebar';
import { Outlet } from 'react-router';
import './assets/styles/index.css'
import { useState } from 'react';
import Login from './routes/Login'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';
import { useEffect } from 'react';

function App() {

  const [logado, setLogado] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if(user){
            setLogado(true);
        }
    });

    return unsubscribe;
    }, [])


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
        <Login/> 
      );
    }

export default App;
