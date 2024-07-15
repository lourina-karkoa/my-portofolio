import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AOS from "aos";
import "aos/dist/aos.css";
import './Work.css'
import task1 from './../../../public/tasks/task1.png'
import task2 from './../../../public/tasks/task2.png'
import task3 from './../../../public/tasks/task3.png'
import task4 from './../../../public/tasks/task4.png'
import task5 from './../../../public/tasks/task5.jpg'
import task6 from './../../../public/tasks/task6.png'
import task7 from './../../../public/tasks/task7.png'
import task8 from './../../../public/tasks/task8.png'
import task9 from './../../../public/tasks/task9.png'
import task10 from './../../../public/tasks/task10.png'
import task11 from './../../../public/tasks/task11.png'
import task12 from './../../../public/tasks/task12.png'
import task16 from './../../../public/tasks/task16.png'
import task17 from './../../../public/tasks/task17.png'
import { NavLink } from 'react-bootstrap'
import { faLink } from '@fortawesome/free-solid-svg-icons'
export default function Work() {

  let tasks =[
    {id:'1',img:task1,linkto:' https://lourina-karkoa.github.io/task2/',icon:<FontAwesomeIcon className='img-icon' icon={faLink} />,category:'task'},
    {id:'2',img:task2,linkto:' https://lourina-karkoa.github.io/task3/',icon:<FontAwesomeIcon className='img-icon' icon={faLink} />,category:'task'},
    {id:'3',img:task3,linkto:'https://lourina-karkoa.github.io/task4/',icon:<FontAwesomeIcon className='img-icon' icon={faLink} />,category:'task'},
    {id:'4',img:task4,linkto:'https://lourina-karkoa.github.io/task5/',icon:<FontAwesomeIcon className='img-icon' icon={faLink} />,category:'task'},
    {id:'5',img:task5,linkto:'https://lourina-karkoa.github.io/task6/',icon:<FontAwesomeIcon className='img-icon' icon={faLink} />,category:'task'},
    {id:'6',img:task6,linkto:'https://lourina-karkoa.github.io/task7/',icon:<FontAwesomeIcon className='img-icon' icon={faLink} />,category:'task'},
    {id:'7',img:task7,linkto:'https://lourina-karkoa.github.io/task8/',icon:<FontAwesomeIcon className='img-icon' icon={faLink} />,category:'task'},
    {id:'8',img:task8,linkto:'https://lourina-karkoa.github.io/task9/',icon:<FontAwesomeIcon className='img-icon' icon={faLink} />,category:'task'},
    {id:'9',img:task9,linkto:'https://lourina-karkoa.github.io/Bakery/',icon:<FontAwesomeIcon className='img-icon' icon={faLink} />,category:'ME'},
    {id:'10',img:task10,linkto:'https://lourina-karkoa.github.io/calcolater/',icon:<FontAwesomeIcon className='img-icon' icon={faLink} />,category:'ME'},
    {id:'11',img:task11,linkto:'https://lourina-karkoa.github.io/restorant/',icon:<FontAwesomeIcon className='img-icon' icon={faLink} />,category:'other'},
    {id:'12',img:task12,linkto:'https://lourina-karkoa.github.io/computer-bootstrap/',icon:<FontAwesomeIcon className='img-icon' icon={faLink} />,category:'other'},
    {id:'13',img:task16,linkto:'https://lourina-karkoa.github.io/dahpord-localStorg/',icon:<FontAwesomeIcon className='img-icon' icon={faLink} />,category:'other'},
    {id:'14',img:task17,linkto:'https://lourina-karkoa.github.io/animation/',icon:<FontAwesomeIcon className='img-icon' icon={faLink} />,category:'ME'},
  ]

  useEffect(()=>{
    AOS.init({duration:"1500"})

  },[])
  const [lkchangeO, setlkchangeO] = useState(false);
  const [lkchangeS, setlkchangeS] = useState(true);
  const [lkchangeTH, setlkchangeTH] = useState(true);
  const [lkchangeFO, setlkchangeFO] = useState(true);

  function LKchangshapO() {
      setlkchangeO(!lkchangeO);
  }

  function LKchangshapS() {
      setlkchangeS(!lkchangeS);
  }

  function LKchangshapTH() {
      setlkchangeTH(!lkchangeTH);
  }

  function LKchangshapFO() {
      setlkchangeFO(!lkchangeFO);
  }



  useEffect(() => {
      if (lkchangeO === false) {
          setlkchangeS(true);
          setlkchangeTH(true);
          setlkchangeFO(true);
      }
  }, [lkchangeO]);

  useEffect(() => {
      if (lkchangeS=== false) {
          setlkchangeO(true);
          setlkchangeTH(true);
          setlkchangeFO(true);
      }
  }, [lkchangeS]);

  useEffect(() => {
      if (lkchangeTH === false) {
        setlkchangeO(true);
        setlkchangeS(true);
        setlkchangeFO(true);
      }
  }, [lkchangeTH]);

  useEffect(() => {
      if (lkchangeFO=== false) {
        setlkchangeTH(true);
        setlkchangeS(true);
        setlkchangeO(true);
      }
  }, [lkchangeFO]);


  const [item ,setItem] =useState(tasks)
  const filterItems =(catItem)=>{
    const updateItems =tasks.filter((curItem)=>{
      return curItem.category === catItem
    })
    setItem(updateItems)
  }
  return (
    <>
    <div className='lk-portofolio'>
        <h2  className='lk-portofolio-h2'>Portfolio.</h2>
        <div className='lk-portofolio-buttons'>
        <button onClick={()=>{LKchangshapO();setItem(tasks)}} className={lkchangeO ? 'lk-portofolio-button' : 'lk-portofolio-cover'}>ALL</button>
        <button onClick={()=>{LKchangshapS();filterItems("task")}} className={lkchangeS ? 'lk-portofolio-button' : 'lk-portofolio-cover'}>Tasks</button>
        <button onClick={()=>{LKchangshapTH();filterItems("ME")}} className={lkchangeTH ? 'lk-portofolio-button' : 'lk-portofolio-cover'}>My Broject</button>
        <button onClick={()=>{LKchangshapFO();filterItems("other")}} className={lkchangeFO ? 'lk-portofolio-button' : 'lk-portofolio-cover'}>Others</button>
        </div>

        <div className="lk-work-cards">
          {item.map(item =>{
            return(
              <div className='lk-work-card-task' key={item.id} data-aos="zoom-in">
                <NavLink className='lk-link-img' href={item.linkto}>
                <img className='lk-card-task-img'  src={item.img}/>
                <div className='lk-img-adding'><p>click to move {item.icon}</p></div>
                </NavLink>
              </div>
            )
          })}


        </div>
    </div>
    </>
  )
}
// onMouseEnter={potcover}  className={cover ? 'lk-card-task-img' : 'lk-work-card-task-add'} 
