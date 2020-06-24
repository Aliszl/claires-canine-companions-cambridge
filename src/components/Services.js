import React from "react";
import { StyledDiv } from "../styles/style";

import dogrunning from "../img/dogrunningwhitebackground.jpeg";
import daschund from "../img/daschund.jpeg";
import jumping from "../img/jumpingdog.jpeg";
import flyer from "../img/flyerrelaxdogclasses.jpg";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <StyledDiv style={{ background: "#fff" }}>
      <h2 className="headerCentralised">Services</h2>
      <p className="pcentralised">
        <ul>
          <Link to="/services/walks">
            {" "}
            <li>Walks</li>
          </Link>
          {/* <Link to="/services/grooming">
            {" "}
            <li>Grooming</li>
          </Link> */}
          <Link to="/services/daycare">
            {" "}
            <li>Daycare (full or half day)</li>
          </Link>

          <Link to="/services/boarding">
            {" "}
            <li>Boarding</li>
          </Link>
          {/* <Link to="/services/boarding">
            {" "}
            <li>Home Sitting</li>
          </Link> */}
          {/* <Link to="/services/retreats">
            {" "}
            <li>Retreats</li>
          </Link> */}

          <Link to="/services/puppyclasses">
            {" "}
            <li>Puppy Classes</li>
          </Link>
          <Link to="/services/puppyclasses">
            {" "}
            <li>Holistic Therapies</li>
          </Link>
        </ul>
      </p>
      <br />
      <div className="image-left">
        <img src={dogrunning} alt="dog running" width="50%" />

        <p>
          Walks <br /> <br />
          1 hour walk
          <br />
          £15 per hour (1 dog)
          <br />
          £20 per hour (2 dogs)
          <br />
          <br />
          An hours walk, means a full hours walk. We do not cut corners.
          <br />
          <br />
          We walk a maximum of 6 dogs at one time, though individual walks can
          sometimes be accomodated.
          <br />
          We put a lot of thought into the groupings of our dogs to maximise the
          enjoyment of everyone concerned.
          <br />
          We collect from Cambridge City and the surrounding villages.
          <br />
          <br />
        </p>
      </div>
      <div className="image-right">
        <img src={daschund} alt="claire" width="50%" />

        <p>
          Daycare, boarding, Home sitting and retreats
          <br /> <br />
          We offer full and half daycare to support working families.  We also offer 
          boarding in our own homes when you go on holiday or need overnight care.
          Boarding is done in our own homes,and unlike kennels
          is a relaxed and familiar environment.  We can also accomodate coming in to your home. 
           Our home sitting service suits some people better.  It is a walking and feeding package that includes
            <br />
             1-3 walks (according to dog),
            <br />
            feeding, watering plants and caring for your home,
            <br />
            plus text updates! <br />
        </p>
      </div>
      {/* <div className="image-left">
        <img src={dogrunning} alt="dog running" width="50%" />

        <p>
          Half Daycare <br /> <br />
          I grew up on my parent's working farm, surrounded by animals. I fed
          and mucked out the chickens, geese and horses and took a special
          interest in the training of gun dogs (predominently spaniels ). I have
          qualifications in canine first aid, puppy and dog training, animal
          communication, and I have a Dog Aggression Diploma.
          <br /> <br /> In addition I am a qualified &nbsp;
          <a href={"https://ttouch.com/"}>Tellington TTouch</a>, Canine Flow and
          Reiki for Dogs practitioner.
          <br />
        </p>
      </div> */}
      {/* <div className="image-right">
        <img src={daschund} alt="daschund" width="50%" />

        <p>
          Grooming
          <br /> She has qualifications in canine first aid, puppy and dog
          training, animal communication, and has a Dog Aggression Diploma. In
          addition she is a qualified &nbsp;
          <a href={"https://ttouch.com/"}>Tellington TTouch</a>, Canine Flow and
          Reiki practitioner.
          <br />
        </p>
      </div> */}

      {/* <div className="image-left">
        <img src={dogrunning} alt="dog running" width="50%" />

        <p>
          Boarding <br /> <br />
          Sitting £35 per day Holiday walking and feeding package Includes 1-3
          walks (according to dog), feeding, watering plants and caring for your
          home, plus text updates!  
        </p>
      </div> */}
      <div className="image-left">
        <img src={jumping} alt="jumping" width="50%" />

        <p>
          Retreats
          <br />
          Coming soon.{" "}
          <p>
            {" "}
            Comprehensive live in care. Respite for you, or rehabilitation for
            them in a wonderful doggy creche based in Downham Market 8 acres of
            land, based within the fenland, with a sensory garden, doggy pool,
            chill out rooms, under floor heating in the doggy rooms, groom room
            with a wash bath for the pooches Fully cameraed so you can see what
            your dog has been up to. Electric and password front gates,
            monitored at all times
          </p>
        </p>
      </div>
      <div className="image-left">
        <img src={flyer} alt="relax class flyer" width="50%" />

        <p>
          Holistic Therapies
          <br /> <br />I am a qualified &nbsp;
          <a href={"https://ttouch.com/"}>Tellington TTouch</a>, Canine Flow and
          Reiki for Dogs practitioner.
          <br />
          <br />
          One to one session
          <br />
          Spiralwork and training techniques.
          <br /> £25 for initial consultation. second session onwards £35 per
          hour. <br />
          Book a block of 5 sessions - £10 discount
          <br />
        </p>
      </div>

      <p>
        Reiki For Dogs <br />
        Dogs intuitively understand this technique and will sometimes present
        the part of their body they would like worked on, before even starting.
        This technique is really effective to help your dog come to terms with
        many traumatic situations they may have encountered, for example:
        <br />
        <br />
        Dog attack
        <br />
        Fireworks
        <br />
        Surgery
        <br />
        Veterinary Treatment
        <br />
        <br />
        It relaxes and calms your pet and helps you become more bonded. It can
        help with general relaxation, arthritis, tummy upsets, nerves and
        behaviourial issues
        <br /> <br />
        This simple technique has 3 main parts: <br />
        Breathing <br />
        Meditation <br />
        Spiral work using hands on or off your dog <br /> <br />
        These medatative practices help you and your dog to be at one with each
        other. Concentrating on the breath encourages you to let everything go,
        except your presence and your intent to help your dog/what you would
        like to change for them. These sessions are one to one or can be done in
        group sessions. <br />
        <br />
        Stewie's Story <br />
        Stewie's story perfectly illustrates the powerful effects possible from
        Canine Reiki. Stewie is a timid, nervous and very reactive Shiba Inu. He
        was caged for 4 years of his life, until a a client (Janice) rescued him
        and took him back to her Shiba rescue to help him find a loving forever
        home. Because of Stewie's past, he was very reactive and unpredictable
        and with no warning or indication of his intent, he would bite. Janice
        has never come across this and most dogs would be put to sleep, but she
        didnt give up. She contacted me and I went to meet her and Stewie. You
        couldn't touch him, brush him or wash him. I started to work with him
        from afar at first, with my intent to help him relaxing and open his
        heart chakra, and start to trust what I was doing. Using simple spiral
        movements from a distance, concentrating on his body. Within twenty
        mins, I could see him dropping and his eyes got heavy and he lay down
        and started to trust me. Slowly, but carefully I moved closer to him and
        finally after thirty minutes I was able to touch him, stroke him and
        reassure him that I was here to help. This was only in one session, it
        was amazing and I felt so overwhelmed that could help this beautiful
        boy.
        <br />
        <a href={"https://reikifed.co.uk/reiki-healing/animal-reiki/"}>
          More info here from UK Reiki Federation
        </a>
      </p>
    </StyledDiv>
  );
};

export default Services;
