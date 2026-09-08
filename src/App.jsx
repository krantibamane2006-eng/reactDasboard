import React from 'react'
import{BrowserRouter,Routes,Route} from'react-router-dom'
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Contact from "./components/pages/contact/Contact";
import Services from "./components/pages/services/Services";
import Navbar from './components/navbar/Navbar';




const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>

<Route path="/"element={<Home/>} />
<Route path="/about"element={<About/>} />
<Route path="/services"element={<Services/>} />
<Route path="/contact"element={<Contact/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

