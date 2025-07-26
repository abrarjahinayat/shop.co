import React from 'react'
import Navbar from '../components/Navbar'
import Topnav from '../components/Topnav'

export default function layout({children}) {
  return (
    <div>
      <Topnav/>
      <Navbar/>
      {children}
    </div>
  )
}
