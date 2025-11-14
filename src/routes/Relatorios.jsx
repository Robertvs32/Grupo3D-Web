import '../assets/styles/relatorios.css'
import RelatoriosPreview from '../Components/RelatoriosPreview';
import Filtros from '../Components/Filtros';
import useRelatorios from '../hooks/useRelatorios';
import { useEffect } from 'react'

export default function RelatoriosPendentes(){

    const {relatorios, buscaRelatorios, excluiDocumento, filtros, setFiltros, limpaFiltros} = useRelatorios();

    useEffect(() => {
        buscaRelatorios();
    },[filtros])

    return(
        <div id="containerRel">
            <h1 id="titleRel">Relatórios</h1>

            <Filtros
                filtros={filtros}
                
                buscaRelatorios={buscaRelatorios}
                setFiltros={setFiltros}
                limpaFiltros={limpaFiltros}
            />

            <RelatoriosPreview
                relatorios={relatorios}
                buscaRelatorios={buscaRelatorios}
                excluiDocumento={excluiDocumento}
            />

        </div>
    );
}