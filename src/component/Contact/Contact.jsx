import { faEnvelope, faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react'
import './Contact.css'

export default function Contact() {
let contactData=[
    {id:'1',icon:<FontAwesomeIcon className='Contact-icon' icon={faLocationArrow} />,h2:'Address',p:'Al-Thawra Street, Latakia, Syria .'}
    ,{id:'2',icon:<FontAwesomeIcon className='Contact-icon' icon={faEnvelope} />,h2:'Email',p:'lourinalolo675@gmail.com'}
    ,{id:'3',icon:<FontAwesomeIcon className='Contact-icon' icon={faPhone} />,h2:'Phone',p:'+96397507960'}
 ]

 useEffect(()=>{
    AOS.init({duration:"2000"})

  },[])
  return (
    <>
    <div to={"#Contact"} className="lk-content" id="Contact">
        <h2 className="lk-content-h2">Contact Me.</h2>
        <div className="lk-contact-cards">
        {contactData.map(item =>{
            return(
                <>
                <div className='lk-contact-card1' key={item.id} data-aos="fade-up">
                    <div className='lk-contact-father-icon'>{item.icon}</div>
                    <h5 className='lk-contact-card1-h2'>{item.h2}</h5>
                    <p className='lk-contact-card-p'>{item.p}</p>

                </div>
                </>
            )
        })}
        </div>
    </div>
    </>
  )
}
