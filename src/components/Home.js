import React from "react";
// import rowOfDogs from "../img/rowOfDogs.png";
import autumn from "../img/autumn.jpg";
import granchester from "../img/granchesterMeadows.jpg";
import paw from "../img/paw.png";
import popularStamp from "../img/popularStamp.png";
import { StyledDiv } from "../styles/style";
import { Link } from "react-router-dom";
import { Carousel } from "antd";


// const carouselImages = [
//   {
//    carouselImg: autumn
    
//   },
//   {
//     carouselImg: granchester
//   }];

const Home = () => {
  return (
    <StyledDiv>
      <h1>Dog Walking in Cambridge </h1>
      <h2>(and surrounding villages)</h2>
      <br />
      <ul>
        <li>Reliable and professional</li>
        <li>Flexible to your requirements and the needs of your dog</li>
        <li>Fully insured & first aid trained</li>
      </ul>
      <br />
      <h2>
        Providing quality and lengthy dog walks in the beautiful Cambridgeshire
        countryside since 2010{" "}
      </h2>
      <br />

      <div className="image-left">
        <img src={autumn} alt="autumn" />
        <h2>
          Having a full time job, time consuming responsibilities or mobility
          issues can make dog parenting difficult, and everybody needs time out
          from their fur baby sometimes. Let us 'take the lead'(Sorry ! ) <br />
          <br />
          If you are looking for a reliable, professional and flexible service,
          to act in loco parentis for your pup when you can't be with them, look
          no further.
        </h2>
      </div>

      <div className="image-right">
        <img src={granchester} alt="granchester meadows" />
        <h2>
          We offer all aspects of dog care from regular walks to emergency vet
          visits, tailored to your requirements and your dog's needs. <br /> We
          understand dogs and ensure they have everything they need whilst in
          our care, so you can focus on your working day knowing they are happy
          and cared for.
          <br /> Our team structure means we can better optimise our groupings
          according to the dog's needs and be both flexible and reliable. We
          will never let you down.
        </h2>
      </div>

      <br />
      <h2>We are passionate about dogs, and the outdoors.</h2>
      <br />
      <h1 className="headerCentralised">Our Services</h1>
      <div className="services-top-row services-row">
        <div className="servicesBox">
          <div className="servicesBox-header">
            <img src={paw} alt="paw" />
            <h1>Day Care</h1>
          </div>
          <h2>
            Full day doggy day care <br /> (9am to 4.30) £25
          </h2>
          <h2>
            Half day doggy day care <br /> £17.50
          </h2>
          <Link to="/services/daycare">Read More</Link>
        </div>
        <div className="servicesBox">
          <div className="servicesBox-header">
            <img src={paw} alt="paw" />
            <h1>Walks</h1>
            <img className="popularStamp" src={popularStamp} alt="" />
          </div>
          <h2>
            1 hour walk
            <br />
            £15 per hour 1 dog
            <br />
            £20 per hour 2 dogs
            <br />
            Including pick up and drop off.
          </h2>
          <Link to="/services/walks">Read More</Link>
        </div>

        <div className="servicesBox">
          <div className="servicesBox-header">
            <img src={paw} alt="" />
            <h1>Boarding</h1>
          </div>
          <h2>
            Over night stays. From a night to a fornight. All boarding is done
            in the house rather than kennels, so it is a very relaxed and homely
            environment
          </h2>
          <Link to="/services/walks">Read More</Link>
        </div>
      </div>

    
      <div className="services-middle-row services-row">
        <div className="servicesBox">
          <div className="servicesBox-header">
            <img src={paw} alt="paw" />
            <h1>Grooming</h1>
          </div>
          <h2>test</h2>
          <Link to="/services/daycare">Read More</Link>
        </div>
        <div className="servicesBox">
          <div className="servicesBox-header">
            <img src={paw} alt="" />
            <h1>Puppy Classes</h1>
          </div>
          <h2>test</h2>
          <Link to="/services/walks">Read More</Link>
        </div>
        <div className="servicesBox">
          <div className="servicesBox-header">
            <img src={paw} alt="paw" />
            <h1>Retreats</h1>
          </div>
          <h2>test</h2>
          <Link to="/services/walks">Read More</Link>
        </div>
      </div>
    
      <div className="services-middle-row services-row">
        <div className="servicesBox">
          <div className="servicesBox-header">
            <img src={paw} alt="" />
            <h1>Vet Visits</h1>
          </div>
          <h2> £10 base rate plus £10 per hour </h2>
          <Link to="/services/walks">Read More</Link>
        </div>

        <div className="servicesBox">
          <div className="servicesBox-header">
            <img src={paw} alt="paw" />
            <h1>Pet Taxi</h1>
          </div>
          <h2>Key/home collection service. £10 base rate plus £10 per hour</h2>
          <Link to="/services/walks">Read More</Link>
        </div>
        <div className="servicesBox">
          <div className="servicesBox-header">
            <img src={paw} alt="paw" />
            <h1>Home Sitting</h1>
          </div>
          <h2>
            Holiday walking and feeding package
            <br />
            Includes 1-3 walks (according to dog),
            <br />
            feeding, watering plants and caring for your home,
            <br />
            plus text updates! <br />
            £35 per day
          </h2>

          <Link to="/services/walks">Read More</Link>
        </div>
      </div>
      <div className="carouselandtext">
        <h1 className="headerCentralised">
          Testimonials
        </h1>
        </div>
      {/* <Carousel className="carousel" autoplay>
                   <div>
            <img src={carouselImages[0].carouselImg} alt="" />
          </div>
          <div>
            <img src={carouselImages[1].carouselImg} alt="" />
          </div>
       
        </Carousel> */}
    </StyledDiv>
  );
};

export default Home;


  //  {/* <div>
  //           <img src={carouselImages[2].carouselImg} alt="" />
  //         </div>
  //         <div>
  //           <img src={carouselImages[3].carouselImg} alt="" />
  //         </div>
  //         <div>
  //           <img src={carouselImages[4].carouselImg} alt="" />
  //         </div>
  //         <div>
  //           <img src={carouselImages[5].carouselImg} alt="" />
  //         </div> */}