import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import Header from '../Pages/Shared/Header'
import Footer from '../Pages/Shared/Footer'
import { FaMusic, FaPaypal } from "react-icons/fa";
import IsAdmin from '../Hooks/IsAdmin';
import IsInstructor from '../Hooks/IsInstructor';
export default function Dashboard() {
    // TODO: 
    // const isAdmin = true;
    const [isAdmin] = IsAdmin();
    const [isInstructor] = IsInstructor();
    console.log(isAdmin)
    console.log(isInstructor)
    return (
        <div>
            <Header></Header>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side pt-6 bg-[#0F0F0F] ">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay "></label>
                    <ul className="menu p-4 w-80 min-h-full font-semibold text-lg text-white">
                        {isAdmin && (
                            <>
                                 <li><Link to={'/dashboard/users'} className='ml-10 hover:text-red-600'>Manage Users</Link></li>
                                <li><Link className='ml-10 hover:text-red-600'>Approve Class</Link></li>
                            </>
                        )}
                        {isInstructor && (
                            <>
                                <li><Link to={'/dashboard/addclass'} className='ml-10 hover:text-red-600'>Add Class</Link></li>
                            </>
                        )}

                        {
                            !isAdmin && !isInstructor && (
                                <li className='ml-10 mt-6 hover:text-red-600' ><Link to="/dashboard/mycart">My cart</Link></li>
                            )
                        }
                        

                        {/* Common Permissions always shown */}
                        <li className='ml-10 mt-6 hover:text-red-600' ><Link to="/">Home</Link></li>
                        <li className='ml-10 hover:text-red-600'><Link to='/classes'>classes</Link></li>

                        {/* {
                            isAdmin ? <>
                                <li><Link to={'/dashboard/users'} className='ml-10 hover:text-red-600'>Manage Users</Link></li>
                                <li><Link className='ml-10 hover:text-red-600'>Approve Class</Link></li>
                            </> : <>
                                <li><Link to={'/dashboard/mycart'} className='ml-10 hover:text-red-600'>Classes</Link></li>
                                <li><Link className='ml-10 hover:text-red-600'>payment</Link></li>
                            </>
                        } */}


                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
