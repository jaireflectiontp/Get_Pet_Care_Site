import React from 'react'
import "./contact.scss"
const Contact = (props) => {
    const {icon, contactType, contactInfo} =props
  return (
    <div className='contact-col'>
      <div className="contact-icon">{icon}</div>
      <div className="contact-details">
        <h6>{contactType}</h6>
        <span>{contactInfo}</span>
      </div>
    </div>
  )
}

export default Contact
