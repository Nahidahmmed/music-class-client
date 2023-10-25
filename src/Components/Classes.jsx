import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Providers/AuthProvider';

export default function Classes() {
    const [classes, setBears] = useState([]);
    const { user } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        fetch('https://melody-master-server-dhy7d0z7v-nahidahmmed.vercel.app/class')
            .then(res => res.json())
            .then(data => setBears(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const images = [
        'https://i.ibb.co/7YnrrPZ/33310.jpg',
        'https://i.ibb.co/s2mrLnv/31976.jpg',
        'https://i.ibb.co/BB2tgRQ/25538.jpg',
        'https://i.ibb.co/S5871bv/7749.jpg',
        'https://i.ibb.co/6NWqfT1/female-musician-recording-song-playing-acoustic-guitar-home.jpg',
        'https://i.ibb.co/6P40nqW/two-female-students-playing-violin-piano-1.jpg',
        // Add more image URLs as needed
    ];
    const handleAddToCart = course => {
        console.log(course)
        const { Image, Name, _id, InstructorName, AvailableSeats, Price, Description } = course;
        const addedClass = { cartId: _id, Image, Name, InstructorName, AvailableSeats, Price, Description, email: user.email }
        if (user && user.email) {
            fetch('https://melody-master-server-dhy7d0z7v-nahidahmmed.vercel.app/addedClass', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(addedClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your class has been saved',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to apply in the class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now ?'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
        <div className='bg-gray-100 mt-14'>
            <div className='flex ml-64 pt-24 pb-16'>
                <h1 className='font-bold text-5xl mr-[620px]'>Music Classes For Everyone</h1>
                <Link to="/classes"><button className='btn bg-[#CD1818]  hover:bg-red-600 border-none text-white ml-16'>show all</button></Link>
            </div>
            <div className='lg:grid lg:grid-cols-3 w-[1500px] mx-auto'>
                {classes.slice(5).map((course, index) => (
                    // The Card
                    <div className='mx-auto  pb-14' key={index}>
                        <div className="w-[400px] h-[410px] bg-white rounded-2xl p-8 shadow-lg m-4">
                            <img src={course.Image} alt={course.Name} className="w-full h-[190px] rounded-2xl" />
                            <div className="px-6 py-4 ">
                                <div className="font-bold text-xl mb-2">{course.Name}</div>
                                <p className="text-gray-700 text-base">{course.Description}</p>
                                <div className="mt-4 flex justify-between items-center">
                                    <button onClick={() => handleAddToCart(course)} className="btn bg-[#CD1818] text-white hover:bg-[#cd1818d3]">APPLY NOW</button>
                                    <Link className='' to={`/details/${course._id}`}> <button className="btn bg-transparent border-3 border-[#CD1818] bg-clip-border text-[#CD1818] font-bold hover:bg-[#CD1818] hover:text-white">LEARN MORE</button></Link>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                ))}
            </div>



        </div>


    )
}
