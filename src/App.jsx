
import Home from "./assets/components/frontend/Home.jsx"
import About from "./assets/components/frontend/About.jsx"
import Contact from "./assets/components/frontend/Contact.jsx"
import { BrowserRouter, Routes,Route,Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import "./assets/images/images.jpeg"
import "./assets/images/playstore.png"
import "./assets/images/appstore.png"
import "./assets/images/phone.png"
import "./assets/images/mobile.jpeg"
import "./assets/images/camera.png"


function App() {
  

  return (
    <>
       <BrowserRouter>
      <Routes>
             
        <Route path="/" element={<Home/>} />        
        <Route path="/About" element={<About/>} />        
        <Route path="/Contact" element={<Contact/>} />        
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
