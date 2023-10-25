import React, { useState } from 'react'
import UseCarts from '../../Hooks/UseCarts'
import Swal from 'sweetalert2'
export default function MyCart() {
    const [cart,refetch] = UseCarts()
    console.log(cart)

    const handleDelete = (classes) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://melody-master-server-dhy7d0z7v-nahidahmmed.vercel.app/addedClass/${classes._id}`, {
                    method: 'DELETE'
                })
                .then(res=> res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0){
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                    }
                })
            }
          })
    }
    return (
        <div>
            <h1 className="mb-20 text-center mt-20 text-5xl font-bold">My Added <span className='text-[#CD1818]'>Music Classes</span></h1>
            <div className=''>
                <div className="overflow-x-auto container mx-auto">
                    <table className="table text-lg mb-32">
                        {/* head */}
                        <thead className=" text-lg">
                            <tr>
                                <th>
                                #
                                </th>
                                <th>image</th>
                                <th>instractor</th>
                                <th>price</th>
                                <th>Available Seats</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {/* row 1 */}
                            {cart.map((classes, index) => <tr key={classes._id}>
                                <th>
                                    <h1>{index + 1}</h1>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-16 h-16">
                                                <img src={classes.Image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{classes.Name}</div>
                                            <div className="text-sm opacity-50"></div>
                                        </div>
                                    </div>
                                </td>
                                <td className='font-semibold'>
                                    {classes.InstructorName}
                                </td>
                                <td><span className='font-bold text-[#4E9F3D]'>{classes.Price}</span></td>
                                <td><span className='pl-14 font-semibold text-[#4E9F3D]'>{classes.AvailableSeats}</span></td>
                                <td>
                                    <button className="bg-[#4E9F3D] text-white px-4 py-2 rounded-full text-sm font-semibold mr-5 hover:text-white transition duration-300">pay</button>
                                    <button onClick={() => handleDelete(classes)} className="bg-[#CD1818] text-white px-4 py-2 rounded-full text-sm font-semibold mr-5 hover:bg-red-600 hover:text-white transition duration-300">Delete</button>
                                </td>
                            </tr>)}

                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    )
}
