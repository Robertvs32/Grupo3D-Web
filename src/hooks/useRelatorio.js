import { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, where, query, getDocs } from "firebase/firestore";

export default function useRelatorio(){

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

            const q = query(collection(db, 'relatoriostemporarios'));
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

    return{
        relatorios,
        buscaRelatorios
    }

}