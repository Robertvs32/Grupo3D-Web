import '../../assets/styles/inputSelect.css';
import { useState } from 'react';

export default function SelectForm({nome}){

    const[state, setState] = useState('GEW-5232');

    const objOpcoes = [
        { placa: 'AGI-1192', valor: 25},
        { placa: 'BBE-4976', valor: 25},
        { placa: 'GEW-5232', valor: 25}
    ]
        

    function changeValue(event, setter){
        setter(event.target.value);
    }

    return(
        <div className="containerInputSelect">
            <label className="labelInputSelect">{nome}</label>
            <select 
                className="selectForm"
                onChange={(event) => changeValue(event, setState)}
                value={state}
            >
                {objOpcoes.map((item) => {
                        return(
                            <option 
                                key={item.placa} 
                                value={item.placa}
                                onChange={(event) => changeValue(event, setState)}
                            >
                                    {item.placa}
                            </option>
                        );
                })}
    
            </select>
        </div>
    );
}