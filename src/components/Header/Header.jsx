import './Header.scss';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <Link to="/">
                <img src="/images/logo/Booki.png" alt="logo-booki" className="logo-booki" />
                <img src="/images/logo/Booki@3x.png" alt="logo-mobile" className="logo-mobile" />
            </Link>
            <nav>
                <ul>
                    <li><a href="#hebergements" className="lien-hébergements">Hébergements</a></li>
                    <li><a href="#activités" className="lien-activités">Activités</a></li>
                </ul>
            </nav>
        </header>
    )
}