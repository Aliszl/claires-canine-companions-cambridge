import styled from "styled-components";

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
  }
  .pcentralised{
    text-align: center;
    font-family: "Indie Flower", cursive;
    font-size: 1rem;
  }
  footer {
    /* position: fixed; */
    bottom: 0;
    width: 100%;
  }
  footer img {
    width: 100%;
    display: table;
    position: relative;
    margin: auto;
  }
  @media (max-width: 768px) {
    font-size: 0.5em;
  }
`;
export const StyledDiv = styled.div`
/* h1{
  font-size:2em;
} */
p{
  font-size:1.5em;
}
background-color: #fff;
  margin: 0 0 0 0;
  width: 100%;
  padding: 90px 20px 0 20px ;
 
  overflow: hidden;
li{
  margin:0 0 0 80px;
  text-align: left;
    font-family: "Indie Flower", cursive;
    font-size: 1rem;
}

  
    @media (max-width: 768px) {
      flex-direction: column;
      padding: 40px 10px 0 10px ;
      .headerCentralised {
    text-align: center;
    font-family: 'Indie Flower', cursive;
  font-size: 1rem;
 
  }
  
    }
  }


`;
