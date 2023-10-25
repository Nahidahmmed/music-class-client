import React from 'react'
import Banner from '../../Components/Banner'
import Section_1 from '../../Components/Section_1'
import Classes from '../../Components/classes'
import Instructor from '../../Components/Instructor'

export default function Home() {
  return (
    <div>
     <Banner></Banner>
     <Section_1></Section_1>
     <Classes></Classes>
     <Instructor></Instructor>

     <div className="grid grid-cols-6">
                <div className="col-span-2 bg-[#9400FF] border-[1px] text-white font-bold text-3xl text-center p-16">146+ <br /><span className='text-lg font-normal'>Music class </span></div>
                <div className="col-span-1 bg-[#9400FF] border-[1px] text-white font-bold text-3xl text-center p-16">50+ <br /><span className='text-lg font-normal'>best Instructors</span></div>
                <div className="col-span-1 bg-[#9400FF] border-[1px] text-white font-bold text-3xl text-center p-16">15+ <br /><span className='text-lg font-normal'>Total Brunch</span></div>
                <div className="col-span-2 bg-[#9400FF] border-[1px] text-white font-bold text-3xl text-center p-16">560+ <br /><span className='text-lg font-normal'>Happy Custpmer</span></div>
            </div>
    </div>
  )
}
