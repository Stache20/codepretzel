import React from "react";
import Header from "./Navbar";
import Footer from "./Footer";

function AboutStefan() {
  return (
    <div>
      <div className="mobileSpace about title text-center">
        <h2>What's a CodePretzel?</h2>
      </div>

      <div className="container-fluid row d-flex justify-content-center aboutContent">
        <div className="mobileSpace col-sm"><img src={require("../images/meImg.png")} alt='ownerPhoto'></img></div>
        <div className="mobileSpace col-sm">
          <h4>Short</h4>
          <p>A man and his computer!</p>
          <p>
            My name is Stefan and I code!<br></br>
           I code because I enjoy the challenge of problem solving and creating something from nothing.
           
          
          </p>
          <br></br>
          <p>It's very satisfying to take an idea and turn it into a functioning program. 
          I also love how coding has enabled me to collaborate with people from all over the world, 
            sharing ideas and working together to create something amazing.</p>
        </div>
        <div className=" mobileSpace col-sm">
          <h4>Long</h4>
          <p>
            Hi I'm Stefan! The face behind CodePretzel.<br></br> <br></br>As a full stack web developer, I am a highly motivated individual who is passionate about creating innovative and user-friendly web applications. {" "}
          </p>
          <br></br>
          <p>I have a strong background in both front-end and back-end development, and I am comfortable working with a variety of development tools and frameworks, such as HTML, CSS, JavaScript, React, Node.js, and MongoDB.</p>
          <br></br>
          <p> I am also knowledgeable in the areas of UI/UX design, software architecture, and cloud computing. My goal is to develop websites and web applications that are both aesthetically pleasing and functionally robust. I am constantly striving to stay ahead of the curve and am always looking for ways to improve my development process.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutStefan;
