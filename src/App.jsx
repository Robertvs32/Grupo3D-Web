import Sidebar from './Components/Sidebar';
import { Outlet } from 'react-router';
import './assets/styles/index.css'

function App() {
  return (
    <>
      <Sidebar/>
      {/* <h1>ola</h1> */}
      <Outlet/>
      
    </> 
  );
}

export default App;
