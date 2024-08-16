import React, { useState } from 'react'
import reactPDP from "../../assets/pdp.png"
import './profile-pic.css'

const ShowProfilePic = () => {

  return (
      <img src={reactPDP} alt="" className='pdp-accueil' />
  )

}

export default ShowProfilePic
