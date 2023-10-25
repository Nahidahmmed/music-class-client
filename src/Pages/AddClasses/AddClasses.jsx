import React, { useContext } from 'react'
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

export default function AddClasses() {
    const { user } = useContext(AuthContext);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const name = form.name.value;
        const instructorName = form.instructorName.value;
        const instructorEmail = form.instructorEmail.value;
        const discription = form.discription.value;
        const price = form.price.value;
        const availableSeats = form.availableSeats.value;

        const data = { Name: name,Image: image, InstructorName: instructorName,InstructorEmail:instructorEmail ,Price: price, AvailableSeats: availableSeats,Description: discription, }
        console.log(data);


        fetch("https://melody-master-server-dhy7d0z7v-nahidahmmed.vercel.app/addClasses", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'your class is Added',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    form.reset();
                }

            })
            .catch(error => console.log(error));


    };

    return (
        <div>
            <div className="w-[70%] h-[80%] mx-auto mt-8">
                <h2 className="text-5xl font-bold text-center py-7 text-white mb-6">Add a Toy</h2>
                <form onSubmit={handleSubmit} className="bg-[#000000] my-8 rounded-lg shadow-lg p-6">
                    <div className="flex">
                        <div className="mb-6  mr-5 w-1/2">
                            <label htmlFor="pictureURL" className="text-white text-lg font-bold mb-2 block">
                                Picture URL of class
                            </label>
                            <input
                                type="text"
                                id="image"
                                name="image"
                                placeholder="Picture URL of the toy"
                                className="w-full px-4 py-2 border border-[#DAC0A3] rounded-lg focus:outline-none focus:border-[#5C3D1E] text-base"
                                required
                            />
                        </div>
                        <div className="mb-6  mr-5 w-1/2">
                            <label htmlFor="name" className="text-white text-lg font-bold mb-2 block">
                                Class Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5C3D1E] text-base"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="mb-6  mr-5 w-1/2">
                            <label htmlFor="sellerName" className="text-white text-lg font-bold mb-2 block">
                                Instructor Name
                            </label>
                            <input
                                type="text"
                                id="instructorName"
                                name="instructorName"
                                value={user?.displayName}
                                placeholder="Seller Name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5C3D1E] text-base"
                            />
                        </div>
                        <div className="mb-6  mr-5 w-1/2">
                            <label htmlFor="sellerName" className="text-white text-lg font-bold mb-2 block">
                                Instructor Email
                            </label>
                            <input
                                type="email"
                                id="instructorEmail"
                                name="instructorEmail"
                                value={user?.email}
                                placeholder="Instructor Email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5C3D1E] text-base"
                            />
                        </div>
                        
                    </div>

                    <div className="flex">
                        <div className="mb-6  mr-5 w-1/2">
                            <label htmlFor="price" className="text-white text-lg font-bold mb-2 block">
                                Price
                            </label>
                            <input
                                type="number"
                                id="price"
                                name="price"
                                placeholder="Price"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5C3D1E] text-base"
                                required
                            />
                        </div>
                        <div className="mb-6  mr-5 w-1/2">
                            <label htmlFor="rating" className="text-white text-lg font-bold mb-2 block">
                                AvailableSeats
                            </label>
                            <input
                                type="number"
                                id="AvailableSeats"
                                name="availableSeats"
                                placeholder="Rating"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5C3D1E] text-base"
                                required
                            />
                        </div>
                    </div>
                    <div className="">
                        <div className="mb-6  mr-5 w-full">
                            <label htmlFor="Discription" className="text-white text-lg font-bold mb-2 block">
                                Discription
                            </label>
                            <input
                                type="text"
                                id="Discription"
                                name="discription"
                                placeholder="Discription"
                                className="w-full  h-20 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5C3D1E] text-base"
                            />
                        </div>
                    </div>
                    <div className="mt-6 w-full">
                        <button
                            type="submit"
                            className=" bg-red-600 w-full hover:bg-[#5C3D1E] text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
                        >
                            Add Class
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
