import React from "react";
import { StyledDiv } from "../styles/style";

const Contact = () => {
  return (
    <StyledDiv>
      <div className="social-media-icons">
        <div className="top-row">
          <a href="tel:+447971489600">
            <i width="100%" class="fa fa-phone" aria-hidden="true">
              {" "}
              07971 489600
            </i>{" "}
          </a>
          <br />
          {/* <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=new?to:clairewalks@gmail.com"
           
          >
            <i class="fa fa-envelope-o" aria-hidden="true">
              {" "}
              clairewalks@gmail.com
            </i>
          </a> */}
          <a
            href="mailto:clairewalks@gmail.com?bcc=alisparklaw@gmail.com&subject=Dog%Care%Query%20&body=Hi%20Claire,%0D%0DI%20have%20a%20Website%20Query%20Contact%20details:"
           
          >
            <i class="fa fa-envelope-o" aria-hidden="true">
              {" "}
              clairewalks@gmail.com
            </i>
          </a>
        </div>
        <div></div>
        <div className="bottom-row">
          <a
            href="https://www.facebook.com/clairewalks/"
            className="fa fa-facebook"
          >
            {" "}
          </a>
          <a
            href="https://www.facebook.com/clairewalks/"
            className="fa fa-twitter"
          >
            {" "}
          </a>
          <a
            href="https://www.linkedin.com/in/claire-bloomfield-8434b016b/?originalSubdomain=uk"
            className="fa fa-linkedin"
          >
            {" "}
          </a>
          <a
            href=" https://wa.me/447971489600"
            className="fa fa-whatsapp"
          >
            {" "}
          </a>
          <a
            href="https://clairebloomfield.blogspot.com/"
            className="fa fa-link"
          >
            blog
          </a>
        </div>
        <div></div>
      </div>
    </StyledDiv>
  );
};

export default Contact;
