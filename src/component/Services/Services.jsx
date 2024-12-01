import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop } from '@fortawesome/free-solid-svg-icons/faDesktop'
import { faBullhorn, faCamera, faTv, faUmbrella } from '@fortawesome/free-solid-svg-icons'
import { faGem } from '@fortawesome/free-regular-svg-icons'
import AOS from "aos";
import "aos/dist/aos.css";
import './Services.css'




export default function Services() {
    useEffect(()=>{
        AOS.init({duration:"2000"})
  
      },[])
    let dataCard=[
        {id:'1',icon:<FontAwesomeIcon className='service-icon' icon={faDesktop} />,h2:'Web Design',p:'Web design refers to the design of websites. It usually refers to the user experience aspects of website development rather than software development. Web design used to be focused on designing websites for desktop browsers .'}
       ,{id:'2',icon:<FontAwesomeIcon className='service-icon' icon={faBullhorn} />,h2:'Branding',p:'Your brand is more than just a logo or a catchy tagline; it reflects your expertise, values, and unique perspective in front-end development. It sets you apart from the crowd and establishes your credibility .'}
       ,{id:'3',icon:<FontAwesomeIcon className='service-icon' icon={faUmbrella} />,h2:'Development',p:'development in frontend refers to the structured approach to designing, coding, testing, and maintaining the user interface and user experience aspects of a web application or website.'}
       ,{id:'4',icon:<FontAwesomeIcon className='service-icon' icon={faGem} />,h2:'Creative Design',p:'Process creative design in frontendrefers to the methodology and steps involved in the conceptualization, planning, and execution of the visual and interactive aspects of a web application or website.'}
       ,{id:'5',icon:<FontAwesomeIcon className='service-icon' icon={faTv} />,h2:'Fully Responsive',p:'refers to the design that ensures a website or web application looks and functions well across a wide range of devices and screen sizes, including desktops, laptops, tablets, and smartphones.'}
       ,{id:'6',icon:<FontAwesomeIcon className='service-icon' icon={faCamera} />,h2:'Retina Ready',p:'process that ensures a website or web application appears clear, and visually appealing on devices with high-resolution (retina) displays. Retina displays, have a higher pixel density  than standard displays,'}
    ]
  return (
    <>
    <div to={'#Services'} className="lk-services" id="Services">
        <h2 className="lk-services-h2">Services.</h2>
        <div className='lk-serv-cards'>
        {dataCard.map(item =>{
            return(
                <>
                <div className='lk-serv-card1' key={item.id} data-aos="zoom-in-right">
                    <div className='lk-serv-father-icon'>{item.icon}</div>
                    <h2 className='lk-serv-card1-h2'>{item.h2}</h2>
                    <p className='lk-serv-card-p'>{item.p}</p>

                </div>
                </>
            )
        })}

        </div>
    </div>
    </>
  )
}
