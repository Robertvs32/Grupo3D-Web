import { useParams } from 'react-router'
import '../assets/styles/relatorio.css'
import { useEffect } from 'react';
import useRelatorio from '../hooks/useRelatorio';
import InputForm from '../Components/formInputComponents/InputForm';
import SelectForm from '../Components/formInputComponents/SelectForm';

export default function Relatorio(){

    
    const { id } = useParams(); //RECUPERA O ID PELO PARÂMETRO PASSADO POR URL
    const { buscaRelatorio, relatorioGetters, relatorioSetters } = useRelatorio(); //

    //BUSCA OS DADOS DO RELATORIO QUANDO CARREGA O COMPONENTE
    useEffect(() => {
        buscaRelatorio(id);
    }, []);
    

    return(
        <div id="relatorioContainer">
            <h1 style={{textAlign: 'center', borderBottom: '2px solid white'}}>Relatório</h1>
        </div>
    )
}