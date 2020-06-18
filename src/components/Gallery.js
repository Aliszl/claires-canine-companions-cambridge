import React from "react";
import {StyledDiv} from "../styles/style";
import { Carousel } from "antd";
import autumn from "../img/autumn.jpg";
import granchester from "../img/granchesterMeadows.jpg";
import paw from "../img/paw.png";
import cornfield from "../img/cornfield.jpg";
import granchester2 from "../img/granchester2.jpg";
import meadow from "../img/meadow.jpg";
import fieldtrack from "../img/fieldtrack.jpg"

const carouselImages = [
  {
   carouselImg: paw
    
  },
  {
    carouselImg: granchester
  }, {
    carouselImg: autumn
  }, {
    carouselImg: cornfield
  }, {
    carouselImg: granchester2
  }, {
    carouselImg: meadow
  }, {
    carouselImg: fieldtrack
  }
];

const Gallery = () => {
  return (
    <StyledDiv>
      <h2>Gallery</h2>
      <p>
   We try to walk the dogs in the most lovely places.   
      </p>
      <Carousel className="carousel" autoplay>
                   <div >
            <img src={carouselImages[0].carouselImg} alt="" />
          </div>
          <div>
            <img src={carouselImages[1].carouselImg} alt="" />
          </div>
          <div>
            <img src={carouselImages[2].carouselImg} alt="" />
          </div>
          <div>
            <img src={carouselImages[3].carouselImg} alt="" />
          </div>
       
        </Carousel>
    </StyledDiv>
  );
};

export default Gallery;
