import React from "react";
import { StyledDiv } from "../styles/style";
const Daycare = () => {
  return (
    <StyledDiv>
      <h2 className="headerCentralised">Daycare</h2>

      <p>
        Dogs are very social animals – they don’t like to be alone and need
        plenty of human companionship. Separation anxiety and behavioral issues
        can be the result if dogs are left alone. According to the&nbsp;
        <a
          href={
            "https://www.pdsa.org.uk/taking-care-of-your-pet/looking-after-your-pet/puppies-dogs/home-alone-preventing-separation-anxiety?_$ja=tsid:67827|cid:1722658706|agid:71001989514|tid:kwd-662310453009|crid:339116110936|nw:g|rnd:13155098584797493566|dvc:c|adp:|mt:e|loc:1006598&gclid=Cj0KCQjwoub3BRC6ARIsABGhnyYfPQhNPiYnhgWiA5sa08EBi2H27_PEZlyqa-VOuhdezgbVlWNe7wwaAhxfEALw_wcB"
          }
        >
          PDSA
        </a>
        , four hours is the longest that dogs should routinely be left alone
        for, but every dog will be different and 4 hours is much too long for
        some dogs. How long they can be left alone for depends on their
        temperament, how old they are and what they are used to. For example,
        four hours would generally be too long for a very active, young puppy
        but might be fine for an older dog. We offer full and half daycare
        options to support working families and make dog ownership a viable
        option, where time constraints would otherwise make it impossible.
      </p>
      <h2>
        Half day doggy day care <br /> (9am-1pm or 12-4.30) £17.50
        <br />
        Includes 1 walk
      </h2>
      <br />
      <h2>
        Full day doggy day care <br /> (9am to 4.30) £25
        <br />
        Includes 2 walks <br />
        <br />
        Alternative timings may be accomodated on request
      </h2>
    </StyledDiv>
  );
};

export default Daycare;
