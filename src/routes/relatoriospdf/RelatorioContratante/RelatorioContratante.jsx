import './relatorioContratante.css';
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router';
import RelatorioContratantePDF from './relatorioContratantePDF';
import { PDFViewer } from '@react-pdf/renderer';
import { useLocation } from 'react-router';
import usePdf from '../../../hooks/usePdf';

export default function RelatorioContratante(){

    const location = useLocation();
    const [arrayIds, setArrayIds] = useState([]);
    const [arrayRelatorios, setArrayRelatorios] = useState([]);

    const { buscaRelatoriosPdf } = usePdf();


    useEffect(() => {
        const dados = location.state;
        setArrayIds(dados);
        
    }, [location])

    useEffect(() => {
        if(arrayIds && arrayIds.length != 0){
            const busca = async () => {
                const arrayTemp = await buscaRelatoriosPdf(arrayIds);
                setArrayRelatorios(arrayTemp);
            }
            busca();
        }
        
    }, [arrayIds])


    const relatorioContratanteMemo = useMemo(() => (
        <RelatorioContratantePDF
            arrayRelatorios={arrayRelatorios}
        />
    ), [arrayRelatorios])


    return(
        <div id="containerRelatorioContratante">
            <h1 id="titleRelatorioContratante">Relatorio contratante</h1>
            <Link id="linkColecoes" to="/colecoes">Retornar as colecoes</Link>

            <PDFViewer id="pdfViewer">
                {relatorioContratanteMemo}
            </PDFViewer>


        </div>
    )
}