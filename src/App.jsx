import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar/Navbar';
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import Navbarr from './component/Navbar/Navbar';
import About from './component/About/About';
import Work from './component/Works/Work';
import Services from './component/Services/Services';
import Client from './component/Client/Client';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';


function App() {


  return (
    <>

    <Navbarr />
    <About />
    <Services />
    <Work />
    <Client />
    <Contact />
    <Footer />

    </>
  )
}

export default App
