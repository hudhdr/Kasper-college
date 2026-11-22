import React from 'react'
import './About.css'
import darkArrow from '../../assets/assets/dark-arrow.png'
import create from '../../assets/building4.jpg'
import explore from '../../assets/building1.jpg'
import learn from '../../assets/building2.jpg'

const About = () => {
  return (
    <main className='about-page'>
      <header className='about-hero'>
        <div className='about-text'>
          <h1>Kasper College</h1>
          <p>About Kasper College</p>
          <a className='btn about-btn' href='#About-details'>
            Explore More
            <img src={darkArrow} alt='' aria-hidden='true' />
          </a>
        </div>
      </header>

      <div className='about-section' id='About-details'>
        <section className='about-row'>
          <div className='about-left'>
            <img
              src={explore}
              alt=''
              className='about-img'
              loading='lazy'
            />
          </div>
          <div className='about-right'>
            <h2 id='explore-heading'>Explore</h2>
            <p>
              Kasper College offers an inspiring, supportive, and modern environment
              for students to learn, create, innovate, and thrive. Our Sheffield
              campus is designed for computing, creative design, digital media, and
              networking. From building distributed systems to designing immersive
              games and sustainable interiors, students have the facilities and
              community they need to excel.
            </p>
          </div>
        </section>

        <section className='about-row'>
          <div className='about-left'>
            <img
              src={learn}
              alt=''
              className='about-img'
              loading='lazy'
            />
          </div>
          <div className='about-right'>
            <h2 id='support-heading'>Learn</h2>
            <h3>Comprehensive Student Support &amp; Wellbeing</h3>
            <p>Students can access pastoral and academic guidance throughout their studies:</p>
            <ul>
              <li><p>Academic advising: A dedicated Personal Tutor offers regular progress reviews and mentoring.</p></li>
              <li><p>Mental health and counselling: Confidential counselling, mindfulness workshops, and crisis support are available in person and online.</p></li>
              <li><p>Accessibility and neurodiversity: Individual support plans, assistive software, exam adjustments, and specialist study-skills support.</p></li>
              <li><p>Finance and hardship support: Advice on loans, budgeting, scholarships, bursaries, and emergency assistance.</p></li>
            </ul>
          </div>
        </section>

        <section className='about-row'>
          <div className='about-left'>
            <img
              src={create}
              alt=''
              className='about-img'
              loading='lazy'
            />
          </div>
          <div className='about-right'>
            <h2 id='campus-life-heading'>Create</h2>
            <h3>Kasper College Students' Union (KCSU) &amp; Campus Life</h3>
            <p>
              Run by students, the KCSU represents the student voice and organises
              social, academic, and recreational events throughout the year.
            </p>
            <ul>
              <li><p>Student societies: Join groups for computing, cyber defence, game development, design, robotics, esports, and outdoor activities.</p></li>
              <li><p>Hackathons and game jams: The annual Kasper Winter Hackathon brings student coders and designers together to build and compete.</p></li>
              <li><p>Student representation: Elected course and department representatives work with faculty to improve courses.</p></li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}

export default About