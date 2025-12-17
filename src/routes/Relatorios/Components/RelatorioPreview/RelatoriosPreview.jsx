import './relatoriosPreview.css'
import lixeira from '../../../../assets/img/lixeira.png'
import { Link } from 'react-router';
import Editar from '../../../../assets/img/editar.png'
import contratante from '../../../../assets/img/aperto-de-mao.png'
import motorista from '../../../../assets/img/condutor.png'

export default function RelatoriosPreview({relatorios, buscaRelatorios, excluiDocumento}){

    return(
        <div id="containerRelatoriosPreview">

        {relatorios.map(doc => (
            <div 
                key={doc.id} 
                className={`cardRelatorioPreview ${doc.verificado ? 'verificado' : 'naoVerificado'}`}
                
            >

                <div id="btnsEditRelatorio">
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
                </div>
                
                <div className="containerItemsCard">
                    <div className="itemCard">
                        <p className="titleItemCard">Data inicio</p>
                        <p className="valueItemCard">{doc.dateTimeIni.toDate().toLocaleDateString()}</p>
                    </div>

                    <div className="itemCard">
                            <p className="titleItemCard">Motorista</p>
                            <p className="valueItemCard">{doc.motorista == '' ? '-----' : doc.motorista}</p>
                    </div>

                    <div className="itemCard">
                            <p className="titleItemCard">Job</p>
                            <p className="valueItemCard">{doc.job == '' ? '-----' : doc.job}</p>
                    </div>

                    <div className="itemCard">
                            <p className="titleItemCard">Atribuicao</p>
                            <p className="valueItemCard">{doc.atribuicao == 'Outros' ? doc.outrosAtribuicao : doc.atribuicao}</p>
                    </div>

                    <div className="itemCard">
                            <p className="titleItemCard">Setor</p>
                            <p className="valueItemCard">{doc.setor == 'Outros' ? doc.outrosSetor : doc.setor}</p>
                    </div>

                    <div className="itemCard">
                            <p className="titleItemCard">Contratante</p>
                            <p className="valueItemCard">{doc.produtorEmpresa == '' ? '-----' : doc.produtorEmpresa}</p>
                    </div>

                    <div className="itemCard">
                            <p className="titleItemCard">Produtor(a)</p>
                            <p className="valueItemCard">{doc.produtorPessoa == '' ? '-----' : doc.produtorPessoa}</p>
                    </div>

                    <div className="itemCard">
                            <p className="titleItemCard">Placa</p>
                            <p className="valueItemCard">{doc.placa == '' ? '-----' : doc.placa}</p>
                    </div>
                </div>
                
                <div className="btnsGerarRelatorio">
                    <Link 
                        to={`/relatorio/${doc.id}`}
                        className="linkGerarRelatorio"
                    >
                        <img className="imgDocs" src={motorista} alt="" />
                    </Link>

                    <Link 
                        to={`relatoriocontratante/${doc.id}`}
                        className="linkGerarRelatorio"
                    >
                        <img className="imgDocs" src={contratante} alt="" />
                    </Link>
                </div>
        
                

            </div>
        ))}

        </div>
    );
}