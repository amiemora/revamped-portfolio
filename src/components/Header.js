import React from "react"
import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
export default function Header() {
    const [openMenu, setOpenMenu] = useState(false)
    
    

    return (
        
        <header className="body-nav">
        
        <nav>
            <ul class='nav-bar'>
                <input type='checkbox' id='check' />
                <span class="menu">
                    <li><a href="">Home</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Resume</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                    <label for="check" class="close-menu"><i class="fas fa-times"></i></label>
                </span>
                <label for="check" class="open-menu"><i class="fas fa-bars"></i></label>
            </ul>
        </nav>
        </header>
    )
}

