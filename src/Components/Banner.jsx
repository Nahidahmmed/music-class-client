import React from 'react'
import banner from '../assets/banner.jpg'
import { Link } from 'react-router-dom'
export default function Banner() {
    return (
        <div className="relative">
  <div className="hero h-[750px]" style={{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url("${banner}")` }}>
    <div className="text-neutral-content absolute top-1/2 transform -translate-y-1/2 left-5">
      <div className='lg:ml-48'>
        <h1 className="mb-5 text-7xl font-bold ">Join The Incredible <br /> World Of <span className='text-[#CD1818]'>Music</span></h1>
        <p className="mb-5 text-lg my-9">Dramatically Morph Reliable Experiences Without Strategic Methodologies. <br /> Quickly Create Frictionless Strategic Theme Areas.</p>
        <div className="flex gap-5">
          <Link to="/classes"><button className="btn bg-[#CD1818] border-none hover:bg-red-600 text-white">APPLY NOW</button></Link>
          <Link to="/about"><button className="btn bg-transparent border-3 border-[#CD1818] hover:bg-[#CD1818] bg-clip-border text-white">LEARN MORE</button></Link>
        </div>
      </div>
    </div>
  </div>
</div>


    )
}
