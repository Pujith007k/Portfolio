
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import Home from'./components/Home'
import About from'./components/About'
import Skills from'./components/Skills'
import Certifications from './components/certifications'
import Work from'./components/Work'
import './App.css';

const App=()=>{
  const [barDetails,setBarDetails]=useState(false)

  const onShowBar = () => {
    setBarDetails((prevState) => !prevState);
  }

  return(
    <BrowserRouter>
    <div>
      <div className="mainContainer">
                <nav className="navBar">
                    <div className="logoAndName">
                        <img className="image" src="https://res.cloudinary.com/dbvonytlq/image/upload/v1723617905/IMG20221029102852_dkkipl.jpg" alt="pujith reddy"/>
                        <h3 className= "nameStyle">Pujith Reddy</h3>
                    </div>
                    <div className="routeDetails">
                        <Link to="/" className="link"><p className="routeLink">Home</p></Link>
                        <Link to="/about" className="link"><p className="routeLink">About</p></Link>
                        <Link to="/skills" className="link"><p className="routeLink">Skills</p></Link>
                        <Link to="/work" className="link"><p className="routeLink">Work</p></Link>
                        <Link to="/certifications" className="link"><p className="routeLink">Certifications</p></Link>
                    </div>
                </nav>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/work" element={<Work />} />
      </Routes>
      </div>
    </div>
    <div>
      <div className="mobileMainContainer">
        <div className="mobileNavBar">
                    <div className="logoAndName">
                        <img className="image" src="https://res.cloudinary.com/dbvonytlq/image/upload/v1723617905/IMG20221029102852_dkkipl.jpg" alt="pujith reddy"/>
                        <h3 className= "nameStyle">Pujith Reddy</h3>
                    </div>
                    <div>
                         < FaBars className="BarIcon" onClick={onShowBar}/>
                    </div>
                  </div>
                    <div className={barDetails?"routeDetailsVisible":"routeDetailsHidden"}>
                        <Link to="/" className="link"><p className="routeLink">Home</p></Link>
                        <Link to="/about" className="link"><p className="routeLink">About</p></Link>
                        <Link to="/skills" className="link"><p className="routeLink">Skills</p></Link>
                        <Link to="/work" className="link"><p className="routeLink">Work</p></Link>
                        <Link to="/certifications" className="link"><p className="routeLink">Certifications</p></Link>
                    </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App;
