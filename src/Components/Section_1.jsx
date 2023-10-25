import React from 'react'
import image from '../assets/class.jpg'

export default function Section_1() {
    return (
        <div className="flex mx-auto items-center bg-white p-4 rounded-lg mt-48">
            <div className="w-full sm:w-1/2 pr-4 relative">
                <img
                    src={image}
                    alt=""
                    className="w-[600px] ml-auto h-auto rounded-lg"
                    style={{
                        boxShadow: '-40px -40px 0 #232323',
                    }}
                />
            </div>
            <div className="w-full mr-auto sm:w-1/2 pl-9">
                <h2 className="text-xl font-bold text-red-600">
                    about the music school
                </h2>
                <h2 className="text-[45px] font-bold text-[#333]">
                    We Provide Service since <br /> In 2008
                </h2>
                <p className=" text-base w-3/4">Dramatically Morph Reliable Experiences Without Strategic Methodologies.
                    Quickly Create Frictionless Strategic Theme Areas. Immerse Yourself In the World of Music. Explore New Sounds
                    and Vibrations. Discover the Art of Harmonious Melodies. Join a Community of Music Enthusiasts. Experience the
                    Power of Rhythm and Beats. Unleash Your Creative Potential Through Music. Embrace the Magic of Musical Expression</p>
                    <button className="btn bg-[#CD1818] mt-5 border-none text-white">LEARN MORE</button>
            </div>
        </div>
    )
}
