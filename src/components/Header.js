import React from "react"
import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
export default function Header() {
    const [openMenu, setOpenMenu] = useState(false)
    
    

    return (
        
        <header className="body-nav">
        
        <nav className="nav-nav">
            <ul class='nav-bar'>
                <input type='checkbox' id='check' />
                <span className="menu">
                    <li><a href="" className="nav-txt">Home</a></li>
                    <li><a href="" className="nav-txt">Projects</a></li>
                    <li><a href="" className="nav-txt">Resume</a></li>
                    <li><a href="" className="nav-txt">About</a></li>
                    <li><a href="" className="nav-txt">Contact</a></li>
                    <label for="check" className="close-menu"><i class="fas fa-times"></i></label>
                </span>
                <label for="check" className="open-menu"><i className="fas fa-bars"></i></label>
            </ul>
        </nav>
        </header>
    )
}

