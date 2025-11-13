import '../../assets/styles/inputForm.css';

export default function InputForm({nome, getter, setter}){

    function changeValue(event, setter){
        setter(event.target.value)
    }

    return(
        <div className="containerInput">
            <label className="labelInput">{nome}</label>
            <input 
                className="inputForm"
                type="text"
                value={getter}
                onChange={(event) => changeValue(event, setter)}
            />
        </div>
    );
}