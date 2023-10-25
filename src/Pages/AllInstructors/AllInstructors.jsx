import React, { useEffect, useState } from 'react'

export default function AllInstructors() {
  const [instructors, setBears] = useState([]);
  useEffect(() => {
      fetch('https://melody-master-server-dhy7d0z7v-nahidahmmed.vercel.app/instructors')
          .then(res => res.json())
          .then(data => setBears(data))
          .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
    <div className=' mt-14'>
                  <h1 className="mb-20 text-center mt-20 text-5xl font-bold">Our Professional Instructors Of <span className='text-[#CD1818]'>Music Classes</span></h1>

      <div className='flex ml-56 pb-16'>

      </div>
      <div className=' grid grid-cols-3 w-[1500px] mx-auto'>
        {instructors.map((course, index) => (
          // The Card
          <div className=' pb-14' key={index}>
            <div className="w-[400px] h-[450px] bg-white rounded-2xl p-8 shadow-lg m-4">
              <img src={course.Image} alt={course.Name} className="w-[350px] h-[350px] rounded-2xl" />
              <div className="px-6 py-4 ">
                <div className="font-bold mx-auto text-xl mb-2">{course.Name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>



    </div>
  )
}
