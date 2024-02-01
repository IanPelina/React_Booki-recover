import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faHeart, faInfo, faMoneyBillWave, faPerson } from '@fortawesome/free-solid-svg-icons';
import './Filters.scss';

export default function Filters() {
    return (
        <>
            <div className="filtres">
                <h3>Filtres</h3>
                <div className="bouton-filtres">
                    <label htmlFor="economique"></label>
                    <button className='filters-buttons' type="button" name="economique" id="economique" value="Économique">
                        <FontAwesomeIcon icon={faMoneyBillWave} className="filters-icons"></FontAwesomeIcon>Économique</button>
                    <label htmlFor="familial"></label>
                    <button className='filters-buttons' type="button" name="familial" id="familial" value="Familial">
                        <FontAwesomeIcon icon={faPerson} className="filters-icons"></FontAwesomeIcon>Familial</button>
                    <label htmlFor="romantique"></label>
                    <button className='filters-buttons' type="button" name="romantique" id="romantique" value="Romantique">
                        <FontAwesomeIcon icon={faHeart} className="filters-icons"></FontAwesomeIcon>Romantique</button>                    
                    <label htmlFor="nos-pépites"></label>
                    <button className='filters-buttons' type="button" name="nos-pépites" id="nos-pépites" value="Nos-pépites">
                        <FontAwesomeIcon icon={faFire} className="filters-icons"></FontAwesomeIcon>Nos pépites</button>
                </div>
            </div>
            <div className="info-container">
                <button type="button" id="Info"><FontAwesomeIcon icon={faInfo} className="info-icon"></FontAwesomeIcon></button>
                <p>Plus de 500 logements sont disponibles dans cette ville</p>
            </div>
        </>
    )
}