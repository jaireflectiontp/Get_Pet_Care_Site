import React from "react";
import "./home.scss";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
const Home = () => {
  return (
    <div className="hero-container">
      <div className="container-in">
        <h1>PET SHOP</h1>
        <br />
        <h4>MAKE YOUR PETS HAPPY</h4>
        <br />
        <p>
          Dolore tempor clita lorem rebum kasd eirmod dolore diam eos kasd. Kasd
          clita ea justo est sed kasd erat clita sea
        </p>
        <br />
        <br />
        <div className="hero-btn">
          <div className="readmore-btn">
            <button>Read More</button>
          </div>
          <div className="play-btn">
            <i>
              <PlayCircleIcon />
            </i>
            <span>Play Video</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
