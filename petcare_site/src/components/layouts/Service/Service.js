import React from 'react'
import "./service.scss"
import Heading from '../../common/Section Heading/Heading'
import ServCard from '../../common/Service-card/ServCard'
import HouseSidingIcon from '@mui/icons-material/HouseSiding';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import FitbitIcon from '@mui/icons-material/Fitbit';
import HealingIcon from '@mui/icons-material/Healing';
import PetsIcon from '@mui/icons-material/Pets';
const Service = () => {
  return (
    <div className='service-container'>
      <div className="heading"><Heading pageHeading="SERVICE" headingTitle="OUR EXCELLENT PET CARE SERVICES" /></div>

      <div className="service-card-grid">
        <ServCard servLogo={<HouseSidingIcon/>} servTitle="PET BOARDING" servNote="Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit"/>
        <ServCard servLogo={<LocalDiningIcon/>} servTitle="PET FEEDING" servNote="Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit"/>
        <ServCard servLogo={<ContentCutIcon/>} servTitle="PET GROOMING" servNote="Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit"/>
        <ServCard servLogo={<PetsIcon/>} servTitle="PET TRAINING" servNote="Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit"/>
        <ServCard servLogo={<FitbitIcon/>} servTitle="PET EXERCISE" servNote="Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit"/>
        <ServCard servLogo={<HealingIcon/>} servTitle="PET TREATMENT" servNote="Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit"/>
      </div>
    </div>
  )
}

export default Service
