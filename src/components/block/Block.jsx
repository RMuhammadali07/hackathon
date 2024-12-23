import React from 'react'
import './Blog.css'
import video from './Video Player.png'
export default function Block() {
  return (
    <div className='block'>
        <div className="block-text">
         <h2>Many Blocks and Components</h2>
         <p>Startup Framework contains components and complex blocks which can easily be integrated into almost any design. </p>
         <div className="btn">
         <button>Explore</button>
         </div>
        </div>
        <div className="block-img">
            <img src={video} alt="video" />
        </div>
    </div>
  )
}
