import '../assets/styles/relatoriosPreview.css'
import seta from '../assets/img/seta-direita.png'
import lixeira from '../assets/img/lixeira.png'
import { useEffect } from 'react';
import useRelatorio from '../hooks/useRelatorio';

export default function RelatoriosPreview(){

    const {relatorios, buscaRelatorios} = useRelatorio();

    useEffect(() => {
        buscaRelatorios();
    },[])

    return(
        <div id="containerRelatoriosPreview">

        <div className="cardRelatorioPreviewText">

            <p className="itemCard">Data de início</p>
            <p className="itemCard">Motorista</p>
            <p className="itemCard">Job</p>
            <p className="itemCard">Atribuicao</p>
            <p className="itemCard">setor</p>
            <p className="itemCard">Contratante</p>
            <p className="itemCard">Produtor</p>
            <p className="itemCardUlt">Placa</p>
    
        </div>

        {relatorios.map(doc => (
            <div key={doc.id} className="cardRelatorioPreview">

                <button className="lixeiraBtn">
                    <img src={lixeira} alt="" />
                </button>

                <p className="itemCard">{doc.dateTimeIni.toDate().toLocaleDateString()}</p>
                <p className="itemCard">{doc.motorista == '' ? 'MotoraTeste' : doc.motorista}</p>
                <p className="itemCard">{doc.job == '' ? 'JobTeste' : doc.job}</p>
                <p className="itemCard">{doc.atribuicao == 'outro' ? doc.outrosAtribuicao : 'Teste atribuição'}</p>
                <p className="itemCard">{doc.setor == 'outro' ? doc.outrosSetor : doc.setor}</p>
                <p className="itemCard">{doc.produtorEmpresa == '' ? 'TesteContratante' : doc.produtorEmpresa}</p>
                <p className="itemCard">{doc.produtorPessoa == '' ? 'TesteProdutor' : doc.produtorPessoa}</p>
                <p className="itemCardUlt">{doc.placa == '' ? 'sla' : 'ABC1234'}</p>
        
                <button className="acessarBtn">
                    <img src={seta} alt="" />
                </button>

            </div>
        ))}
        


        </div>
    );
}