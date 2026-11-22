import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Kasper College</h1>
        <p>Explore Kasper College: World-Class Facilities, Vibrant Student Life, 
          and Support for Your Success</p>
          <button className='btn'>Explore More <img src={dark_arrow} alt=""/></button>
      </div>
    </div>
  )
}

export default Hero
