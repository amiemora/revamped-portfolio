
import "./App.css"
import React from 'react'
import Footer from "./components/Footer"
import Feed from "./components/Feed"
import About from  "./components/About"
import Projects from  "./components/Projects"
import Resume from  "./components/Resume"
import Contact from  "./components/Contact"
import { useState } from "react"


function App() {
// create states for button to show & hide
const [displayHome, setHomeDisplay] = useState(true)
const [displayProjects, setProjectsDisplay] = useState(false)
const [displayResume, setResumeDisplay] = useState(false)
const [displayAbout, setAboutDisplay] = useState(false)
const [displayContact, setContactDisplay] = useState(false)

const showHome = () => {
  setHomeDisplay(true)
  setProjectsDisplay(false)
  setResumeDisplay(false)
  setAboutDisplay(false)
  setContactDisplay(false)
}

const showProjects= () => {
  setProjectsDisplay(true)
  setHomeDisplay(false)
  setResumeDisplay(false)
  setAboutDisplay(false)
  setContactDisplay(false)
}

const showResume = () => {
  setResumeDisplay(true)
  setHomeDisplay(false)
  setProjectsDisplay(false)
  setAboutDisplay(false)
  setContactDisplay(false)
}

const showAbout = () => {
  setAboutDisplay(true)
  setHomeDisplay(false)
  setProjectsDisplay(false)
  setResumeDisplay(false)
  setContactDisplay(false)
}

const showContact = () => {
  setContactDisplay(true)
  setHomeDisplay(false)
  setProjectsDisplay(false)
  setResumeDisplay(false)
  setAboutDisplay(false)
}


return (
  <div className="container">
         <header className="body-nav">
        
        <nav className="nav-nav">
            <ul class='nav-bar'>
                <input type='checkbox' id='check' />
                <span className="menu">
                    <li><a  onClick={showHome} className="nav-txt">Home</a></li>
                    <li><a onClick={showProjects} className="nav-txt">Projects</a></li>
                    <li><a onClick={showResume}  className="nav-txt">Resume</a></li>
                    <li><a onClick={showAbout}  className="nav-txt">About</a></li>
                    <li><a onClick={showContact}  className="nav-txt">Contact</a></li>
                    <label for="check" className="close-menu"><i class="fas fa-times"></i></label>
                </span>
                <label for="check" className="open-menu"><i className="fas fa-bars"></i></label>
            </ul>
        </nav>
        </header>
    <div className="body-content">
      {displayHome ? <Feed/> : null}
      {displayAbout ?  <About /> : null}
      {displayContact ? <Contact /> : null}
      {displayProjects ? <Projects /> : null}
      {displayResume ? <Resume /> : null}
    </div>
   <Footer/>
  </div>
)
}

export default App;
