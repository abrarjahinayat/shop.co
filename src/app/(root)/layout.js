import React from 'react'
import Navbar from '../components/Navbar'
import Topnav from '../components/Topnav'
import Footer from '../components/Footer'
import Newslatter from '../components/Newslatter'

export default function layout({children}) {
  return (
    <div>
      <Topnav/>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  )
}
