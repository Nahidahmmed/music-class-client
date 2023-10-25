import React, { useContext } from 'react'
import logo from '../../assets/logo.png'
import { NavbarContent, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, Navbar } from "@nextui-org/react";
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Providers/AuthProvider';
export default function Header() {

    const { user, logOut } = useContext(AuthContext);
    
      const userPhotoURL = user && user.photoURL ? user.photoURL : 'path/to/default-photo.jpg';
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }
    const list = <>
        <li><Link className='hover:text-red-600 active:text-red-600' to='/'>Home</Link></li>
        <li><Link className='hover:text-red-600 active:text-red-600' to="/classes">Classes</Link></li>
        <li><Link className='hover:text-red-600 active:text-red-600' to="/instructors">Instructors</Link></li>
        <li><Link className='hover:text-red-600 active:text-red-600' to="/dashboard/mycart">Dashboard</Link></li>
        <li><Link className='hover:text-red-600 active:text-red-600' to="/about">About Us</Link></li>
        
    </>
    return (
        <div>
            <div className="navbar h-[110px] bg-[#0F0F0F] text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {list}
                        </ul>
                    </div>
                    <div className='flex pl-9'>
                        <img className='  w-20' src={logo} alt="" />
                    <a className="btn btn-ghost normal-case text-2xl my-auto">Melody Master</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal font-semibold text-base px-1">
                        {list}
                    </ul>
                </div>
               <div className='navbar-end mr-48'>
               <Navbar className="w-[1px] ml-8 h-[1px]">
                        {
                            user ?

                                <NavbarContent as="div" justify="end">
                                    <Dropdown placement="bottom-end">
                                        <DropdownTrigger>
                                            <Avatar
                                                isBordered
                                                as="button"
                                                className="transition-transform"
                                                size="sm"
                                                src={user?.photoURL}
                                            />
                                        </DropdownTrigger>
                                        <DropdownMenu aria-label="Profile Actions" variant="flat">
                                            <DropdownItem key="profile" className="h-14 gap-2">
                                                <p className="font-semibold">{user.displayName}</p>
                                                <p className="font-semibold">{user.email}</p>
                                            </DropdownItem>

                                            <DropdownItem onClick={handleLogOut} key="logout" color="danger">
                                                Log Out
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </NavbarContent> :
                                <Link
                                    to={'/login'}
                                    className="bg-[#CD1818] text-white px-4 py-2 rounded-full text-sm font-semibold  hover:bg-[#cd1818c5] transition duration-300"
                                >
                                    Login
                                </Link>
                        }
                        <h1 className="text-[#CD1818] ml-3 font-bold text-3xl">20% OFF</h1>
                    </Navbar>
               </div>
            </div>
        </div>
    )
}
