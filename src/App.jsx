import Sidebar from './Components/Sidebar';
import { Outlet } from 'react-router';
import './assets/styles/index.css'

function App() {
  return (
    <>
      <Sidebar/>
      <Outlet/>
      
    </> 
  );
}

export default App;
