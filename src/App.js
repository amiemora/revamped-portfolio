import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import {useState, useEffect, useCallback} from 'react'
import Footer from './components/footer'
import bootstrap from 'bootstrap'

function App() {



return (
  <div className='App'>
    <header className='header'>
      <img src="https://i.imgur.com/dcbYgL9.jpg[/img]" alt="Avatar" className="avatar"/>
      <button className='nav-btn'>HOME</button>
      <button className='nav-btn'>ABOUT</button>
      <button className='nav-btn'>PROJECTS</button>
      <button className='nav-btn'>CONTACTS</button>
    </header>
    <div className='body'>
      <div className='name'>
        <h1 className='h1-name'>Software Developer</h1>
        <h2 className='brand-statement'>Brand Statement Here</h2>
      </div>
      <div>
        <p>
          lorem ipsum dolor sit amet, consectetur adipiscing el
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip
        </p>
      </div>
    </div>
    <>
    <Footer/>
    </>
    
  </div>

)
}

export default App;
