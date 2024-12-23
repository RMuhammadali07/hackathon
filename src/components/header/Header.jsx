import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import Logo  from './Logo.png'

export default function Header() {
  return (
    <header>

        <nav>
        <div className="logo">
            <img src={Logo} alt="" />
        </div>
            <ul>
                <li>
                    <NavLink>Home</NavLink>
                </li>
                <li>
                    <NavLink>About Us</NavLink>
                </li>
                <li>
                    <NavLink>Our App</NavLink>
                </li>
                <li>
                    <NavLink>Contacts</NavLink>
                </li>
            </ul>
        </nav>

        <div className="btns">
            <button>Log in</button>
            <button>Sign up</button>
        </div>
    </header>
  )
}


