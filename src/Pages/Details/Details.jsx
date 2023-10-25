import React, { useContext } from 'react'
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';

export default function Details() {
    const data = useLoaderData();
    const { user } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const handleAddToCart = data => {
        console.log(data)
        const { Image, Name, _id, InstructorName, AvailableSeats, Price, Description } = data;
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
    <div className="container mx-auto my-24">
    <div className="lg:flex bg-white rounded-lg shadow-lg">
        <div className="lg:w-2/3">
            <img
                src={data.Image}
                alt={data.Name}
                className="w-2/3  mx-auto my-8 object-cover  lg:h-4/5 rounded-lg"
            />
        </div>
        <div className="lg:w-1/2 p-6 my-24">
            <h2 className="text-5xl font-bold  mb-4">{data.Name}</h2>
            <p className=" font-bold text-xl mb-2">Instructor Name: {data.InstructorName}</p>
            <p className=" font-bold text-xl mb-2">Price: ${data.Price}</p>
           
            <p className=" font-bold text-xl mb-2">
                Available: {data.AvailableSeats}
            </p>
            <p className=" w-2/4 font-bold text-xl mb-2">
                 {data.Description}
            </p>
    {/* todo */}
            <button
            onClick={() => handleAddToCart(data)}
                className="bg-[#CD1818] hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 mt-4 block w-full lg:w-auto"

            >
                Add to Cart
            </button>
            <Link to="/classes">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg mt-4 block w-full lg:w-auto transition duration-300"

                >
                    Back to All Classes
                </button>
            </Link>
        </div>
    </div>
</div>
  )
}
