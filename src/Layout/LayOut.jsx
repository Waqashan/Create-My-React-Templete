import React from 'react'
import HeaderTop from '../components/HeaderTop/HeaderTop'
import NavBar from '../components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import QuickLinks from '../components/quickLinks/QuickLinks'

const LayOut = () => {
  return (
    <div>
        <HeaderTop/>
        <NavBar/>
        <Outlet/>
        <QuickLinks/>
      
    </div>
  )
}

export default LayOut
