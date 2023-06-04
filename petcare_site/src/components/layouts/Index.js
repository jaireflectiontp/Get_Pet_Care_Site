import React from 'react'
import "../../App.scss"
import Header from './Header/Header'
import Home from './Home/Home'
import About from './About/About'
import Service from './Service/Service'
const Index = () => {
  return (
    <>
      <Header/>
      <main>
        <Home/>
        <About/>
        <Service/>
      </main>
    </>
  )
}

export default Index
