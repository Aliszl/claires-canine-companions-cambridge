import styled from "styled-components";
// import fullWidthDogPic from "../img/jackheadshot.jpeg";

export const HeaderStyle = styled.div`
  background-color: #fff;
  width: 100%;

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
    font-size: 4rem;
    @media(max-width: 768px){
      font-size: 2rem;
    }
  }
  .pcentralised{
    text-align: center;
    font-family: "Indie Flower", cursive;
    font-size: 1rem;
  }
  footer {
    /* background-image:url("jackheadshot.jpeg") */
    /* position: fixed; */
    bottom: 0;
    width: 100%;
    display:flex;
    justify-content:space-evenly
    /* .facebook{
      max-width:30px;
    } */
  }
  /* footer img {
    width: 100%;
    display: table;
    position: relative;
    margin: auto;
  } */
  .image-left{
    display:flex;
    flex-direction:row;
    padding-bottom: 5%;
    img{
      width:50%;
    }

    @media(max-width: 768px){
      flex-direction:column;
      img{
      width:100%;
    }

    }
  }
      
    .image-right{
    display:flex;
    flex-direction:row-reverse;
    img{
      width:50%;
    }
    @media(max-width: 768px){
      flex-direction:column;
      img{
      width:100%;
    }

  }
  @media (max-width: 768px) {
    font-size: 0.5em;
  }
`

export const StyledDiv = styled.div`
  h1 {
    font-family: "Indie Flower", cursive;
    font-size: 3em;
    @media (max-width: 768px) {
      font-size: 2em;
    }
  }
  h2 {
    font-family: "Indie Flower", cursive;
    font-size: 2em;
    @media (max-width: 768px) {
      font-size: 1em;
    }
  }
  h3 {
    font-family: "Indie Flower", cursive;
    font-size: 1em;
    @media (max-width: 768px) {
      font-size: 1em;
    }
  }
  h4 {
    font-family: "Indie Flower", cursive;
    font-size: 1em;
    @media (max-width: 768px) {
      font-size: 1em;
    }
  }
  p {
    font-size: 1.5em;
    @media (max-width: 768px) {
      font-size: 1em;
    }
  }
  background-color: #fff;
  margin: 0 0 0 0;
  width: 100%;
  padding: 90px 20px 0 20px;

  overflow: hidden;

  li {
    margin: 0 0 0 80px;
    text-align: left;
    font-family: "Indie Flower", cursive;
    font-size: 2rem;
    text-emphasis: bold;
    @media (max-width: 768px) {
      font-size: 1.5em;
      margin: 0 0 0 0;
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
    /* border:1px solid blue; */
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
        font-size: 1rem;
      }
    }
  }
     .social-media-icons{
     
       display:flex;
       flex-direction:row;
       flex-wrap:wrap;
       justify-content:space-evenly;
       @media (max-width: 768px) {
        flex-direction:column;
        justify-content:space-around;
       }
      }
         .fa {
    padding: 40px;
    font-size: 50px;
    max-width: 200px;
    text-align: center;
    text-decoration: none;
    @media (max-width: 768px) {
        padding:20px;
       }
  }
  .fa:hover {
    opacity: 0.7;
  }
  i{
    width:100%;
  }
`;
