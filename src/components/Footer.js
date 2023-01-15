import React from "react";
import CodePretzel from "./CodePretzelLogo";
import Linkedin from "./Linkedin";

function Footer() {
  return (
    <footer className="mastfoot mt-auto text-center">
      <div className="inner">
        <p>
          {" "}
          <CodePretzel height="30px" weight="30px" /> CodePretzel by Stefan
          Stahuber <Linkedin />
        </p>
      </div>
    </footer>
  );
}

export default Footer;
