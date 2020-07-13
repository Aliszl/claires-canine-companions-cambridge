import React from "react";
import { StyledDiv } from "../styles/style";
import clairePic from "../img/claire.jpg";
import claire2 from "../img/claire2.jpg";
import william from "../img/william.jpg";
import williamandclaire from "../img/williamandclaire.jpg";
import spock from "../img/spock.jpg";

const About = () => {
  return (
    <StyledDiv>
      <h2 className="headerCentralised">About</h2>
      <p >
        Claire's Canine Companions was established in 2010. <br /><br />
        We are a close knit team of Cambridgeshire based dog walkers and
        sitters, lead by founder and namesake Claire Bloomfield. <br /><br />
        As a team we are commited to regular ongoing training,
         with special speakers throughout the year on topics such 
         as raw Feeding, nutrition, dog retreat weekends,
          puppy Classes, and agility.<br/><br/>
        All the team were selected for their passion and expertise with dogs.
         We currently have 5 team members.
      </p>
      <br />
      <div className="lefthanded">
        <img className="image-left"src={clairePic} alt="claire" width="50%" />

        <p className="text-right">
         Bio. (Meet Claire) <br /> <br/>
           I grew up on my parent's working horticultural farm, surrounded by animals. I
          fed and mucked out the chickens, geese and horses and took a special
          interest in the training of gun dogs (predominently spaniels).<br/><br/>

       
         
        </p>
      </div>
      <div className="righthanded">
        <img className="image-right"src={claire2} alt="claire" width="50%" />

        <p className="text-left">
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
      <div>
     <h1>My own dogs
       </h1> 
          <br/>
          <p>

          My first dog William was a retired racing greyhound.   
He was a rescue dog living in Cambridge with his previous owners and I was his dog walker. We automatically connected, so when his owners moved abroad I volunteered to adopt William.
<br/>
 When he arrived, they were told by Wood Green, that he could never be near cats or children and never be let off the lead, however I could see something in William and we trusted each other fully.
Through William and his rehabilitation, I learnt about the holistic animal path that I am sharing with dog owners today and for that I will be eternally thankful.
He had an amazing temperament, gentle and patient with dogs, cats and children and the 7 years that I had him were just unforgettable. <br/>
 He passed away in April 2019 from bone cancer at 11 years of age.
 <br/> <br/>
My second dog Spock is a feisty Parsons Jack Russell.  He was also adopted from clients for whom I dog walked. 
<br/>
Spock was 4 months old when I first started walking him and when I heard his owners were looking to rehome him, I automatically knew that he was coming to live with me. 
We had a bond from our walks and he always looked pleased to see us.
<br/>
He is now 4 years old. He came to live with me in July 2019 not long after losing William.
   
I needed to do some work with him, he was nervous around men and had a few behavioural issues related to boredom.  He needed more stimulation 
than he was getting to reach his full potential and grow into the amazing dog that he is today.
He has taught me very different lessons from William, with him we built trust by going back to
 basic training and sealed our bond with tons of active play and fun.
Spock also needed to learn to trust a male living in the house when I moved in with my 
partner, which he has done amazingly well.
<br/>
We also have 5 cats between us.
          </p>
      <img src={william} alt="william" width="30%" />
      <img src={williamandclaire} alt="william" width="30%" />
      <img src={spock} alt="william" width="30%" />
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
