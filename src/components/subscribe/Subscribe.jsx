import React from 'react'
import './subscribe.css'
import subImg from "../../assets/Subscribe.png"

const Subscribe = () => {
  return (
    <section className='subscribe'>
      <h1 className='text'>Our Team</h1>
      <h1 className='sub-text'>Subscribe Our Newsleter</h1>
      <div className="sub-container">
      <div className="sub-img">
        <img src={subImg} alt="letter" />
      </div>
      <div className="sub-info">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        <input type="text" placeholder='Your E-mail here...' />
        <button className='btn'>Subscribe Our Newletter</button>
      </div>
      </div>
    </section>
  )
}

export default Subscribe
