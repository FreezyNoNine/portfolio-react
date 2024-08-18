import React, { useState } from 'react'
import './page-accueil.css'

const ShowTitleNom = ({theme}) => {

  return (
    <div>
      <h1 className={`title-prenom ${theme === 'dark' ? 'dark' : 'light'}`}>JIBRIL</h1>
      <h1 className={`title-nom ${theme === 'dark' ? 'dark' : 'light'}`}>RACHEDI</h1>
    </div>
  )

}

export default ShowTitleNom