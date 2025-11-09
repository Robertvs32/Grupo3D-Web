import '../assets/styles/relatorios.css'
import RelatoriosPreview from '../Components/RelatoriosPreview';
import Filtros from '../Components/Filtros';
import useRelatorios from '../hooks/useRelatorios';
import { useEffect } from 'react'

export default function RelatoriosPendentes(){

    const {relatorios, buscaRelatorios, excluiDocumento, filtros, setFiltros} = useRelatorios();

    useEffect(() => {
        buscaRelatorios();
    },[])

    return(
        <div id="containerRelPen">
            <h1 id="titleRelPen">Relatórios</h1>

            <Filtros
                filtros={filtros}
                dataInicio={filtros.dataInicio}
                motorista ={filtros.motorista}
                job={filtros.job}
                atribuicao={filtros.atribuicao}
                setor={filtros.setor} 
                contratante={filtros.contratante} 
                produtor={filtros.produtor}
                placa={filtros.placa} 
                buscaRelatorios={buscaRelatorios}
                setFiltros={setFiltros}
            />

            <RelatoriosPreview
                relatorios={relatorios}
                buscaRelatorios={buscaRelatorios}
                excluiDocumento={excluiDocumento}
            />

        </div>
    );
}