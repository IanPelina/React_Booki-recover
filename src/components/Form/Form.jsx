import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Form.scss'
import { faLocationDot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function Form() {

    return (

        <form className="recherches">
            <div className="location">
                <FontAwesomeIcon icon={faLocationDot} className="location-dot" />
            </div>
            <div className="barre">
                <label htmlFor="recherche"></label>
                <input type="text" name="recherche" id="recherche" placeholder='Marseille, France' />
            </div>
            <div className="bouton-et-loupe">
                <button type="button" className="bouton-recherche">Rechercher</button><FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' id="loupe-mob" />
            </div>    
        </form>
    )
}

// 