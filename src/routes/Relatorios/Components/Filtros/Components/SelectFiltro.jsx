export default function SelectFiltro({name, value, campo, setFiltros, filtros, options}){

    function alteraFiltro(event, campo){
        const value = event.target.value;
        setFiltros({...filtros, [campo]: value});
    }

    return(
        <div className="cardFiltros">
            <label>{name}</label>

                <select
                    className="inputFiltro" 
                    value={value} 
                    onChange={(e) => alteraFiltro(e, campo)}
                >
                    <option value="">Geral</option>

                    {options.map(option => (
                        <option value={option.value}>{option.nome}</option>
                    ))}
                    
                </select>
        </div>
    );
}