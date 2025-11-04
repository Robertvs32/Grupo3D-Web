import '../assets/styles/sidebar.css'
import Logo from '../assets/img/logo.png'
import Logout from '../assets/img/logout.png'
import CardSidebar from './CardSidebar';

export default function Sidebar(){
    return(
        <div className="sidebarContainer">
            <img id="imgSidebarContainer" src={Logo} alt=""/>
            <CardSidebar
                titulo="Relatórios"
                img={Logo}
            />

            <button id="logoutIcon"> 
                <img src={Logout}/>
            </button>
            
            
        </div>
    );
}