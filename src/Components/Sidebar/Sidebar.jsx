import './sidebar.css';
import Logo from '../../assets/img/logo.png';
import Logout from '../../assets/img/logout.png';
import CardSidebar from './CardSidebar';
import relatorioIcon from '../../assets/img/relatorios.png';
import Placa from '../../assets/img/placa.png';
import Usuario from '../../assets/img/usuario.png'
import { auth } from '../../firebaseConfig';
import { signOut } from 'firebase/auth';

export default function Sidebar({setterLogout}){
    return(
        <div className="sidebarContainer">
            <img id="imgSidebarContainer" src={Logo} alt=""/>

            <CardSidebar
                titulo="Relatórios"
                img={relatorioIcon}
                path="/"
            />

            <CardSidebar
                titulo="Placas"
                img={Placa}
                path="placas"
            />

            <CardSidebar
                titulo="Atribuicoes"
                img={Placa}
                path="placas"
            />

            <CardSidebar
                titulo="Setores"
                img={Placa}
                path="placas"
            />

            <CardSidebar
                titulo="Usuários"
                img={Usuario}
            />

            <button 
                id="logoutIcon"
                onClick={() => {
                    setterLogout(false);
                    signOut(auth);
                }}
            > 
                <img src={Logout}/>
                
            </button>
            
            
        </div>
    );
}