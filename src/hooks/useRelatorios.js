import { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { collection, where, query, getDocs, orderBy, doc, deleteDoc } from "firebase/firestore";

export default function useRelatorios(){

    const [relatorios, setRelatorios] = useState([]);

    const [filtros, setFiltros] = useState({
        dataInicio: '',
        motorista: '',
        job: '',
        atribuicao: '',
        setor: '',
        contratante: '',
        produtor: '',
        placa: ''
    });

    const [sinalizador, setSinalizador] = useState(false);


    const buscaRelatorios = async () => {
        try{
            const arrayRestricoes = []

            if(filtros.dataInicio != ''){
                arrayRestricoes.push(where('dateIni', '==', filtros.dataInicio),);
            }

            if(filtros.motorista != ''){
                arrayRestricoes.push(where('motorista', '==', filtros.motorista),);
            }

            if(filtros.job != ''){
                arrayRestricoes.push(where('job', '==', filtros.job),);
            }

            if(filtros.atribuicao != ''){
                arrayRestricoes.push(where('atribuicao', '==', filtros.atribuicao),);
            }

            if(filtros.setor != ''){
                arrayRestricoes.push(where('setor', '==', filtros.setor),);
            }

            if(filtros.contratante != ''){
                arrayRestricoes.push(where('produtorEmpresa', '==', filtros.contratante),);
            }

            if(filtros.produtor != ''){
                arrayRestricoes.push(where('produtorPessoa', '==', filtros.produtor),);
            }

            if(filtros.placa != ''){
                arrayRestricoes.push(where('placa', '==', filtros.placa),);
            }

            arrayRestricoes.push(orderBy('dateTimeIni', 'desc'))

            const q = query(collection(db, 'relatorios'), ...arrayRestricoes);
            const querySnapShot = await getDocs(q);
            const listaRelatorios = querySnapShot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            setRelatorios(listaRelatorios);

        } catch(error){
            console.log(error);
        }
    }


    const excluiDocumento = async (colecao, id_documento) => {
        try{
            const docRef = doc(db, colecao, id_documento);
            await deleteDoc(docRef);
        } catch(error) {
            alert(`Erro ao excluir relatório! - ${error}`);
        }
    }

    const limpaFiltros = () => {
        setFiltros({
            dataInicio: '',
            motorista: '',
            job: '',
            atribuicao: '',
            setor: '',
            contratante: '',
            produtor: '',
            placa: ''
        });
    }

    return{
        relatorios,
        buscaRelatorios,
        excluiDocumento,
        filtros,
        setFiltros,
        limpaFiltros,
        sinalizador,
        setSinalizador
    }

}