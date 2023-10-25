import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Pages/Shared/Header'
import Footer from '../Pages/Shared/Footer'

export default function Main() {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}
