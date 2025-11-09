import '../assets/styles/filtros.css'
import '../assets/styles/cardFiltros.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ptBR } from 'date-fns/locale';

export default function Filtros({dataInicio, motorista,  job, atribuicao, setor, contratante, produtor, placa, buscaRelatorios, setFiltros, filtros, limpaFiltros, setSinalizador}){


    function alteraFiltro(event, campo){
        const value = event.target.value;
        setFiltros({...filtros, [campo]: value});
    }

    return(
        <>

            <h2 id="titleFiltros">Filtros</h2>

            <div id="filtrosContainer">

                <div class="cardFiltros">
                    <label>Data Inicio</label>

                    <DatePicker
                        selected={dataInicio}
                        onChange={(valor) => setFiltros({...filtros, ['dataInicio']: valor})}
                        dateFormat="dd/MM/yyyy"
                        locale={ptBR}
                    />
                    
                </div>

                <div className="cardFiltros">
                    <label>Motorista</label>
                    <input
                        className="inputFiltro"
                        type="text" 
                        value={motorista}
                        onChange={(e) => alteraFiltro(e, 'motorista')}
                    />
                </div>
                

                <div class="cardFiltros">
                    <label>Job</label>
                    <input
                        className="inputFiltro"
                        type="text" 
                        value={job}
                        onChange={(e) => alteraFiltro(e, 'job')}
                    />
                </div>

                
                <div class="cardFiltros">
                    <label>Atribuicao</label>
                    <input
                        className="inputFiltro"
                        type="text" 
                        value={atribuicao}
                        onChange={(e) => alteraFiltro(e, 'atribuicao')}
                    />
                </div>

                
                <div class="cardFiltros">
                    <label>Setor</label>
                    <input
                        className="inputFiltro"
                        type="text" 
                        value={setor}
                        onChange={(e) => alteraFiltro(e, 'setor')}
                    />
                </div>

                <div class="cardFiltros">
                    <label>Contratante</label>
                    <input
                        className="inputFiltro"
                        type="text" 
                        value={contratante}
                        onChange={(e) => alteraFiltro(e, 'contratante')}
                    />
                </div>

                <div class="cardFiltros">
                    <label>Produtor</label>
                    <input 
                        className="inputFiltro"
                        type="text" 
                        value={produtor}
                        onChange={(e) => alteraFiltro(e, 'produtor')}
                    />
                </div>

                <div class="cardFiltros">
                    <label>Placa</label>
                    <input 
                        className="inputFiltro"
                        type="text" 
                        value={placa}
                        onChange={(e) => alteraFiltro(e, 'placa')}
                    />
                </div>

                
            </div>

            <button 
                id="btnFiltro"
                onClick={() => buscaRelatorios()}
            >
                Aplicar filtros
            </button>

            <button 
                id="btnFiltro"
                onClick={async () => {
                    limpaFiltros();
                    setSinalizador((anterior) => !anterior);
                }}
            >
                Limpar Filtros
            </button>
        </>
        
    );
}