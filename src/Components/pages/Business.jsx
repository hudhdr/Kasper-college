import React from 'react'
import './Business.css'
import darkArrow from '../../assets/assets/dark-arrow.png'
import create from '../../assets/building4.jpg'
import explore from '../../assets/building1.jpg'
import learn from '../../assets/building2.jpg'

const Business = () => {
  return (
    <main className='business-page'>
      <header className='business-hero'>
        <div className='business-text'>
          <h1>Kasper College</h1>
          <p>Partner with Kasper College: Innovation, Talent & Enterprise Solutions</p>
          <p>Executive Introduction & Partnership Philosophy
At Kasper College, we firmly believe in the transformative power of collaboration between higher education and industry. Our college offers a comprehensive ecosystem of enterprise services engineered to accelerate business growth, bridge technical skills shortages, and drive forward-looking innovation across computing, cybersecurity, digital media, and product design.
</p>
          <a className='btn business-btn' href='#business-details'>
            Comprehensive Business & Enterprise Services
            <img src={darkArrow} alt='' aria-hidden='true' />
          </a>
        </div>
      </header>

      <div className='business-section'>
        <section className='business-row'>
          <div className='business-left'>
            <img
              src={explore}
              alt=''
              className='business-img'
              loading='lazy'
            />
          </div>
          <div className='business-right'>
            <h2 id='explore-heading'>Explore</h2>
            <p>
Upskill and empower your workforce with industry-accredited technical training tailored precisely to your strategic tech stack and organizational needs.
•	Customizable Modules: Executive cybersecurity awareness, cloud infrastructure (AWS/Azure), full-stack modern web engineering, data analytics, AI & machine learning deployment, and UI/UX design systems.
•	Flexible Delivery Modes: On-site corporate masterclasses, evening executive sprints, fully remote online modules, and hybrid blended cohorts.
•	Certification: Accredited CPD certifications and micro-credentials issued upon module completion.

            </p>
          </div>
        </section>

        <section className='business-row'>
          <div className='business-left'>
            <img
              src={learn}
              alt=''
              className='business-img'
              loading='lazy'
            />
          </div>
          <div className='business-right'>
            <h2>Devlopment</h2>
            <h3>Research & Development (R&D) Collaborations</h3>
            <p>Leverage the expertise of our academic researchers, PhD candidates, and advanced computing laboratories to solve complex engineering challenges and accelerate product development.</p>
            <p>•	Knowledge Transfer Partnerships (KTP): Government-subsidized partnerships embedding a high-caliber graduate specialist directly inside your business supervised by senior Kasper College faculty.
•	Proof-of-Concept & Prototyping: Rapid development of minimum viable products (MVPs), hardware prototypes, and algorithmic proofs using our 3D fabrication labs and GPU clusters.
•	Grant Application Assistance: Collaborative bidding for Innovate UK, EPSRC, and Horizon Europe technical research grants.
</p>
          </div>
        </section>

        <section className='business-row'>
          <div className='business-left'>
            <img
              src={create}
              alt=''
              className='business-img'
              loading='lazy'
            />
          </div>
          <div className='business-right'>
            <h2 id='campus-life-heading'>Internships</h2>
            <h3>Internships, Placements & Graduate Talent Recruitment</h3>
            <p>
              Connect directly with our motivated, highly skilled student body across undergraduate and postgraduate programmes
            </p>
            <p>•	Year-in-Industry Placements: Hire enthusiastic 3rd-year computing and design undergraduates for 9 to 12-month full-time placements.
•	Summer Internship Programme: Host 6 to 12-week focused project interns during the summer break.
•	Direct Graduate Hiring Portal: Zero-fee job posting on the Kasper College Career Hub, reaching hundreds of final-year students and recent alumni.
•	Annual Kasper Tech & Creative Careers Fair: Showcase your brand and conduct on-the-spot initial interviews at our flagship autumn recruitment expo.
</p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Business