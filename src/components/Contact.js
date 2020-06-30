import React from "react";
import { StyledDiv } from "../styles/style";

const Contact = () => {
  return (
    <StyledDiv>
      <div className="social-media-icons">
        <div className="top-row">
        <a href="tel:+44-7971-489-600">
          <i width="100%" class="fa fa-phone" aria-hidden="true">
            {" "}
            07971 489600
          </i>{" "}
          </a>
          <br />
          <a href="">

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
            href="https://www.linkedin.com/in/claire-bloomfield-8434b016b/?originalSubdomain=uk"
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
