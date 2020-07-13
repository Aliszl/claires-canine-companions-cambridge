import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import { Layout } from "antd";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Services from "./components/Services";
import About from "./components/About";
import Gallery from "./components/Gallery";
import { AppStyled } from "./styles/style";
import fullWidthDogPic from "./img/jackheadshot.jpeg";

import rowOfDogs from "./img/rowOfDogs.png";
import Walks from "./components/Walks";
import Boarding from "./components/Boarding";
import Daycare from "./components/Daycare";
import Grooming from "./components/Grooming";
import Retreats from "./components/Retreats";
import PuppyTraining from "./components/PuppyTraining";
import HomeSitting from "./components/HomeSitting";
import Holistic from "./components/Holistic";

const { Header, Content } = Layout;

function App() {
  return (
    <AppStyled id="top" className="App-header">
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
            <Route exact path="/services/homesitting">
              <HomeSitting />
            </Route>
            <Route exact path="/services/holistic">
              <Holistic />
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

        
        </div>
      </footer>
      <div>
        <a href="mailto:clairewalks@gmail.com?bcc=alisparklaw@gmail.com&subject=Dog%20Care%20Query&body=Hi%20Claire,%0D%0DI%20would%20like%20to%20enquire%20about%20one%20of%20your%20services" className="float">
          <i className="fa fa-envelope-o my-float"></i>
        </a>

        <a href="#top" className="float-up">
          <i className="fa  fa-angle-up my-float"></i>
        </a>
      </div>
    </AppStyled>
  );
}

export default App;
