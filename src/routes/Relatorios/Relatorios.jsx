import './relatorios.css'
import RelatoriosPreview from './Components/RelatorioPreview/RelatoriosPreview';
import Filtros from './Components/Filtros/Filtros'
import useRelatorios from '../../hooks/useRelatorios';
import { useEffect, useState } from 'react'

export default function RelatoriosPendentes(){

    const [loading, setLoading] = useState(true);

    const {relatorios, buscaRelatorios, excluiDocumento, filtros, setFiltros, limpaFiltros} = useRelatorios();

    useEffect(() => {
        buscaRelatorios();
        setLoading(false);
    },[filtros])

    {if(loading === true){
        return(
            <h1>Carregando</h1>
        )
    }

    }

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