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
  Hi, I'm Stefan!<br></br>
  I enjoy tackling complex problems, optimizing workflows, and leveraging technology to create impactful solutions.
</p>
<br></br>
<p>
  With a background in Azure administration, data reporting, and automation, I’ve worked on cloud infrastructure, SQL-based reporting, and process optimization. 
  I thrive on finding efficiencies and helping businesses make data-driven decisions.
</p>
<br></br>
<p>
  I have experience in front-end and back-end development, working with technologies like React, Node.js, and SQL.  
  I’m also deeply interested in **AI, automation, and cloud computing**, constantly exploring how emerging technologies can improve YOUR business operations.
</p>
<br></br>
<p>
  My goal is to develop scalable, high-performance solutions that bridge the gap between data, automation, and user experience.  
  Whether it's cloud migrations, SQL reporting, or AI-driven analytics, I'm always looking for innovative ways to push boundaries and improve efficiency.
</p>
<img className='stefanImg' height='300px' src={require("../images/desk.png")} alt='DeskPhoto'></img>
</motion.div>
     </div>
      </div>
  );

}

export default AboutStefan;
