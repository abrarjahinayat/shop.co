import React from 'react'
import Topnav from '../components/Topnav'
import Banner from '../components/Banner'
import Brands from '../components/Brands'
import NewArrivals from '../components/NewArrivals'
import TopSelling from '../components/TopSelling'
import DressStyle from '../components/DressStyle'
import CustomerFeedback from '../components/CustomerFeedback'
import Newslatter from '../components/Newslatter'


const page = () => {
  return (
    <div>
      <Banner/>
      <Brands/>
      <NewArrivals/>
      <TopSelling/>
      <DressStyle/>
      {/* <CustomerFeedback/> */}
      

    </div>
  )
}

export default page