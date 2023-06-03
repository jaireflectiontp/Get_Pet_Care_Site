import React from 'react';
import "./header.scss";
import TopHeader from '../../common/Contact-Col/TopHeader';
import StorefrontIcon from '@mui/icons-material/Storefront';
import EastIcon from '@mui/icons-material/East';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
const Header = () => {
  return (
    <>
      <header>
        <div className="top-header">
            <div className="top-head-col"><TopHeader icon={<LocationOnIcon/>} contactType='OUR OFFICE' contactInfo='123 Street, New York, USA'/></div>
            <div className="top-head-col"><TopHeader icon={<EmailIcon/>} contactType='EMAIL US' contactInfo='info@example.com'/></div>
            <div className="top-head-col"><TopHeader icon={<AddIcCallIcon/>} contactType='CALL US' contactInfo='+012 345 6789'/></div>
        </div>
        <nav className='header-nav'>
            <div className="header-logo">
                <a href="#"><span><StorefrontIcon/></span><h2>PET SHOP</h2></a>
            </div>
            <div className="page-nav">
                <div className="page-nav-wrap">
                        <a href="#" className='nav-link onAction'>Home</a>
                        <a href="#" className='nav-link onAction'>About</a>
                        <a href="#" className='nav-link onAction'>Service</a>
                        <a href="#" className='nav-link onAction'>Product</a>
                        <a href="#" className='nav-link onAction'>Pages</a>
                        <a href="#" className='nav-link'>Contact <i><EastIcon/></i></a>
                </div>
            </div>
        </nav>
      </header>
    </>
  )
}

export default Header
