import React, { useContext, useEffect, useState } from 'react'
import banner from '../../assets/banner_2.jpg'
import { AuthContext } from '../../Providers/AuthProvider'
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
export default function AllClass() {
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
    const handleAddToCart = classData => {
        console.log(classData)
        const { Image, Name, _id, InstructorName, AvailableSeats, Price, Description } = classData;
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
        <div>
            <div>
                <div className="hero h-[550px]" style={{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url("${banner}")` }}>
                    <div className="text-neutral-content absolute top-1/2 transform -translate-y-1/2 left-5">
                        <div className='lg:mx-[600px]'>
                            <h1 className="mb-44 text-center text-7xl font-bold ">Join The Incredible <br /> World Of <span className='text-[#CD1818]'>Music</span></h1>

                        </div>
                    </div>
                </div>
                <div className="w-[1700px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {classes.map((classData, index) => (
                        <div key={index} className="bg-white w-[450px] mt-8 mx-auto p-4 rounded-lg shadow-lg">
                            <div className="aspect-w-24 aspect-h-9 mb-4">
                                <img src={classData.Image} alt={classData.Name} className="object-cover rounded-xl h-[270px] w-[430px]" />
                            </div>
                            <h2 className="text-xl font-semibold mb-1">{classData.Name}</h2>
                            <p className="text-gray-600 text-sm">{classData.InstructorName}</p>
                            <p className="text-gray-600 text-sm">Available Seats: {classData.AvailableSeats}</p>
                            <p className="text-xl font-semibold text-green-600">${classData.Price}</p>
                            <p className="mt-2 text-sm">{classData.Description}</p>
                            <div className="mt-4 flex justify-between items-center">
                                <button onClick={() => handleAddToCart(classData)} className="btn bg-[#CD1818] text-white hover:bg-[#cd1818d3]">APPLY NOW</button>
                                <button className="btn border-2 border-[#CD1818] text-[#CD1818] hover:bg-[#CD1818] hover:text-white">LEARN MORE</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
