import React, { useEffect, useState } from 'react'
import './Testi.css'
import next_icon from '../../assets/assets/next-icon.png'
import back_icon from '../../assets/assets/back-icon.png'
import user_1 from '../../assets/assets/user-1.png'
import user_2 from '../../assets/assets/user-2.png'
import user_3 from '../../assets/assets/user-3.png'
import user_4 from '../../assets/assets/user-4.png'

const Testimonials = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(
    window.matchMedia('(max-width: 800px)').matches
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 800px)')
    const updateLayout = (event) => {
      setIsMobile(event.matches)
      setSlideIndex(0)
    }

    mediaQuery.addEventListener('change', updateLayout)
    return () => mediaQuery.removeEventListener('change', updateLayout)
  }, [])

  const maxSlideIndex = isMobile ? 3 : 2

  const showNext = () => {
    setSlideIndex((current) => Math.min(current + 1, maxSlideIndex))
  }

  const showBack = () => {
    setSlideIndex((current) => Math.max(current - 1, 0))
  }

  const slideOffset = slideIndex * (isMobile ? -12.5 : -25)

  return (
    <div className='testi'>
      <img
        src={next_icon}
        alt='Next testimonials'
        className='next-btn'
        onClick={showNext}
      />
      <img
        src={back_icon}
        alt='Previous testimonials'
        className='back-btn'
        onClick={showBack}
      />
      <div className='slider'>
        <ul style={{ transform: `translateX(${slideOffset}%)` }}>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_1} alt=''/>
                <div>
                  <h3>William Smith</h3>
                  <span>Kasper College, United Kingdom</span>
                </div>
              </div>
              <p>I chose this College to pursue my qualifications. Kasper College was one of the best decisions I have ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence made me truly value my time here.</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_2} alt=''/>
                <div>
                  <h3>Willam Smith</h3>
                  <span>Kasper College, Uk</span>
                </div>
              </div>
              <p>Kasper College gave me the confidence and skills I needed for my future. My lecturers were supportive, the facilities were excellent, and I always felt like part of a welcoming community.</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_3} alt=''/>
                <div>
                  <h3>James Wilson</h3>
                  <span>Kasper College, Uk</span>
                </div>
              </div>
              <p>Studying at Kasper College was an experience that helped me grow both academically and personally. The practical teaching and friendly staff made every challenge manageable.</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_4} alt=''/>
                <div>
                  <h3>Jamie Brown</h3>
                  <span>Kasper College, Uk</span>
                </div>
              </div>
              <p>I appreciated the balance of independent learning and personal support at Kasper College. My course prepared me for a career and gave me opportunities to make lasting friendships.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
