import React from "react";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

function ServiceContent() {
  function smoothScroll(e) {
    let scroll = document.getElementById("bottom");
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
    <div className="container text-center">
      <div className="serviceBox">
      <motion.div variants={title} initial="hidden" animate="show">
        <h1>A Solution for every need.</h1>
        </motion.div>
        <br></br>
        <motion.div variants={titleSecond} initial="hidden" animate="show">
        <p>
        ✅ Automation & Workflow Optimization – Streamlining processes to reduce manual work and improve efficiency. <br></br>
✅ AI & Data Solutions – Leveraging AI tools and data analytics for smarter decision-making. <br></br>
✅ SQL & Database Management – Custom queries, reporting, and database optimization.
        </p>
        </motion.div>
        <br></br>
        <motion.div variants={titleThird} initial="hidden" animate="show">
        <p>
        ✅ Web Development & Customization – Building and enhancing websites and web applications.<br></br>
✅ Software & Code Optimization – Improving existing software for better performance and functionality.<br></br>
✅ Cloud & Infrastructure Consulting – Optimizing cloud environments, migrations, and security.
        </p>
        <svg
          onClick={smoothScroll}
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 16 16"
          class="divider__arrow"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"
          ></path>
        </svg>
        </motion.div>
      </div>

      <motion.div
        ref={ref}
        variants={fadeIn}
        initial="hidden"
        animate={control}
        id="bottom"
        className="serviceBox"
      >
        <a href="./contact">
          <h1>
            Contact us today to find out more about how we can help you with
            your project.
          </h1>
        </a>
        <br></br>
        <div className="row ">
          <div className="col">
            <i className="fab fa-html5 fa-3x"></i>
          </div>
          <div className="col">
            <i className="fa-brands fa-css3-alt fa-3x"></i>
          </div>
          <div className="col">
            <i className="fa-brands fa-js fa-3x"></i>
          </div>
          <div className="col">
            <i className="fa-brands fa-react fa-3x"></i>
          </div>
        </div>
        <br></br>

        <div className="row">
          <div className="col">
            <i className="fab fa-node-js fa-3x"></i>
          </div>
          <div className="col">
            <i className="fas fa-database fa-3x"></i>
          </div>
          <div className="col">
            <i className="fas fa-terminal fa-3x"></i>
          </div>
          <div className="col">
            <i className="fab fa-git fa-3x"></i>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ServiceContent;
