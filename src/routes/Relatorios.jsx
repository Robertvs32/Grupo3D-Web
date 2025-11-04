import '../assets/styles/relatorios.css'
import RelatoriosPreview from '../Components/RelatoriosPreview';

export default function RelatoriosPendentes(){
    return(
        <div id="containerRelPen">
            <h1 id="titleRelPen">Relatórios</h1>
            <RelatoriosPreview/>
        </div>
    );
}