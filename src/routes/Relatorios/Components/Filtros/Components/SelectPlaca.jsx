export default function SelectPlaca({value, setFiltros, filtros, options}){

    function alteraFiltro(event){
        const value = event.target.value;
        setFiltros({...filtros, placa: value});
    }

    return(
        <div className="cardFiltros">
            <label>Placa</label>

                <select
                    className="inputFiltro" 
                    value={value} 
                    onChange={(e) => alteraFiltro(e)}
                >
                    <option value="">Geral</option>

                    {options.map(option => (
                        <option value={option.placa}>{option.placa}</option>
                    ))}
                    
                </select>
        </div>
    );
}