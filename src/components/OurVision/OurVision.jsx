import React from 'react'
import "./OurVision.css"
import img1 from "./Vector.png"
import img2 from "./Video.png"
import img3 from "./Chart.png"

const OurVison = () => {
  return (
    <div className='OurGoal'>

      <section class="section">
        <p>S E R V I C E</p>
        <h2>Our Vision & Our Goal</h2>
        <div class="cards-container">
          <div class="card">
            <img src={img1} alt="" className='img1' />
            <h3>Graphic Design</h3>
            <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Quisque dui mi, bibendum eu erat  <br /> id, ultricies semper metus. Nunc  <br /> dapibus laoreet dolor nec  <br /> imperdiet.</p>
            <button>Learn More</button>
          </div>

          <div class="card">
            <img src={img2} alt="" className='img2' />

            <h3>Video Editing</h3>
            <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Quisque dui mi, bibendum eu erat  <br /> id, ultricies semper metus. Nunc  <br /> dapibus laoreet dolor nec  <br /> imperdiet.</p>
            <button>Learn More</button>
          </div>

          <div class="card">
            <img src={img3} alt="" className='img3' />
            <h3>Digital Marketing</h3>
            <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Quisque dui mi, bibendum eu erat  <br /> id, ultricies semper metus. Nunc  <br /> dapibus laoreet dolor nec  <br /> imperdiet.</p>
            <button>Learn More</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurVison
