import './filtros.css'
import './Components/cardFiltros.css'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ptBR } from 'date-fns/locale';
import InputFiltro from './Components/InputFiltro';
import SelectFiltro from './Components/SelectFiltro';

export default function Filtros({buscaRelatorios, setFiltros, filtros, limpaFiltros}){

    const optionsPlaca = [
        {
            nome: "ABC-1234",
            value: "ABC-1234"
        },
        {
            nome: "CBA-4321",
            value: "CBA-4321"
        }
    ]

    const optionsVerificado = [
        {
            nome: "Verificado",
            value: "true"
        },
        {
            nome: "Não verificado",
            value: "false"
        }
        
    ]


    return(
        <>
            <h2 id="titleFiltros">Filtros</h2>

            <div id="filtrosContainer">

                <div className="cardFiltros">
                    <label>Data Inicio</label>

                    <DatePicker
                        id="teste"
                        selected={filtros.dataInicio}
                        onChange={(valor) => setFiltros({...filtros, ['dataInicio']: valor})}
                        dateFormat="dd/MM/yyyy"
                        locale={ptBR}
                    />
                    
                </div>

                <InputFiltro 
                    name="Motorista"
                    value={filtros.motorista}
                    campo="motorista"
                    setFiltros={setFiltros}
                    filtros={filtros}
                />

                <InputFiltro 
                    name="Job"
                    value={filtros.job}
                    campo="job"
                    setFiltros={setFiltros}
                    filtros={filtros}
                />

                <InputFiltro 
                    name="Atribuicao"
                    value={filtros.atribuicao}
                    campo="atribuicao"
                    setFiltros={setFiltros}
                    filtros={filtros}
                />

                <InputFiltro 
                    name="Setor"
                    value={filtros.setor}
                    campo="setor"
                    setFiltros={setFiltros}
                    filtros={filtros}
                />

                <InputFiltro 
                    name="Contratante"
                    value={filtros.contratante}
                    campo="contratante"
                    setFiltros={setFiltros}
                    filtros={filtros}
                />

                <InputFiltro 
                    name="Produtor"
                    value={filtros.produtor}
                    campo="setor"
                    setFiltros={setFiltros}
                    filtros={filtros}
                />

                <SelectFiltro
                    name="Placa"
                    value={filtros.placa}
                    campo="placa"
                    setFiltros={setFiltros}
                    filtros={filtros}
                    options={optionsPlaca}
                />

                <SelectFiltro
                    name="Verificado"
                    value={filtros.verificado}
                    campo="verificado"
                    setFiltros={setFiltros}
                    filtros={filtros}
                    options={optionsVerificado}
                />

                
            </div>

            <button 
                id="btnFiltro"
                onClick={async () => {
                    limpaFiltros(); 
                }}
            >
                Limpar Filtros
            </button>
        </>
        
    );
}