import React from "react";
import WebPretzelLogo from "./WebPretzelLogo";
import Linkedin from "./Linkedin";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="mastfoot mt-auto text-center">
      <div className="inner">
        <p>
          {" "}
          <WebPretzelLogo height="30px" width="30px" /> WebPretzel by Stefan
          Stahuber <Linkedin />{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Stache20"
            style={{ color: "#fff", marginLeft: "0.5rem", fontSize: "1.2em" }}
          >
            <FaGithub />
            <span className="sr-only">GitHub</span>
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
