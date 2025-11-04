import '../assets/styles/cardSidebar.css'

export default function CardSidebar({titulo, img}){
    return(
        <div className="cardSidebar">
            <img className="imgCardSidebar" src={img} alt=""/>
            <p style={{color: 'white'}}>{titulo}</p>
        </div>
    );
}