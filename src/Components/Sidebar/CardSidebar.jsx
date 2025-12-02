import './cardSidebar.css'
import { Link } from 'react-router';

export default function CardSidebar({titulo, img, path}){
    return(
        <Link 
            to={path}
            className="cardSidebar"
        >
            <img className="imgCardSidebar" src={img} alt=""/>
            <p style={{color: 'white'}}>{titulo}</p>
        </Link>
    );
}