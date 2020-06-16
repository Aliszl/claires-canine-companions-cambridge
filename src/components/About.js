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
        Claire's Canine Companions was established in 2010. <br />
        We are a close knit team of Cambridgeshire based dog walkers and
        sitters, lead by founder and namesake Claire Bloomfield. <br />
        As a team we are commited to regular ongoing training, with a rolling
        programme throughout the month and special speakers on topics such as
        Raw Feeding, Nutrition Dog Retreat weekends Puppy Classes, and Agility
        All the team were selected for their passion and expertise with dogs.
      </p>
      <br />
      <div className="image-left">
        <img src={clairePic} alt="claire" width="50%" />

        <p>
          Meet Claire. <br /> <br/>
           I grew up on my parent's working farm, surrounded by animals. I
          fed and mucked out the chickens, geese and horses and took a special
          interest in the training of gun dogs (predominently spaniels ). I have
          qualifications in canine first aid, puppy and dog training, animal
          communication, and I have a Dog Aggression Diploma.<br/> <br/> In addition I am a
          qualified &nbsp;
          <a href={"https://ttouch.com/"}>Tellington TTouch</a>, Canine Flow and
          Reiki for Dogs practitioner.
          <br />
        </p>
      </div>
      <div className="image-right">
        <img src={claire2} alt="claire" width="50%" />

        <p>
          Bio: <br /> She has qualifications in canine first aid, puppy
          and dog training, animal communication, and has a Dog Aggression
          Diploma. In addition she is a qualified &nbsp;
          <a href={"https://ttouch.com/"}>Tellington TTouch</a>, Canine Flow and
          Reiki practitioner.
          <br />
        </p>
      </div>
      <p>
        {" "}
        Fully insured Myself and my ladies are very passionate and dedicated to
        the work that we do, providing a healthy and happy lifestyle for your
        dogs whilst in our care, whether it being walks, daycare or boarding All
        boarding is done in the house rather than kennels so it is a very
        relaxed and natural homely environment I have dedicated 10 wonderful
        doggies years to ensuring that your dogs are in their element stress
        free and enjoying their dog lives Exciting new beginnings in 2021 Myself
        and my team with the help of my partner are creating a wonderful doggy
        creche based in Downham Market 8 acres of land, based within the
        fenland, with a sensory garden, doggy pool, chill out rooms, under floor
        heating in the doggy rooms, groom room with a wash bath for the pooches
        Fully cameraed so you can see what your dog has been up to. Electric and
        password front gates, monitored at all times This is an exciting time
        for the business with special speakers throughout the month, talks about
        Raw Feeding, Nutrition Dog Retreat weekends Puppy Classes, and Agility
        Services offered Half daycare, Full daycare Walks Grooming Boarding
        Retreats Puppy classes We are passionate about dogs. We have been
        providing a reliable, professional and flexible service, to act in loco
        parentis for your fur baby when you can't be with them, look no further.
        Tailored to the requirements of you and your dog we cover all aspects of
        dog care from regular walks to emergency vet visits. We understand dogs
        and ensure they have everything they need whilst in our care, so you can
        focus on your working day knowing they are happy and cared for. Our team
        structure means we can better optimise our groupings according to the
        dog's needs and be both flexible and reliable. I am based in and around
        Cambridge centre and surrounding villages, Girton , Cottenham, Fulbourn,
        Wilbraham and Sawston. I have 4 helpers who help cover the areas and
        home boarding. I provide a personable, friendly, professional and
        flexible service tailored to your needs and requirements for your dog's.
        Providing quality and lengthy dog walks out in the Cambridgeshire
        countryside
      </p>
    </StyledDiv>
  );
};

export default About;
