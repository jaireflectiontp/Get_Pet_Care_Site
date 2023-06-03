import React from 'react'
import "./header.scss"
import Contact from '../../common/Contact-Col/Contact'
const Header = () => {
  return (
    <>
      <header>
        <div className="top-header">
            <div className="top-head-col"><Contact icon='O' contactType='OUR OFFICE' contactInfo='123 Street, New York, USA'/></div>
            <div className="top-head-col"><Contact icon='O' contactType='EMAIL US' contactInfo='info@example.com'/></div>
            <div className="top-head-col"><Contact icon='O' contactType='CALL US' contactInfo='+012 345 6789'/></div>
        </div>
        <nav className='header-nav'>navigation</nav>
      </header>
    </>
  )
}

export default Header
