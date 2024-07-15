import React, { useEffect, useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import lolo from './../../../public/image/lolo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './About.css'
import { NavLink } from 'react-bootstrap'
export default function About() {

    useEffect(()=>{
      AOS.init({duration:"1500"})

    },[])
    const [value, setValue] = useState(20);

    useEffect(() => {
      const interval = setInterval(() => {
        setValue((prevValue) => {
          if (prevValue >= 92) {
            clearInterval(interval);
            return 92;
        }
        return prevValue + 3;
      });
    }, 100);

    return () => clearInterval(interval); 
  }, []);


  
  const [value2, setValue2] = useState(20);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue2((prevValue) => {
        if (prevValue >= 90) {
          clearInterval(interval);
          return 90;
      }
      return prevValue + 4;
    });
  }, 100);

  return () => clearInterval(interval); 
}, []);


const [value3, setValue3] = useState(20);

useEffect(() => {
  const interval = setInterval(() => {
    setValue3((prevValue) => {
      if (prevValue >= 80) {
        clearInterval(interval);
        return 80;
    }
    return prevValue + 3;
  });
}, 100);

return () => clearInterval(interval); 
}, []);


const [value4, setValue4] = useState(20);

useEffect(() => {
  const interval = setInterval(() => {
    setValue4((prevValue) => {
      if (prevValue >= 85) {
        clearInterval(interval);
        return 85;
    }
    return prevValue + 4;
  });
}, 100);

return () => clearInterval(interval); 
}, []);


const [value5, setValue5] = useState(20);

useEffect(() => {
  const interval = setInterval(() => {
    setValue5((prevValue) => {
      if (prevValue >= 90) {
        clearInterval(interval);
        return 90;
    }
    return prevValue + 3;
  });
}, 100);

return () => clearInterval(interval); 
}, []);



const [value6, setValue6] = useState(20);

useEffect(() => {
  const interval = setInterval(() => {
    setValue6((prevValue) => {
      if (prevValue >= 88) {
        clearInterval(interval);
        return 88;
    }
    return prevValue + 5;
  });
}, 100);

return () => clearInterval(interval); 
}, []);
  return (
    <>
   
    <div className='lk-about'>
        <div className='lk-about-div-img'  data-aos="fade-down"><img className='lk-about-img' src={lolo}/></div>

        <div className='lk-about-son1' data-aos="fade-up" >
            <h2>About Me</h2>
            <p>WEB DEVELOPER</p>
            <p>I am  <span className='lk-name'> Lourina Karkoa </span>I am a front-end developer trainee -  and a Communications and electronics engineer💻
            I speak English at advance level I have experience in front-end development with fully Responsive and I work with the react.js framework
            </p>
            <div className='skills' style={{ position: 'relative', width: '100%', height: '30px', backgroundColor: 'white' }}>
      <div className=''
        style={{
          width: `${value}%`,
          height: '100%',
          backgroundColor: '#000',
          transition: 'width 0.1s ease-in-out',
          position: 'relative',
          borderRadius:'10px',
        }}
      >
        <span className='skills-p'>HTML</span>
        <span
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'white',
          }}
        >
          {value}%
        </span>
      </div>
    </div>

    <div className='skills' style={{ position: 'relative', width: '100%', height: '30px', backgroundColor: 'white' }}>
      <div className=''
        style={{
          width: `${value2}%`,
          height: '100%',
          backgroundColor: '#000',
          transition: 'width 0.1s ease-in-out',
          position: 'relative',
          borderRadius:'10px',
        }}
      >
        <span className='skills-p'>CSS</span>
        <span
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'white',
          }}
        >
          {value2}%
        </span>
      </div>
    </div>

    <div className='skills' style={{ position: 'relative', width: '100%', height: '30px', backgroundColor: 'white' }}>
      <div className=''
        style={{
          width: `${value4}%`,
          height: '100%',
          backgroundColor: '#000',
          transition: 'width 0.1s ease-in-out',
          position: 'relative',
          borderRadius:'10px',
        }}
      >
        <span className='skills-p'>BootStrap</span>
        <span
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'white',
          }}
        >
          {value4}%
        </span>
      </div>
    </div>


    <div className='skills' style={{ position: 'relative', width: '100%', height: '30px', backgroundColor: 'white' }}>
      <div className=''
        style={{
          width: `${value3}%`,
          height: '100%',
          backgroundColor: '#000',
          transition: 'width 0.1s ease-in-out',
          position: 'relative',
          borderRadius:'10px',
        }}
      >
        <span className='skills-p'>JS</span>
        <span
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'white',
          }}
        >
          {value3}%
        </span>
      </div>
    </div>

   
    <div className='skills' style={{ position: 'relative', width: '100%', height: '30px', backgroundColor: 'white' }}>
      <div className=''
        style={{
          width: `${value5}%`,
          height: '100%',
          backgroundColor: '#000',
          transition: 'width 0.1s ease-in-out',
          position: 'relative',
          borderRadius:'10px',
        }}
      >
        <span className='skills-p'>React JS</span>
        <span
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'white',
          }}
        >
          {value5}%
        </span>
      </div>
    </div>

    <div className='skills' style={{ position: 'relative', width: '100%', height: '30px', backgroundColor: 'white' }}>
      <div className=''
        style={{
          width: `${value6}%`,
          height: '100%',
          backgroundColor: '#000',
          transition: 'width 0.1s ease-in-out',
          position: 'relative',
          borderRadius:'10px',
        }}
      >
        <span className='skills-p'>Git & GitHub</span>
        <span
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'white',
          }}
        >
          {value6}%
        </span>
      </div>
    </div>

   
   <NavLink className='lk-about-buttons' href='https://www.linkedin.com/in/lourina-karkoa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><button className='lk-about-button'>Contact Me</button></NavLink> 


        </div>


       


    </div>
    
    </>
  )
}
