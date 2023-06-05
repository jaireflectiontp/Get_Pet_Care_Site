import React from 'react'
import "../../App.scss"
import Header from './Header/Header'
import Home from './Home/Home'
import About from './About/About'
import Service from './Service/Service'
import Offer from './Offer'
import Footer from './Footer/Footer'
const Index = () => {
  return (
    <>
      <Header/>
      <main>
        <Home/>
        <About/>
        <Service/>
        <Offer/>
        <Footer/>
      </main>
    </>
  )
}

export default Index
