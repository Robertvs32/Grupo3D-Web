import { useState } from "react";

export default function useForm(){

    const [motorista, setMotorista] = useState('');
    const [dateTimeIni, setDateTimeIni] = useState(new Date);
    const [dateTimeFim, setDateTimeFim] = useState(new Date);
    const [obs, setObs] = useState('');
    const [estacionamento, setEstacionamento] = useState('');
    const [valorEstacionamento, setValorEstacionamento] = useState('');
    const [job, setJob] = useState('');
    const [produtorEmpresa, setProdutorEmpresa] = useState('');
    const [produtorPessoa, setProdutorPessoa] = useState('');
    const [kmIni, setKmIni] = useState('');
    const [kmFim, setKmFim] = useState('');
    const [zonaAzul, setZonaAzul] = useState('');
    const [qtdZonaAzul, setQtdZonaAzul] = useState('');
    const [valorZonaAzul, setValorZonaAzul] = useState(0);
    const [inversor, setInversor] = useState('');
    const [pedagio, setPedagio] = useState('');
    const [parceiro, setParceiro] = useState('');
    const [valorPedagioParceiro, setValorPedagioParceiro] = useState(0);
    const [placa, setPlaca] = useState('');
    const [atribuicao, setAtribuicao] = useState('');
    const [setor, setSetor] = useState('');
    const [outrosAtribuicao, setOutrosAtribuicao] = useState('');
    const [outrosSetor, setOutrosSetor] = useState('');
    const [alimentacao, setAlimentacao] = useState('');
    const [arrayAlimentacao, setArrayAlimentacao] = useState('');

    const formGetters = {
        motorista,
        dateTimeIni,
        dateTimeFim,
        obs,
        estacionamento,
        valorEstacionamento,
        job,
        produtorEmpresa,
        produtorPessoa,
        kmIni,
        kmFim,
        zonaAzul,
        qtdZonaAzul,
        valorZonaAzul,
        inversor,
        pedagio,
        parceiro,
        valorPedagioParceiro,
        placa,
        atribuicao,
        setor,
        outrosAtribuicao,
        outrosSetor,
        alimentacao,
        arrayAlimentacao
    }
    
    const formSetters = {
        setMotorista,
        setDateTimeIni,
        setDateTimeFim,
        setObs,
        setEstacionamento,
        setValorEstacionamento,
        setJob,
        setProdutorEmpresa,
        setProdutorPessoa,
        setKmIni,
        setKmFim,
        setZonaAzul,
        setQtdZonaAzul,
        setValorZonaAzul,
        setInversor,
        setPedagio,
        setParceiro,
        setValorPedagioParceiro,
        setPlaca,
        setAtribuicao,
        setSetor,   
        setOutrosAtribuicao,
        setOutrosSetor,
        setAlimentacao,
        setArrayAlimentacao
    }

    const recuperaValues = (object) => {
        setMotorista(object.motorista);
        setObs(object.obs);
        setEstacionamento(object.estacionamento);
        setJob(object.job);
        setProdutorEmpresa(object.produtorEmpresa);
        setProdutorPessoa(object.produtorPessoa);
    }

    return{
        ...formGetters,
        ...formSetters,
        recuperaValues
    }

}