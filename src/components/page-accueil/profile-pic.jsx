import React, { useState } from 'react'
import pdpAccueil from "../../assets/pdp.png"
import './page-accueil.css'

const ShowProfilePic = ({theme}) => {

  return (
    <img src={pdpAccueil} alt="" className={`pdp-accueil ${theme === 'dark' ? 'dark' : 'light'}`} />
  )

}

export default ShowProfilePic
