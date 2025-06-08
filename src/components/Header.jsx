import '../styles/header.css';
import { Link } from 'react-router-dom'; //obligatoire avec hashrouter
import Worldicon from './Wordicon.jsx';
import Dropdown from './Dropdown.jsx';

import { useContext, useState } from 'react'; // Importation de useState pour le menu hamburger
import { LanguageContext } from './LanguageContext';

function Header() {
    const { language } = useContext(LanguageContext);
    const [menuOpen, setMenuOpen] = useState(false); // État pour contrôler l'affichage du menu mobile

    const home = {
        en: 'HomePage',
        fr: "Accueil"
    };

    const abouts = {
        en: 'About',
        fr: 'A propos'
    };

    const uppercasedLanguage = language.toUpperCase();
    const linkPath = `/Home_${uppercasedLanguage}`;

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Changement de l'état du menu mobile
    };

    return (
        <header>
            <nav className='header_nav'>
                <Link to="https://www.erwin-labs.com/" className='home_logo'>

                        <img src="https://cdn.prod.website-files.com/62d56c0bde36c5e99acfb524/648a060a4e983940f8857fb1_Group%20289660.svg" alt="" />

                        <div className='home_logo_x'>X</div>

                        <img src="https://cms-assets.unrealengine.com/AVzjeqAbLRKi3W5jq0CAvz/cmb81xhry3tsj07mzscwq44nf" alt="" />
                </Link>
                <div className='lang-menu'>
                    <Worldicon />
                    <Dropdown />
                </div>
            </nav>
        </header>
    );
}

export default Header;
