import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import PageAccueil from './components/page-accueil/page-accueil'

const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <div className={`full-container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <PageAccueil theme={theme}/>
    </div>
  )
}

export default App
