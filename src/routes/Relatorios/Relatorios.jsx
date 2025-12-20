import './relatorios.css'
import RelatoriosPreview from './Components/RelatorioPreview/RelatoriosPreview';
import Filtros from './Components/Filtros/Filtros'
import useRelatorios from '../../hooks/useRelatorios';
import { useEffect, useState } from 'react'

export default function RelatoriosPendentes(){

    const { relatorios, buscaRelatorios, excluiDocumento, filtros, setFiltros, limpaFiltros, gatilho } = useRelatorios();

    const [colecao, setColecao] = useState([]);

    useEffect(() => {
        buscaRelatorios();
    },[])

    return(
        <div id="containerRel">
            <h1 id="titleRel">Relatórios</h1>

            <Filtros
                filtros={filtros}
                buscaRelatorios={buscaRelatorios}
                setFiltros={setFiltros}
                limpaFiltros={limpaFiltros}
            />

            <div>
                <button id="btnAddColecao">Adicionar colecao</button>
            </div>

            <RelatoriosPreview
                relatorios={relatorios}
                buscaRelatorios={buscaRelatorios}
                excluiDocumento={excluiDocumento}
                colecao={colecao}
                setColecao={setColecao}
            />

        </div>
    );
}