import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import loginImage from '../../assets/login.jpg'

export default function Register() {
    const { createUser, updateUserProfile, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            const saveUser = { name: loggedUser.displayName, email: loggedUser.email }
            fetch('https://melody-master-server-dhy7d0z7v-nahidahmmed.vercel.app/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(saveUser)
            })
                .then(res => res.json())
                .then(data => {
                   
                       
                        navigate(from, { replace: true });
                    
                })

            navigate(from, { replace: true });
        })
    } 

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password, photo)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(username, photo)
                    .then(() => {
                        const saveUser = { name: username, email: email }
                        fetch('https://melody-master-server-dhy7d0z7v-nahidahmmed.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data?.insertedId) {
                                    Swal.fire({
                                        title: 'User created successful. ',
                                        showClass: {
                                            popup: 'animate__animated animate__fadeInDown'
                                        },
                                        hideClass: {
                                            popup: 'animate__animated animate__fadeOutUp'
                                        }
                                    });
                                    navigate(from, { replace: true });
                                }
                            })

                    })
                    .catch(err => console.log(err))

            })

    }
    return (
        <div className="flex h-screen">
            {/* Image Section */}
            <div className="w-[500px] items-center my-auto ml-auto h-[600px]">
                <img
                    src={loginImage}
                    alt="Login Image"
                    className="object-cover h-full w-full"
                />
            </div>

            {/* Login Form Section */}
            <div className="w-1/2 flex  items-center justify-center ">
                <div className="p-8 w-[500px] h-[600px] bg-white rounded-lg shadow-lg border-2 border-[#C147E9]">
                    <h2 className="text-3xl text-center font-semibold text-[#5C3D1E] mb-6">Register here</h2>
                    <form onSubmit={handleSignIn}>
                        <div className="mb-6">
                            <input
                                type="text"
                                id="username"
                                name="username"
                                className="bg-gray-100 text-[#5C3D1E] border-2 rounded-lg text-lg py-3 px-4 w-full focus:outline-none focus:border-[#a77543] transition duration-300 hover:border-[#C147E9]"
                                placeholder="Your username"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="text"
                                id="photo"
                                name="photo"
                                className="bg-gray-100 border-2 rounded-lg text-lg py-3 px-4 w-full focus:outline-none focus:border-[#a77543] transition duration-300 hover:border-[#C147E9]"
                                placeholder="Your Photo URL"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="bg-gray-100 border-2 rounded-lg text-lg py-3 px-4 w-full focus:outline-none focus:border-[#a77543] transition duration-300 hover:border-[#C147E9]"
                                placeholder="Your email"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="bg-gray-100 border-2 rounded-lg text-lg py-3 px-4 w-full focus:outline-none focus:border-[#a77543] transition duration-300 hover:border-[#C147E9]"
                                placeholder="Your password"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-[#C147E9] hover:bg-[#C147E9] text-white text-xl font-semibold py-2 px-4 rounded-lg transition duration-300 focus:outline-none mb-4 w-full"
                        >
                            Register
                        </button>
                    </form>

                    <input onClick={handleGoogleSignIn} type="submit" value="G" className="block font-bold text-5xl bg-[#C147E9] text-white my-2 mx-auto w-[55px] rounded-full text-center pb-1 pr-1" />


                    <span className="text-[#5C3D1E] font-semibold">already have a account? <Link to={"/login"} className="ml-2 underline">Login here</Link> </span>
                </div>
            </div>
        </div>
    )
}
