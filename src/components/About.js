import React from "react";
import { StyledDiv } from "../styles/style";
import clairePic from "../img/claire.jpg";
import claire2 from "../img/claire2.jpg";
// import autumn from "../img/autumn.jpg";

const About = () => {
  return (
    <StyledDiv>
      <h2 className="headerCentralised">About</h2>
      <p className="pcentralised">
        Claire's Canine Companions was established in 2010. <br /><br />
        We are a close knit team of Cambridgeshire based dog walkers and
        sitters, lead by founder and namesake Claire Bloomfield. <br /><br />
        As a team we are commited to regular ongoing training, with a rolling
        programme throughout the month and special speakers on topics such as
        Raw Feeding, Nutrition, Dog Retreat weekends, Puppy Classes, and Agility
        All the team were selected for their passion and expertise with dogs.
         We currently have 5 team members.
      </p>
      <br />
      <div className="image-left">
        <img src={clairePic} alt="claire" width="50%" />

        <p>
         Bio. (Meet Claire) <br /> <br/>
           I grew up on my parent's working farm, surrounded by animals. I
          fed and mucked out the chickens, geese and horses and took a special
          interest in the training of gun dogs (predominently spaniels ).<br/><br/>
        Qualifications <br /> <br/>
          I have qualifications in canine first aid, puppy and dog training, animal
          communication, and I have a Dog Aggression Diploma.<br/> <br/> In addition I am a
          qualified &nbsp;
          <a href={"https://ttouch.com/"}>Tellington TTouch</a>, Canine Flow and
          Reiki for Dogs practitioner.
          <br />
          I have dedicated 10 wonderful years to ensuring that your dogs 
          are stress free and enjoying their lives.
        </p>
      </div>
      <div className="image-right">
        <img src={claire2} alt="claire" width="50%" />

        <p>
        I have qualifications in canine first aid, puppy and dog training, animal
          communication, and I have a Dog Aggression Diploma.<br/> <br/> In addition I am a
          qualified &nbsp;
          <a href={"https://ttouch.com/"}>Tellington TTouch</a>, Canine Flow and
          Reiki for Dogs practitioner.
          <br />
          I have dedicated 10 wonderful years to ensuring that your dogs 
          are stress free and enjoying their lives.
        </p>
      </div>
      <p>
        {" "}
      We are all passionate and dedicated to our canine companions. We give our full attention to keeping our charges healthy and happy 
         whilst in our care, whether it be walks, daycare or boarding.<br/><br/>
        
        I am based in and around Cambridge (the city centre and surrounding villages). My 4 helpers cover the villages( Girton , Cottenham, Fulbourn,
        Wilbraham and Sawston) and help with home boarding. 
      </p>
    </StyledDiv>
  );
};

export default About;
