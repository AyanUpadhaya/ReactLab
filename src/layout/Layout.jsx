import React from 'react'
import Navbar from '../components/shared/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </main>
  )
}

export default Layout