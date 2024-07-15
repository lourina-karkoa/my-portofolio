import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-bootstrap'
import { faFacebook, faFacebookF, faInstagram, faLinkedin, faLinkedinIn, faTelegram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className="lk-footer">
   <div className='lk-footer-one'>
    <div className="lk-footer-son">
        <h2 className='lk-footer-h2'>Brife about Me:</h2>
    <h3 className='lk-footer-h3'>I am Lourina Karkoa, 23 years old, a communications and electronics engineer. I have many experiences and i have worked on many projects in front-end developer i trained at focal-x Academy. I have experience in the field of networks. In addition, I am a teacher for children. I have more than 4 years of experience.</h3>
    </div>
   <div className="lk-footer-son">
    <h2 className='lk-footer-h2'>Call Me:</h2>
    <ul className='lk-footer-ul'>
        <li><FontAwesomeIcon className='footer-icon' icon={faPhone} /> +963997507960</li>
        <li><FontAwesomeIcon className='footer-icon' icon={faPhone} /> +963986559071</li></ul>
    </div>
    <div className="lk-footer-son">
    <h2 className='lk-footer-h2'>Follow me:</h2>
        <NavLink className='footer-navlink' href='https://www.facebook.com/lolia.rk.31?mibextid=kFxxJD'><FontAwesomeIcon className='footer-icon' icon={faFacebook} />facebook</NavLink>
        <NavLink className='footer-navlink' href='https://www.linkedin.com/in/lourina-karkoa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><FontAwesomeIcon className='footer-icon' icon={faLinkedin} />linkedin</NavLink>
        <NavLink className='footer-navlink' href='@Lourina_karkoa'><FontAwesomeIcon className='footer-icon' icon={faTelegram} />telegram</NavLink>
        <NavLink className='footer-navlink' href='https://www.instagram.com/lourina_karkoa?igsh=ZTM4ZDRiNzUwMw=='><FontAwesomeIcon className='footer-icon' icon={faInstagram} />instagram</NavLink>
        

    
    </div>


   </div>
   <div className='lk-footer-secound'>
    <p>Copy Right 2024 © By <span className='lk-bold'>Lourina Karkoa</span> All Rights Reserved</p>
   </div>

   </div>
  )
}
