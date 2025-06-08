import '../styles/header.css';
import { Link } from 'react-router-dom'; //obligatoire avec hashrouter
import Worldicon from './Wordicon.jsx';
import Dropdown from './Dropdown.jsx';

import React, { useContext, useState } from 'react'; // Importation de useState pour le menu hamburger
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
                <Link to="/" className='home_logo'>
                    {home[language]}
                </Link>
                <div className='hamburger' onClick={toggleMenu}>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                </div>
                <ul className={`ul_nav ${menuOpen ? 'open' : ''}`}>
                    <Link to="/Blog" className='underline-on-hover'>Blog</Link>
                    <Link to={linkPath} className='underline-on-hover'>{abouts[language]}</Link>
                    <Link to="/Contact" className='underline-on-hover'>Contact</Link>
                </ul>
                <div className='lang-menu'>
                    <Worldicon />
                    <Dropdown />
                </div>
            </nav>
        </header>
    );
}

export default Header;
