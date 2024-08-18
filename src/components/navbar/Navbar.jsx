import React, { useState } from 'react';
import './Navbar.css';
import logo_light from '../../assets/logo-b.png';
import logo_dark from '../../assets/logo-w.png';
import search_icon_light from '../../assets/loupe-b.png';
import search_icon_dark from '../../assets/loupe-w.png';
import toggle_day from '../../assets/night.png';
import toggle_night from '../../assets/day.png';
import { NavLink } from 'react-router-dom';

const Navbar = ({ theme, setTheme }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggle_mode = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={`navbar-container ${theme}`}>
            <img src={theme === 'light' ? logo_light : logo_dark} alt="" className='navbar-logo' />

            <div className="menu-wrapper">
                <button className={`menu-toggle ${theme}`} onClick={toggleMenu}>
                    {menuOpen ? '✖' : '☰'}
                </button>
                
                <ul className={`ul-container ${theme} ${menuOpen ? 'open' : ''}`}>
                    <li><NavLink to="/">Accueil</NavLink></li>
                    <li><NavLink to="/presentation">Présentation</NavLink></li>
                    <li><NavLink to="/cv">Curriculum Vitae</NavLink></li>
                    <li><NavLink to="/projets">Projets</NavLink></li>
                    <li><NavLink to="/competences">Compétences Techniques</NavLink></li>
                    <li><NavLink to="/stages">Stages</NavLink></li>
                    <li><NavLink to="/experience">Activités Professionnelles</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/references">Réferences</NavLink></li>
                </ul>
            </div>

            <div className={`search-box-container ${theme}`}>
                <input type="text" placeholder='Rechercher..' />
                <img src={theme === 'light' ? search_icon_light : search_icon_dark} alt="" className='search-icone' />
            </div>

            <img onClick={toggle_mode} src={theme === 'light' ? toggle_day : toggle_night} alt="" className='activer-icone' />
        </div>
    );
};

export default Navbar;
