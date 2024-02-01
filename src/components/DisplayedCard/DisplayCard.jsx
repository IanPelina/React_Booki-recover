import './DisplayCard.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function DisplayCard( {hebergement} ) {

    return hebergement && (
        <div className='displayedCard'>
            <article className='carte'>
                <img src={hebergement.cover} alt={hebergement.alt} />
                <div className="contenu-carte">
                    <div className="carte-txt">
                        <h3 className='carte-titre' >{hebergement.title}</h3>
                        <p className='carte-sous-titre'>Nuit à partir de {hebergement.price}<span className="euro">€</span></p>
                    </div>
                    <div className="note-carte">
                        <FontAwesomeIcon icon={faStar} aria-hidden="true" className='star' />
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