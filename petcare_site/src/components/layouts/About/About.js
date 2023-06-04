import React, { useState } from "react";
import "./about.scss";
import AboutPic from "../../../assets/images/about.jpg";
import Heading from "../../common/Section Heading/Heading";
const About = () => {
  const [active, setActive] = useState('mission');
  return (
    <div className="about-container">
      <div className="about-container-in">
        <div className="about-banner">
          <img src={AboutPic} alt="about img" style={{ width: "100%" }} />
        </div>
        <div className="about-us">
          <div className="heading">
            <Heading
              pageHeading="ABOUT US"
              headingTitle="WE KEEP YOUR PETS HAPPY ALL TIME"
            />
          </div>
          <p className="tagLine">
            Diam dolor diam ipsum tempor sit. Clita erat ipsum et lorem stet no
            labore lorem sit clita duo justo magna dolore
          </p>
          <div className="mv-block">
            <div className="toggle-tabs">
              <div
                className={`tabs ${active=='mission' ? "active" : ""}`}
                onClick={() => setActive('mission')}
              >
                OUR MISSION
              </div>
              <div
                className={`tabs ${active!='mission' ? "active" : ""}`}
                onClick={() => setActive('vission')}
              >
                OUR VISSION
              </div>
            </div>
            <div className="mv-description">
           {
            active=='mission'
            ?
            ' Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna'
            :
           'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic expedita odit non quo obcaecati placeat magni explicabo. Nihil sunt, voluptates vel ullam quae architecto, repudiandae ea nulla doloremque at quos'
           }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
