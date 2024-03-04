import React from 'react'
import MainBgsec1 from '../MainBg/MainBgsec1'
import Service from '../services/Service'
import About from '../about/About'
import Testimonal from '../Testimonal/Testimonal'
import WhyChose from '../WhyChose/WhyChose'
import ContactUsPage from '../../Pages/ContactUsPage'

const Home = () => {
  return (
    <div>
      <MainBgsec1/>
      <Service/> 
      <About />
      <Testimonal/>
      <WhyChose/>
      <ContactUsPage/>
    </div>
  )
}

export default Home
