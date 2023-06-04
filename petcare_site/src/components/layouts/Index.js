import React from 'react'
import "../../App.scss"
import Header from './Header/Header'
import Home from './Home/Home'
import About from './About/About'
const Index = () => {
  return (
    <>
      <Header/>
      <main>
        <Home/>
        <About/>
      </main>
    </>
  )
}

export default Index
