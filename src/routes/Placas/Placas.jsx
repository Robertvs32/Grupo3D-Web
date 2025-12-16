import './placas.css'
import Lixeira from '../../assets/img/lixeira.png'
import usePlacas from '../../hooks/usePlacas';
import { useState, useEffect } from 'react';

export default function Usuarios(){

    const { buscaPlacas, atualizaPlacas } = usePlacas();
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

    function removerPlaca(id){
        const novoArray = arrayPlacas.filter((item) => {
            if(item.id != id){
                return(item);
            }
        })

        setArrayPlacas(novoArray)
    }

    function addPlaca(){
        const id = arrayPlacas[arrayPlacas.length - 1].id + 1;

        const novoArray = [...arrayPlacas, {id: id, carro: "", placa: "", valorhoracontratante: "", valorhoramotorista: "", valorkm: ""}];
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
                    <p className="itemTitlePlacas">Carro</p>
                    <p className="itemTitlePlacas">Placa</p>
                    <p className="itemTitlePlacas">Valor h/contratante</p>
                    <p className="itemTitlePlacas">Valor h/motorista</p>
                    <p className="itemTitlePlacas">Valor km</p>
                </div>

                {arrayPlacas.map((item) => {
                    return(
                        <>
                        <div className="cardPlaca">
                            <div className="inputPlacaContainer">
                                <button 
                                    className="btnRemovePlaca"
                                    onClick={() => removerPlaca(item.id)}
                                >
                                    <img className="imgRemovePlaca" src={Lixeira} alt="" />
                                </button>
                                <input 
                                    className="inputPlaca" 
                                    type="text" 
                                    value={item.carro}
                                    onChange={(event) => alteraValue(event, item.id, "carro")}
                                />
                            </div>
                            
                            <input 
                                className="inputPlaca" 
                                type="text" 
                                value={item.placa}
                                onChange={(event) => alteraValue(event, item.id, "placa")}
                            />

                            <input 
                                className="inputPlaca" 
                                type="text" 
                                value={item.valorhoracontratante}
                                onChange={(event) => alteraValue(event, item.id, "valorhoracontratante")}
                            />

                            <input 
                                className="inputPlaca" 
                                type="text" 
                                value={item.valorhoramotorista}
                                onChange={(event) => alteraValue(event, item.id, "valorhoramotorista")}
                            />

                            <input 
                                className="inputPlaca" 
                                type="text" 
                                value={item.valorkm}
                                onChange={(event) => alteraValue(event, item.id, "valorkm")}
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