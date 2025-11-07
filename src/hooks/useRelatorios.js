import { useState } from "react";
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

    const buscaRelatorios = async () => {
        try{

            const q = query(collection(db, 'relatoriostemporarios'), orderBy('dateTimeIni', 'desc'));
            const querySnapShot = await getDocs(q);
            const listaRelatorios = querySnapShot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            setRelatorios(listaRelatorios);

        } catch(error){
            alert(`Erro ao buscar relatórios: ${error}`)
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

    return{
        relatorios,
        buscaRelatorios,
        excluiDocumento
    }

}