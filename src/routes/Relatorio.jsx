import { useParams } from 'react-router'
import '../assets/styles/relatorio.css'
import { useEffect } from 'react';
import useRelatorio from '../hooks/useRelatorio';
import useForm from '../hooks/useForm';

export default function Relatorio(){

    const { id } = useParams();
    const { buscaRelatorio, relatorio } = useRelatorio();
    const form  = useForm();

    useEffect(() => {
        buscaRelatorio(id);
    }, []);

    useEffect(() => {
        form.recuperaValues(relatorio);
    }, [relatorio])

    function changeProdutorPessoa(event){
        form.setProdutorPessoa(event.target.value);
    }
    

    return(
        <div id="relatorioContainer">
            <h1>Relatório</h1>
            <p>{`Motorista: ${relatorio.motorista}`}</p>
            <p>{`Motorista: ${form.motorista}`}</p>
            <p>{`Estacionamento: ${form.estacionamento}`}</p>
            <p>{`Job: ${form.job}`}</p>
            <p>{`Empresa: ${form.produtorEmpresa}`}</p>
            <p>{`Pessoa: ${form.produtorPessoa}`}</p>

            <input 
                type="text"
                value={form.produtorPessoa}
                onChange={(event) => changeProdutorPessoa(event)}
             />
        </div>
    )
}