import React from 'react'
import './HeroSection.css'
import img from './images/heroSectionLogo.png'





function HeroSection() {
  return (
    <div className='hero-container'>
        <div className="image-container"> 
            <img className="andrometaLogo" src={img} alt="" />
        </div>

    </div>
  )
}

export default HeroSection
