import './obs.css'

export default function ObsInputRelatorio({name, value, setter}){

    function changeValue(e, setter){
        const value = e.target.value;
        setter(value);
    }

    return(
        <div className="containerObsRelatorio">
            <label className="labelObsRelatorio">{name}</label>
            <textarea
                className="textareaObsRelatorio"
                type="text" 
                value={value}
                onChange={e => changeValue(e, setter)}
            />
        </div>
    );
}