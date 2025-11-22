import useRelatorios from '../../hooks/useRelatorios';

export default function InputFiltro({name, value, campo, setFiltros, filtros}){

    function alteraFiltro(event, campo){
        const value = event.target.value;
        setFiltros({...filtros, [campo]: value});
    }

    return(
        <div className="cardFiltros">
        <label>{name}</label>
        <input
            className="inputFiltro"
            type="text" 
            value={value}
            onChange={(e) => alteraFiltro(e, campo)}
        />
        </div>
    );
}
