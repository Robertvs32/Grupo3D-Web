import '../assets/styles/login.css'
import Logo from '../assets/img/logo.png'
import User from '../assets/img/user.png'
import Senha from '../assets/img/senha.png'

export default function Login({setter}){
    return(
        <div id="containerLogin">
            <div id="loginSubContainer">
                <img id="imgLogin" src={Logo} alt="" />

                <div className="inputLogin">
                    <img className="imgInputUser" src={User} alt="" />
                    <input className="input" type="text" />
                </div>

                <div className="inputLogin">
                    <img className="imgInputSenha" src={Senha} alt="" />
                    <input className="input" type="password" />
                </div>

                <button 
                    id="btnLogin"
                    onClick={() => setter(true)}
                >
                    Fazer login
                </button>

            </div>
        </div>
    );
}