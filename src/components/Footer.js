import React from "react";
import WebPretzelLogo from "./WebPretzelLogo";
import Linkedin from "./Linkedin";

function Footer() {
  return (
    <footer className="mastfoot mt-auto text-center">
      <div className="inner">
        <p>
          {" "}
          <WebPretzelLogo height="30px" weight="30px" /> WebPretzel by Stefan
          Stahuber <Linkedin />
        </p>
      </div>
    </footer>
  );
}

export default Footer;
