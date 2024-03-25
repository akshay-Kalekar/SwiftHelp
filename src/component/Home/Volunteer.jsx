import React from 'react'
import './Volunteer.css';
import a from './../../assets/home/1.png'
import b from './../../assets/home/2.png'

function Volunteer() {
  return (
    <div className="volunteer">
      <div className="container">
        <div className="left">
          <h1>Your donations impacts lives</h1>
          <h3>Donating blood ? Complete your pre-reading and health history questions online before visiting your blood drive location</h3>
          <img src={a} alt="" />
        </div>
        <div className="right p-4 py-12">
            <img src={b} alt="" />
            <h1>Because your help matters</h1>
            <p>Find the nearest blood donation center and save life</p>
            <button className="btn hover:bg-white hover:shadow-md hover:shadow-[#ffb36cb0]   ">Volunteer Yourself</button>
        </div>
      </div>
    </div>
  )
}

export default Volunteer