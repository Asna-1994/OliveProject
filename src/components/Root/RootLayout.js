import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderSmall from './HeaderSmall'
import Header from './Header'
import Footer from './Footer'

function RootLayout() {
  return (
    <>
<HeaderSmall/>
<Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootLayout