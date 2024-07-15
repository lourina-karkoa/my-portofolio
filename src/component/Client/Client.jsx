import React, { useEffect, useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn, faCloudArrowDown, faThumbsUp, faUsers } from '@fortawesome/free-solid-svg-icons'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import './Client.css'

export default function Client() {

  useEffect(()=>{
    AOS.init({duration:"2000"})

  },[])

    const [counteron,setCounteron] =useState(false)

  return (
   <ScrollTrigger onEnter={()=>{setCounteron(true)}} onExit={()=>{setCounteron(false)}}>
   <div className="lk-client">
    <div className="lk-client-son1" data-aos="zoom-in-up">
   <FontAwesomeIcon className='lk-clint-icon'  icon={faUsers} />
   <div className='lk-client-number'>
  {counteron && <CountUp start={0} end={100} duration={2} delay={0}/>}</div>
   <h3 className='lk-client-h3'>Happy Customers</h3>
   </div>
   <div className="lk-client-son1" data-aos="zoom-in-up">
   <FontAwesomeIcon className='lk-clint-icon'  icon={faThumbsUp} />
   <div className='lk-client-number'>
  {counteron && <CountUp start={1} end={160} duration={2} delay={0}/>}</div>
   <h3 className='lk-client-h3'>Complete Projects</h3>
   </div>
   <div className="lk-client-son1" data-aos="zoom-in-down">
   <FontAwesomeIcon className='lk-clint-icon'  icon={faBullhorn}/>
   <div className='lk-client-number'>
  {counteron && <CountUp start={1} end={90000} duration={20} delay={0}/>}</div>
   <h3 className='lk-client-h3'>Lines Of Code</h3>
   </div>
   <div className="lk-client-son1" data-aos="zoom-in-down">
   <FontAwesomeIcon className='lk-clint-icon' icon={faCloudArrowDown}/>
   <div className='lk-client-number'>
  {counteron && <CountUp start={1} end={750} duration={5} delay={0}/>}</div>
   <h3 className='lk-client-h3'>Files Downloaded</h3>
   </div>
   </div>
   </ScrollTrigger>
  )
}
