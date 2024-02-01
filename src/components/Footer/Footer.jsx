import './Footer.scss';

export default function Footer() {

    return (
        <footer>
            <div className="footer-div">
                <ul>
                    <li><a href=""><b>A propos</b></a></li>
                    <li><a href="">Fonctionnement du site</a></li>
                    <li><a href="">Conditions générales</a></li>
                    <li><a href="">Données et confidentialité</a></li>
                </ul>
                <ul>
                    <li><a href=""><b>Nos Hébergements</b></a></li>
                    <li><a href="">Charte qualité</a></li>
                    <li><a href="">Proposer votre hôtel</a></li>
                </ul>
                <ul>
                    <li><a href=""><b>Assistance</b></a></li>
                    <li><a href="">Centre d'aide</a></li>
                    <li><a href="">Nous contacter</a></li>
                </ul>
            </div>
        </footer>
    )
}