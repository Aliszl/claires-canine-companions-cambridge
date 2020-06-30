import styled from "styled-components";
// import fullWidthDogPic from "../img/jackheadshot.jpeg";
// import { Carousel } from "antd";
export const AppStyled = styled.div`
  html {
    scroll-behavior: smooth;
  }
  background-color: #fff;
  width: 100%;

  body {
    font-family: Verdana, Geneva, sans-serif;
    font-size: 18px;
    background-color: #ccc;
  }

  .float {
    position: fixed;
    width: 5rem;
    height: 5rem;
    bottom: 40px;
    right: 40px;
    background-color: #ff9900;
    color: #fff;
    border-radius: 50px;
    text-align: center;
    box-shadow: 2px 2px 3px #999;
  }

  .my-float {
    margin-top: 40%;
  }
  .float-up {
    position: fixed;
    width: 40px;
    height: 40px;
    bottom: 110px;
    right: 20px;
    background-color: #06c;
    color: #fff;
    border-radius: 50px;
    text-align: center;
    /* box-shadow: 2px 2px 3px #999; */
  }
  .rowOfDogs {
    margin: 0;
    max-width: 100%;
    height: auto;
    width: 100%;
    align-items: center;
    align-self: center;
  }
  .headerCentralised {
    text-align: center;
    font-family: "Indie Flower", cursive;
    font-size: 50px;
    @media (max-width: 1024px) {
      font-size: 50px;
    }
    @media (max-width: 768px) {
      font-size: 35px;
    }
    
    @media (max-width: 411px) {
      font-size: 30px;
    }
    @media (max-width: 360px) {
      font-size: 2em;
    }
  }
  .pcentralised {
    text-align: center;
    font-family: "Indie Flower", cursive;
    font-size: 30px;
  }


 
  }
  footer {

    bottom: 0;
    width: 100%;
    max-height: 10vh;
    display: flex;
    justify-content: space-evenly;
  }
  .jackHeadshot {
    width: 80vw;

    display: table;
    position: relative;
    margin: auto;
    overflow: hidden;
  }
`;

export const StyledDiv = styled.div`
  background-color: #fff;
  margin: 0 0 0 0;
  width: 100%;
  padding: 90px 20px 0 20px;

  overflow: hidden;
  @media (max-width: 768px) {
    padding: 20px 20px 0 20px;
  }

  h1 {
    font-family: "Indie Flower", cursive;
    font-size: 40px;
    text-align: center;
    @media (max-width: 1024px) {
      font-size: 25px;
    }
    @media (max-width: 768px) {
      font-size: 35px;
    }
    @media (max-width: 411px) {
      font-size: 22px;
    }
    @media (max-width: 360px) {
      font-size: 22px;
    }
  }
  h2 {
    font-family: "Indie Flower", cursive;
    font-size: 30px;
    @media (max-width: 1024px) {
      font-size: 25px;
    }
    @media (max-width: 768px) {
      font-size: 35px;
    }
    @media (max-width: 411px) {
      font-size: 20px;
    }
    @media (max-width: 360px) {
      font-size: 20px;
    }
  }
  h3 {
    font-family: "Indie Flower", cursive;
    font-size: 25px;
    @media (max-width: 1024px) {
      font-size: 25px;
    }
    @media (max-width: 768px) {
      font-size: 35px;
    }
    @media (max-width: 411px) {
      font-size: 20px;
    }
    @media (max-width: 360px) {
      font-size: 20px;
    }
  }
  h4 {
    font-family: "Indie Flower", cursive;
    font-size: 1em;
    @media (max-width: 768px) {
      font-size: 1em;
    }

    @media (max-width: 411px) {
      font-size: 2em;
    }
    @media (max-width: 360px) {
      font-size: 2em;
    }
  }
  p {
    font-size: 40px;
    @media (max-width: 1024px) {
      font-size: 25px;
    }
    @media (max-width: 768px) {
      font-size: 35px;
    }
    @media (max-width: 411px) {
      font-size: 20px;
    }
    @media (max-width: 360px) {
      font-size: 20px;
    }
  }

  li {
    margin: 0 0 0 80px;
    text-align: left;
    font-family: "Indie Flower", cursive;
    font-size: 40px;
    text-emphasis: bold;
    @media (max-width: 768px) {
      font-size: 30px;
      margin: 0 0 0 0;
    }
    @media (max-width: 411px) {
      font-size: 20px;
      margin: 0 0 0 0;
    }
    @media (max-width: 360px) {
      font-size: 20px;
      margin: 0 0 0 0;
    }
  }

  .lefthanded {
    display: flex;
    flex-direction: row;

    .image-left {
      width: 50%;
      padding-bottom: 5%;

    }
      .text-right {
        font-size:30px;
        width: 50%;
        padding: 30px;
      }
  }
  .righthanded{
      display: flex;
    flex-direction: row-reverse;
    .image-right {
      width: 50%;
      
    }
    .text-left {
      width: 50%;
      padding: 50px;
      font-size:30px;
    }
    }
  @media (max-width: 768px) {
   
      flex-direction: column;

      .lefthanded {
        display: flex;
        flex-direction: column;
        .image-left {
          width: 100%
        }
        .text-right{
          width: 100%;
          padding: 10px;
      
          }
      }
   .righthanded{
        display: flex;
      flex-direction: column;
      .image-right {
        width: 100%;
        
      }
      .text-left {
        width: 100%;
        padding: 20px;
      }
    }
     
  }

  .services-row {
    display: flex;
    justify-content: space-evenly;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  .servicesBox {
    background-color: #f2f2f2;
    margin: 3px;
    width: 30%;
    .servicesBox-header {
      display: flex;
      justify-content: space-evenly;
      img {
        height: 10%;
        width: 20%;
      }
    }

    @media (max-width: 768px) {
      width: 96%;
      .servicesBox-header {
        display: flex;
        justify-content: space-evenly;
        align-items: top;
        img {
          height: 30%;
          width: 30%;
        }
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;
      padding: 40px 10px 0 10px;
      .headerCentralised {
        text-align: center;
        font-family: "Indie Flower", cursive;
        font-size: 25px;
      }
    }
  }

  .carouselandtext {
    text-align: center;
    font-size: 25px;
    margin-top: 40px;
    display: flex;
    h1 {
      width: 100%;
      text-align: center;
    }
    .carousel-container {
      border: 1px solid red;
    }
    .carousel {
      margin: 0, auto;

      width: 32vw;

      text-align: center;
      .carouselpic {
        width: 100%;
        border-radius: 8px;
      }
      img {
        display: flex;
        justify-content: center;
        margin-left: 100px;
        height: 400px;
        border-radius: 8px;
      }
    }
  }
  .ant-carousel .slick-slide {
    text-align: center;
    height: auto;
    line-height: 160px;
    /* background: #364d79; */
    overflow: hidden;
  }
  .ant-carousel .slick-slide h3 {
    color: #fff;
  }
  h3 {
    text-align: center;
    font-size: 5vh;
  }
  h4 {
    font-size: 6vw;
  }
  .text-container {
    margin: 0 auto;
    border: 5%;
  }
  .footer {
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    .carouselandtext {
      display: flex;
      flex-direction: column-reverse;
      .carousel {
        margin: 0, auto;
        width: 100vw;
        text-align: center;
        .carouselpic {
          width: 100vw;
          border-radius: 8px;
          align-items: center;
        }
        img {
          display: flex;
          justify-content: center;
          margin-left: 28vw;
          width: 400px;
          border-radius: 8px;
        }
      }
    }
  }
  .social-media-icons {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-evenly;
    .top-row {
      display: flex;
      flex-direction: row;
    }
    .bottom-row {
      display: flex;
      flex-direction: row;
    }
    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: space-around;
      .top-row {
        display: flex;
        flex-direction: column;
      }
      .bottom-row {
        display: flex;
        flex-direction: column;
      }
    }

    .fa {
      padding: 40px;
      font-size: 20px;
      max-width: 300px;
      text-align: left;
      text-decoration: none;
      @media (max-width: 768px) {
        padding: 20px;
      }
    }
    .fa:hover {
      opacity: 0.7;
    }
    i {
      width: 100%;
    }
  }
`;
