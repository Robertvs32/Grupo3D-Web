import './sidebar.css';
import Logo from '../../assets/img/logo.png';
import Logout from '../../assets/img/logout.png';
import CardSidebar from './CardSidebar';
import relatorioIcon from '../../assets/img/relatorios.png';
import Placa from '../../assets/img/placa.png';
import Usuario from '../../assets/img/usuario.png'
import { auth } from '../../firebaseConfig';
import { signOut } from 'firebase/auth';
import { useState } from 'react';
import setaEsquerda from '../../assets/img/esquerda.png';
import setaDireita from '../../assets/img/direita.png';

export default function Sidebar({setterLogout}){

    const [showSidebar, setShowSidebar] = useState(true);

    return(
        <div className={`${showSidebar ? 'sidebarContainer' : 'sidebarContainerFechado'}`}>
            <img id="imgSidebarContainer" src={Logo} alt=""/>

            <CardSidebar
                titulo="Relatórios"
                img={relatorioIcon}
                path="/"
                setter={setShowSidebar}
            />

            <button id="btnSidebar"
                onClick={() => setShowSidebar(ant => !ant)}
            >
                <img src={showSidebar ? setaEsquerda : setaDireita} alt="Seta para fechar sidebar"/>
            </button>

            <CardSidebar
                titulo="Placas"
                img={Placa}
                path="placas"
                setter={setShowSidebar}
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