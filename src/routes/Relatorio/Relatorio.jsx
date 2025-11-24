import { useParams } from 'react-router'
import './relatorio.css'
import { useEffect } from 'react';
import useRelatorio from '../../hooks/useRelatorio';
import InputRelatorio from './Components/InputRelatorio/InputRelatorio';
import Checkbox from './Components/Checkbox/Checkbox';

export default function Relatorio(){

    
    const { id } = useParams();
    const { buscaRelatorio, relatorioGetters, relatorioSetters } = useRelatorio(); //

    useEffect(() => {
        buscaRelatorio(id);
    }, []);
    

    return(
        <div id="relatorioContainer">
            <h1 style={{textAlign: 'center', borderBottom: '2px solid white'}}>Relatório</h1>

            <div id="formularioContainer">

                <InputRelatorio
                    name="Motorista"
                    value={relatorioGetters.motorista}
                    setter={relatorioSetters.setMotorista}
                />

                <InputRelatorio
                    name="Job"
                    value={relatorioGetters.motorista}
                    setter={relatorioSetters.setMotorista}
                />

                <InputRelatorio
                    name="Km Inicial"
                    value={relatorioGetters.motorista}
                    setter={relatorioSetters.setMotorista}
                />

                <InputRelatorio
                    name="Km Final"
                    value={relatorioGetters.motorista}
                    setter={relatorioSetters.setMotorista}
                />

                <InputRelatorio
                    name="Contratante"
                    value={relatorioGetters.motorista}
                    setter={relatorioSetters.setMotorista}
                />

                <InputRelatorio
                    name="Produtor(a)"
                    value={relatorioGetters.motorista}
                    setter={relatorioSetters.setMotorista}
                />

                <Checkbox
                    name="Parceiro"
                    state={relatorioGetters.parceiro}
                    setter={relatorioSetters.setParceiro}
                />

                <Checkbox
                    name="Inversor"
                    state={relatorioGetters.inversor}
                    setter={relatorioSetters.setInversor}
                />

            </div>

            
        </div>
    )
}