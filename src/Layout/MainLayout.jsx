import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../component/Header'
import Footer from '../component/Footer'

const MainLayout = () => {
  return (
    <div>
        <Header />
        <div className="">
        <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default MainLayout