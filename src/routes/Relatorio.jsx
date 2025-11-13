import { useParams } from 'react-router'
import '../assets/styles/relatorio.css'
import { useEffect } from 'react';
import useRelatorio from '../hooks/useRelatorio';
import InputForm from '../Components/formInputComponents/InputForm';
import SelectForm from '../Components/formInputComponents/SelectForm';
import TimePicker from 'react-time-picker';

export default function Relatorio(){

    
    const { id } = useParams(); //RECUPERA O ID PELO PARÂMETRO PASSADO POR URL
    const { buscaRelatorio, relatorioGetters, relatorioSetters } = useRelatorio(); //

    //BUSCA OS DADOS DO RELATORIO QUANDO CARREGA O COMPONENTE
    useEffect(() => {
        buscaRelatorio(id);
    }, []);
    

    return(
        <div id="relatorioContainer">
            <h1 style={{textAlign: 'center'}}>Relatório</h1>


        <div id="inputForms">

            <InputForm
                nome="Motorista"
                getter={relatorioGetters.motorista}
                setter={relatorioSetters.setMotorista}
            />

            <InputForm
                nome="Job"
                getter={relatorioGetters.job}
                setter={relatorioSetters.setJob}
            />
            
            <InputForm
                nome="KmInicial"
                getter={relatorioGetters.motorista}
                setter={relatorioSetters.setMotorista}
            />

            <InputForm
                nome="KmFinal"
                getter={relatorioGetters.motorista}
                setter={relatorioSetters.setMotorista}
            />

            <InputForm
                nome="Produtor(a)"
                getter={relatorioGetters.produtorPessoa}
                setter={relatorioSetters.setMotorista}
            />

            <InputForm
                nome="Contratante"
                getter={relatorioGetters.produtorEmpresa}
                setter={relatorioSetters.setMotorista}
            />

            <SelectForm
                nome="Placa"
            />
            
            <input 
                type="time" 
                style={{height: '20px', width: '200px'}} 
                value="15:50"
            />
            
        </div>
            

            

        </div>
    )
}