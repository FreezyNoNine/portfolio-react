import React from 'react'
import ShowProfilePic from './profile-pic'
import ShowTitleNom from './title-nom'
import './page-accueil.css'

const PageAccueil = ({theme}) => {
  return (
    <div className="accueil-container">
      <ShowProfilePic theme={theme} />
      <ShowTitleNom theme={theme} />
    </div>
  )
}

export default PageAccueil
