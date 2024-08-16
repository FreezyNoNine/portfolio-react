import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import ProfilePic from './components/page-accueil/profile-pic'

const App = () => {

  const [theme, setTheme] = useState('light');

  return (
    <div className={`full-container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <ProfilePic />
    </div>
  )
}

export default App
