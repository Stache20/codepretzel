import React from "react";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";
 

function AboutStefan() {

    function smoothScroll(e) {
      let scroll = document.getElementById("introduction");
      e.preventDefault(); // Stop Page Reloading
      scroll && scroll.scrollIntoView({ behavior: "smooth" });
    }

    const fadeIn = {
      visible: { opacity: 1,  transition: { delay: 0.5 } },
      hidden: { opacity: 0,  },
    };
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    }, [control, inView]);
  
    const title = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {delay: 0.5,
        },
      },
    };
  
    const titleSecond = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {delay: 1,
        },
      },
    };
  
    const titleThird = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {delay: 2,
        },
      },
    };

   

 


  return (
    <div>
      <motion.div variants={title} initial="hidden" animate="show" className="mobileSpace about title text-center">
        <h1>What's a WebPretzel?</h1>
      </motion.div>

      <div className="justify-content-center aboutContent">
        <motion.div variants={titleSecond} initial="hidden" animate="show" className=" col-sm text-center"><img className='' height='350px' src={require("../images/stefan.png")} alt='ownerPhoto'></img></motion.div>
        <br></br><div className='text-center'>
        <motion.div variants={titleThird} initial="hidden" animate="show"><h3>A man and his computer!</h3> </motion.div> 
          <svg
          onClick={smoothScroll}
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 16 16"
          className="divider__arrow"
          height="1em"
          width="1em"
        >
          <path
            fill-rule="evenodd"
            d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"
          ></path>
                  </svg>

          </div>
     </div>
  

     <div id='introduction'  className=" text-center aboutContent">

     <motion.div
     ref={ref}
        variants={fadeIn}
        initial="hidden"
        animate={control}
         className="mobileSpace  ">

          <p>
            My name is Stefan and I code!<br></br>
           I code because I enjoy the challenge of problem solving and creating something from nothing.
           
          
          </p>
          <br></br>
          <p>It's very satisfying to take an idea and turn it into a functioning program. 
          I also love how coding has enabled me to collaborate with people from all over the world, 
            sharing ideas and working together to create something amazing.</p>
        <br></br>
      
          <p>I have a strong background in both front-end and back-end development, and I am comfortable working with a variety of development tools and frameworks, such as HTML, CSS, JavaScript, React, Node.js, and MongoDB.</p>
          <br></br>
          <p> I am also knowledgeable in the areas of UI/UX design, software architecture, and cloud computing. My goal is to develop websites and web applications that are both aesthetically pleasing and functionally robust. I am constantly striving to stay ahead of the curve and am always looking for ways to improve my development process.</p>
          <img classname='stefanImg' height='300px' src={require("../images/desk.png")} alt='DeskPhoto'></img>

        </motion.div>
     </div>
      </div>
  );
}

export default AboutStefan;
