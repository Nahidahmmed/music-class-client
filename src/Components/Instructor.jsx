import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Instructor() {
    const [instructors, setBears] = useState([]);
    useEffect(() => {
        fetch('https://melody-master-server-dhy7d0z7v-nahidahmmed.vercel.app/instructors')
            .then(res => res.json())
            .then(data => setBears(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className='bg-gray-100 mt-14'>
            <div className='flex ml-56 pt-24 pb-16'>
                <h1 className='font-bold text-5xl mr-[720px]'>Our Professional Instructors</h1>
                <Link to="/instructors"><button className='btn bg-[#CD1818] hover:bg-red-600 border-none text-white ml-16'>show all</button></Link>
            </div>
            <div className='lg:flex w-[1500px] ml-24'>
                {instructors.slice(4).map((course, index) => (
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
