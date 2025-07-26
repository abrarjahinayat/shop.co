import React from 'react'
import Topnav from '../components/Topnav'
import Banner from '../components/Banner'
import Brands from '../components/Brands'
import NewArrivals from '../components/NewArrivals'
import TopSelling from '../components/TopSelling'
import DressStyle from '../components/DressStyle'

const page = () => {
  return (
    <div>
      <Banner/>
      <Brands/>
      <NewArrivals/>
      <TopSelling/>
      <DressStyle/>
    </div>
  )
}

export default page