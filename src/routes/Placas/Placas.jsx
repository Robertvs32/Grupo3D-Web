import './placas.css'
import Lixeira from '../../assets/img/lixeira.png'
import useRelatorio from '../../hooks/useRelatorio';
import { useState, useEffect } from 'react';

export default function Usuarios(){

    const { buscaPlacas, atualizaPlacas } = useRelatorio();
    const [arrayPlacas, setArrayPlacas] = useState([]);

    

    function alteraValue(event, id, campo){
        let value = event.target.value;
        if(campo == "valor"){
            value = Number(value.replace(",","."));
        }
        

        const novoArray = arrayPlacas.map((item) => {
            if(item.id == id){
                return(
                    {...item, [campo]: value}
                );
            }
            return item;
        })

        setArrayPlacas(novoArray);
    }

    function removerRef(id){
        const novoArray = arrayPlacas.filter((item) => {
            if(item.id != id){
                return(item);
            }
        })

        setArrayPlacas(novoArray)
    }

    function addPlaca(){

        const id = arrayPlacas[arrayPlacas.length - 1].id + 1;

        const novoArray = [...arrayPlacas, {id: id, placa: "", valor: ""}];
        setArrayPlacas(novoArray);
    }

    useEffect(() => {
        const busca = async () => {
            const array = await buscaPlacas();
            setArrayPlacas(array);
        }
        busca();
    }, [])

    return(
        <div id="containerPlacas">
            <h1 id="titlePlacas">Placas e valores</h1>

            <div className="containerPlacasInfos">

                <div className="titlePlacasInfos">
                    <p className="itemTitlePlacas">Placa</p>
                    <p className="itemTitlePlacas">Valor</p>
                </div>

                {arrayPlacas.map((item) => {
                    return(
                        <>
                        <div className="cardPlaca">
                            <div className="inputPlacaContainer">
                                <button 
                                    className="btnRemovePlaca"
                                    onClick={() => removerRef(item.id)}
                                >
                                    <img className="imgRemovePlaca" src={Lixeira} alt="" />
                                </button>
                                <input 
                                    className="inputPlaca" 
                                    type="text" 
                                    value={item.placa}
                                    onChange={(event) => alteraValue(event, item.id, "placa")}
                                />
                            </div>
                            
                            <input 
                                className="inputPlaca" 
                                type="text" 
                                value={item.valor}
                                onChange={(event) => alteraValue(event, item.id, "valor")}
                            />
                        </div>
                        </>
                    );
                })}

                <button
                    id="btnAddPlaca"
                    onClick={() => addPlaca()}
                >
                    Adicionar placa
                </button>

            </div>

            <button
                id="btnEnviarPlacas"
                onClick={async () => await atualizaPlacas(arrayPlacas)}
            >
                Atualizar placas
            </button>
        </div>

    );
}