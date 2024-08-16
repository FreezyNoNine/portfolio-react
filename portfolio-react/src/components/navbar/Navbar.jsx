import React from 'react'
import './Navbar.css'
import logo_light from '../../assets/logo-b.png'
import logo_dark from '../../assets/logo-w.png'
import search_icon_light from '../../assets/loupe-b.png'
import search_icon_dark from '../../assets/loupe-w.png'
import toggle_day from '../../assets/night.png'
import toggle_night from '../../assets/day.png'


const Navbar = ({theme, setTheme}) => {

    const toggle_mode = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light');
    }

  return (
    <div className={`navbar-container ${theme}`}>

        <img src={theme == 'light' ? logo_light : logo_dark} alt="" className='navbar-logo'/>

        <ul className={`ul-container ${theme}`}>
            <li>Accueil</li>
            <li>Présentation</li>
            <li>Curriculum Vitae</li>
            <li>Projets</li>
            <li>Compétences Techniques</li>
            <li>Stages</li>
            <li>Activités Professionnelles</li>
            <li>Blog ou Articles</li>
            <li>Contact</li>
            <li>Références</li>
        </ul>

        <div className={`search-box-container ${theme}`}>
            <input type="text" placeholder='Rechercher..'/>
            <img src={theme == 'light' ? search_icon_light : search_icon_dark} alt="" className='search-icone'/>
        </div>

        <img onClick={() => {toggle_mode()}} src={theme == 'light' ? toggle_day : toggle_night} alt="" className='activer-icone'/>

    </div>
  )
}

export default Navbar
