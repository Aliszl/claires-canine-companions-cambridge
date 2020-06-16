import styled from "styled-components";

export const WholeAppStyled = styled.div`
  background-color: #fff;
  width: 100%;
  .headerCentralised {
    text-align: center;
    font-size: 3em;
  }
  .rowOfDogs {
    margin: 0;
    max-width: 100%;
    height: auto;
    width: 100%;
    align-items: center;
    align-self: center;
  }
  footer {
    /* position: fixed; */
    bottom: 0;
    width: 100%;
    border: red solid 1px;
  }
  footer img {
    width: 100%;
    display: table;
    position: relative;
    margin: auto;
    border: red solid 1px;
  }
  @media (max-width: 768px) {
    /* flex-direction: column; */
    /* background-color:blue; */
    font-size: 0.5em;
  }
`;
export const StyledDiv = styled.div`
h1{
  font-size:2em;
}
p{
  font-size:1.5em;
}
background-color: #fff;
  margin: 0 0 0 0;
  width: 100%;
  padding: 90px 20px 0 20px ;
  /* border: rgb(51, 102, 153) 2px solid;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22); */
  overflow: hidden;
  /* .fixed-ratio-resize {
    margin: 0 auto;
    max-width: 90%;
    height: auto;
    width: auto;
  } */
  /* .content {
    display: flex;
    flex-direction: row;
    line-height:2.5;
    line-height:2.5; */

  
    @media (max-width: 768px) {
      flex-direction: column;
      padding: 40px 10px 0 10px ;
    }
  }

  /* &:hover {
    background-color: rgba(216, 229, 243, 0.2);
  } */
`;
