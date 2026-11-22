import React from 'react'
import './contact.css'
import msg_icon from '../../assets/assets/msg-icon.png'
import mail_icon from '../../assets/assets/mail-icon.png'
import phone_icon from '../../assets/assets/phone-icon.png'
import location_icon from '../../assets/assets/location-icon.png'
import white_arrow from '../../assets/assets/white-arrow.png'
const Contact = () => {
  return (
    <footer className='contact' id='contact'>
      <div className="contact-call">
        <h3>Send Us An Email
            <img src={msg_icon} alt="" />
        </h3>
        <p>Feel Free to reach out to us</p>
        <ul>
            <li><img src={mail_icon} alt=''/>Student Services Hub: Ground Floor Atrium | Tel: (01321) 2340 237 
                | Email: studentsupport@kaspercollege.ac.uk</li>
            <li><img src={phone_icon} alt="" />IT Service Desk: First Floor LRC | Tel: (01321) 2340 239 
                | Email: ithelpdesk@kaspercollege.ac.uk</li>
            <li><img src={location_icon} alt="" />Students' Union (KCSU): West Wing Lounge 
                | Email: union@kaspercollege.ac.uk</li>
            <li>Main Campus: Kasper College, Main Street, 
                Sheffield, SC4 2BB</li>
        </ul>
      </div>
      <form>
          <label htmlFor="contact-name">Your Name</label>
          <input id="contact-name" type='text' name='name' placeholder='Enter Your Name' required/>
          <label htmlFor="contact-phone">Phone Number</label>
          <input id="contact-phone" type='tel' name='phone' placeholder='Enter Your Number' required/>
          <label htmlFor="contact-email">Email Us</label>
          <textarea id="contact-email" name='email' rows='6' placeholder='Enter Your Email' required/>
          <button type='submit' className='btn dark-btn'>Submit <img src={white_arrow} alt="" /></button>
      </form>
    </footer>
  )
}

export default Contact
