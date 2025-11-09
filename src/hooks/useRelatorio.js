import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useState } from "react";

export default function useRelatorio(){

    const [relatorio, setRelatorio] = useState('')

const buscaRelatorio = async (id) => {
    const refDoc = doc(db, "relatorios", id);
    const docSnapshot = await getDoc(refDoc);
    const relatorio = docSnapshot.data();

    setRelatorio(relatorio);
    return(relatorio);
}

return{
    buscaRelatorio,
    relatorio
}

}