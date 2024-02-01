import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './Populaire.scss';

export default function Populaire({populaire}) {

    return (
        <div className="populaires-card">
            <article className="carte">
                <img src={populaire.cover} alt={populaire.alt} />
                <div className="contenu-carte">
                    <div className="carte-txt">
                        <h3 className="carte-titre">{populaire.title}</h3> 
                        <p className="carte-sous-titre">Nuit à partir de {populaire.price}<span className="euro">€</span></p>
                    </div>
                    <div className="note-carte">
                        <FontAwesomeIcon icon={faStar} aria-hidden="true" className='star'/>
                        <FontAwesomeIcon icon={faStar} aria-hidden="true" className='star'/>
                        <FontAwesomeIcon icon={faStar} aria-hidden="true" className='star'/>
                        <FontAwesomeIcon icon={faStar} aria-hidden="true" className='star'/>
                        <FontAwesomeIcon icon={faStar} aria-hidden="true" className='star'/>
                    </div>
                </div>
            </article>
        </div>
    )
}