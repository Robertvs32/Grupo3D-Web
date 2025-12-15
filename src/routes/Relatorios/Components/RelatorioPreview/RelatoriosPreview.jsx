import './relatoriosPreview.css'
import lixeira from '../../../../assets/img/lixeira.png'
import { Link } from 'react-router';
import Editar from '../../../../assets/img/editar.png'
import contratante from '../../../../assets/img/aperto-de-mao.png'
import motorista from '../../../../assets/img/condutor.png'

export default function RelatoriosPreview({relatorios, buscaRelatorios, excluiDocumento}){

    return(
        <div id="containerRelatoriosPreview">

        <div className="cardRelatorioPreviewText">
            <p className="itemCard">Data de Inicio</p>
            <p className="itemCard">Motorista</p>
            <p className="itemCard">Job</p>
            <p className="itemCard">Atribuicao</p>
            <p className="itemCard">setor</p>
            <p className="itemCard">Contratante</p>
            <p className="itemCard">Produtor</p>
            <p className="itemCardUlt">Placa</p>
        </div>

        {relatorios.map(doc => (
            <div 
                key={doc.id} 
                className="cardRelatorioPreview" 
                style={{borderTop: doc.verificado ? '7px solid lightgreen' : '7px solid gray'}}
            >

                <button 
                    className="lixeiraBtn"
                    onClick={() => {
                        const confirmacao = window.confirm("Deseja realmente excluir?");
                        if(confirmacao){
                            excluiDocumento("relatorios", doc.id)
                            buscaRelatorios();
                        }
                    }}
                >
                    <img src={lixeira} alt="" />
                </button>

                <Link 
                    to={`/relatorio/${doc.id}`}
                    className="editBtn"
                >
                    <img src={Editar} alt="" />
                </Link>

                <p className="itemCard">{doc.dateTimeIni.toDate().toLocaleDateString()}</p>
                <p className="itemCard">{doc.motorista == '' ? '-----' : doc.motorista}</p>
                <p className="itemCard">{doc.job == '' ? '-----' : doc.job}</p>
                <p className="itemCard">{doc.atribuicao == 'Outros' ? doc.outrosAtribuicao : doc.atribuicao}</p>
                <p className="itemCard">{doc.setor == 'Outros' ? doc.outrosSetor : doc.setor}</p>
                <p className="itemCard">{doc.produtorEmpresa == '' ? '-----' : doc.produtorEmpresa}</p>
                <p className="itemCard">{doc.produtorPessoa == '' ? '-----' : doc.produtorPessoa}</p>
                <p className="itemCardUlt">{doc.placa == '' ? '-----' : doc.placa}</p>
        
                <Link 
                    to={`/relatorio/${doc.id}`}
                >
                    <img className="imgDocs" src={motorista} alt="" />
                </Link>

                <Link 
                    to={`relatoriocontratante/${doc.id}`}
                >
                    <img className="imgDocs" src={contratante} alt="" />
                </Link>

            </div>
        ))}

        </div>
    );
}