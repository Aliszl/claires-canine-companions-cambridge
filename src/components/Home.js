import React from "react";
// import rowOfDogs from "../img/rowOfDogs.png";
import autumn from "../img/autumn.jpg";
import granchester from "../img/granchesterMeadows.jpg";
import paw from "../img/paw.png";
import { StyledDiv } from "../styles/style";
import { Link } from "react-router-dom";

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
      <div className="services-top-row services-row">
        <div className="servicesBox">
          <div className="servicesBox-header">
            <img src={paw} alt="paw" />
            <h1>Walking</h1>
          </div>
          <h2></h2>
          <Link to="/services/walks">Read More</Link>
        </div>

        <div className="servicesBox">
          <div className="servicesBox-header">
            <img src={paw} alt="" />
            <h1>Boarding</h1>
          </div>
          <h2></h2>
          <Link to="/services/walks">Read More</Link>
        </div>
        <div className="servicesBox">
          <div className="servicesBox-header">
            <img src={paw} alt="paw" />
            <h1>Day Care</h1>
          </div>
          <h2></h2>
          <Link to="/services/walks">Read More</Link>
        </div>
      </div>

      <p>
        providing a healthy and happy lifestyle for your dogs whilst in our
        care, whether it being walks, daycare or boarding All boarding is done
        in the house rather than kennels so it is a very relaxed and natural
        homely environment I have dedicated 10 wonderful doggies years to
        ensuring that your dogs are in their element stress free and enjoying
        their dog lives Exciting new beginnings in 2021 Myself and my team with
        the help of my partner are creating a wonderful doggy creche based in
        Downham Market 8 acres of land, based within the fenland, with a sensory
        garden, doggy pool, chill out rooms, under floor heating in the doggy
        rooms, groom room with a wash bath for the pooches Fully cameraed so you
        can see what your dog has been up to. Electric and password front gates,
        monitored at all times This is an exciting time for the business with
        special speakers throughout the month, talks about Raw Feeding,
        Nutrition Dog Retreat weekends Puppy Classes, and Agility Services
        offered Half daycare, Full daycare Walks Grooming Boarding Retreats
        Puppy classes
      </p>
    </StyledDiv>
  );
};

export default Home;
