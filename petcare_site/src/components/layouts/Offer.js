import React from 'react'
import "./offer.scss"
import Heading from '../common/Section Heading/Heading'
const Offer = () => {
  return (
    <div className='special-offer-container'>
      <div className="offer-container-in">
        <Heading pageHeading="SPECIAL OFFER" headingTitle="SAVE 50% ON ALL ITEMS YOUR FIRST ORDER"/>
        <p className='offerNote'>Eirmod sed tempor lorem ut dolores sit kasd ipsum. Dolor ea et dolore et at sea ea at dolor justo ipsum duo rebum sea. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo lorem. Elitr ut dolores magna sit. Sea dolore sed et.</p>
      <div className="offer-btn">
        <div className="purchase-btn"><button>SHOP NOW</button></div>
        <div className="readMore-btn"><button>READ MORE</button></div>
      </div>
      </div>
    </div>
  )
}

export default Offer
