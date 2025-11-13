import '../assets/styles/filtros.css'
import '../assets/styles/cardFiltros.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ptBR } from 'date-fns/locale';

export default function Filtros({buscaRelatorios, setFiltros, filtros, limpaFiltros}){


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
                        id="teste"
                        selected={filtros.dataInicio}
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
                        value={filtros.motorista}
                        onChange={(e) => alteraFiltro(e, 'motorista')}
                    />
                </div>
                

                <div class="cardFiltros">
                    <label>Job</label>
                    <input
                        className="inputFiltro"
                        type="text" 
                        value={filtros.job}
                        onChange={(e) => alteraFiltro(e, 'job')}
                    />
                </div>
                
                <div class="cardFiltros">
                    <label>Atribuicao</label>
                    <input
                        className="inputFiltro"
                        type="text" 
                        value={filtros.atribuicao}
                        onChange={(e) => alteraFiltro(e, 'atribuicao')}
                    />
                </div>

                
                <div class="cardFiltros">
                    <label>Setor</label>
                    <input
                        className="inputFiltro"
                        type="text" 
                        value={filtros.setor}
                        onChange={(e) => alteraFiltro(e, 'setor')}
                    />
                </div>

                <div class="cardFiltros">
                    <label>Contratante</label>
                    <input
                        className="inputFiltro"
                        type="text" 
                        value={filtros.contratante}
                        onChange={(e) => alteraFiltro(e, 'contratante')}
                    />
                </div>

                <div class="cardFiltros">
                    <label>Produtor</label>
                    <input 
                        className="inputFiltro"
                        type="text" 
                        value={filtros.produtor}
                        onChange={(e) => alteraFiltro(e, 'produtor')}
                    />
                </div>

                <div class="cardFiltros">
                    <label>Placa</label>
                    <input 
                        className="inputFiltro"
                        type="text" 
                        value={filtros.placa}
                        onChange={(e) => alteraFiltro(e, 'placa')}
                    />
                </div>

                <div class="cardFiltros">
                    <label>Status</label>

                        <select
                            className="inputFiltro" 
                            value={filtros.verificado} 
                            onChange={(e) => alteraFiltro(e, 'verificado')}
                        >
                            <option value="todos">Todos</option>
                            <option value="true">Verificados</option>
                            <option value="false">Não verificados</option>
                        </select>
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
                }}
            >
                Limpar Filtros
            </button>
        </>
        
    );
}