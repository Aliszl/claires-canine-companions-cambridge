import React from "react";
// import logo from './logo.svg';
import "./App.css";
import { Route, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import { Layout } from "antd";
// import styled from "styled-components";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Contact from "./components/Contact"
import Services from "./components/Services";
import About from "./components/About";
import Gallery from "./components/Gallery";
import { AppStyled } from "./styles/style";
import fullWidthDogPic from "./img/jackheadshot.jpeg";


import rowOfDogs from "./img/rowOfDogs.png";
import Walks from "./components/Walks";
import Boarding from "./components/Boarding";
import Daycare from "./components/Daycare";
// import ServicesNav from "./components/ServicesNav";
import Grooming from "./components/Grooming";
import Retreats from "./components/Retreats";
import PuppyTraining from "./components/PuppyTraining";

const { Header, Content } = Layout;

function App() {
  return (
    <AppStyled className="App-header">
      <div className="headerCentralised">Claire's Canine Companions</div>
      <div className="image">
        <img className="rowOfDogs" src={rowOfDogs} alt="dogs" />
      </div>
      <Layout>
        <Header style={{ backgroundColor: "#fff" }}>
          <Navigation style={{ paddingBottom: "20px" }} />
        </Header>

        <Content className="">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/services">
              {/* <ServicesNav /> */}
              <Services />
            </Route>
            <Route exact path="/services/walks">
              <Walks />
            </Route>
            <Route exact path="/services/daycare">
              <Daycare />
            </Route>
            <Route exact path="/services/boarding">
              <Boarding />
            </Route>
            <Route exact path="/services/retreats">
              <Retreats />
            </Route>
            <Route exact path="/services/grooming">
              <Grooming />
            </Route>
            <Route exact path="/services/puppyclasses">
              <PuppyTraining />
            </Route>
            <Route exact path="/services/keycollection">
              <Home />
            </Route>
            <Route exact path="/gallery">
              <Gallery />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/holistic/reiki">
              <Home />
            </Route>
           

          </Switch>
        </Content>
      </Layout>
      <footer>
        <div className="jackHeadshotDiv">
          <img className="jackHeadshot" src={fullWidthDogPic} alt="dog" />

      

          {/* <img className="facebook" src={facebook} alt="icon" /> */}
        </div>
      </footer>
    </AppStyled>
  );
}

export default App;
