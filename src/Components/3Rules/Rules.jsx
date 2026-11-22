import React from 'react'
import './Rules.css'
import rules1_img from '../../assets/building1.jpg'
import rules2_img from '../../assets/building2.jpg'
import rules3_img from '../../assets/building3.jpg'
const rules = () => {
  return (
    <div className='rules'>
      <section className='rule-row'>
        <div className="rules-left">
          <img src={rules1_img} alt="" className='rules-img'/>
        </div>
        <div className="rules-right">
          <h3>Explore</h3>
          <p>At Kasper College, we are committed
          to providing our students with an inspiring, supportive, and cutting-edge environment to learn, create, innovate, and thrive. Our state-of-the-art campus in Sheffield has been purposefully designed to cater to the demands of modern computing, creative design, digital media, and networking disciplines. Whether you are building distributed systems, analyzing cyber threats, crafting immersive video games, or designing sustainable interior spaces, Kasper College provides the infrastructure and community you need to excel.</p>
        </div>
      </section>

      <section className='rule-row'>
        <div className="rules-left">
          <img src={rules2_img} alt="" className='rules-img'/>
        </div>
        <div className="rules-right">
          <h3>Learn</h3>
          <h2>Advanced Computing Laboratories</h2>
          <p>Our high-performance computing labs are equipped with high-specification multi-core workstations, dual-screen setups, and high-end NVIDIA RTX graphics cards. Systems are configured with dual-boot Linux and Windows environments loaded with industry-standard development toolchains, including Visual Studio, JetBrains All Products Pack, Docker, Kubernetes, MATLAB, and specialized data science libraries</p>
        </div>
      </section>

      <section className='rule-row'>
        <div className="rules-left">
          <img src={rules3_img} alt="" className='rules-img'/>
        </div>
        <div className="rules-right">
          <h3>Create</h3>
          <h2>Creative Design & Digital Media Studios</h2>
          <p>Filled with natural light and designed for open collaboration, our design studios feature 27-inch 5K Apple iMacs, Wacom Cintiq 24 Pro interactive pen displays, color-calibrated monitors, and large-format printing equipment. Every workstation has full access to the complete Adobe Creative Cloud suite, Cinema 4D, and Figma.</p>
        </div>
      </section>
    </div>
  )
}

export default rules
