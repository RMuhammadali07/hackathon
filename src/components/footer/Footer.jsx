import React from 'react'
import './Footer.css'
import logo from './Logo (1).png'
import { NavLink } from 'react-router-dom'
export default function Footer() {
  return (
    <div className='footer'>

      <div className="footer-text">
      <div className="logo-img">
        <img src={logo} alt="logo" />
      </div>
            <h4>© 2020 Epixelab. All rights reserved.</h4>
            <div className="nav">
            <nav>
                <ul>
                    <li>
                        <NavLink>Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink>How it Works</NavLink>
                    </li>
                    <li>
                        <NavLink>Pricing</NavLink>
                    </li>
                    <li>
                        <NavLink>About</NavLink>
                    </li>
                    <li>
                        <NavLink>Login</NavLink>
                    </li>
                </ul>
            </nav>
            </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>Startup Framework contains components and complex blocks which can easily be integrated into almost any design. </p>
      </div>
    </div>
  )
}
