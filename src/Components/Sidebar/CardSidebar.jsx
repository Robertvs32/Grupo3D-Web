import './cardSidebar.css'
import { Link } from 'react-router';

export default function CardSidebar({titulo, img}){
    return(
        <Link 
            to={"/"}
            className="cardSidebar"
        >
            <img className="imgCardSidebar" src={img} alt=""/>
            <p style={{color: 'white'}}>{titulo}</p>
        </Link>
    );
}