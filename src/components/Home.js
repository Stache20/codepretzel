import React from "react";
import WebPretzelLogo from "./WebPretzelLogo";
import { motion } from "framer-motion";

function Home() {
  const title = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 1,
      },
    },
  };

  const options = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 2,
      },
    },
  };

  return (
    <div className="coverPage">
      <main role="main" className="inner cover text-center">
        <div className="">
          <WebPretzelLogo height="300px" weight="300px" />
        </div>
        <br></br>
        <br></br>
        <motion.div variants={title} initial="hidden" animate="show">
          <h1 className="cover-heading">IT Consulting</h1>
          <h2>Helping businesses optimize their technology for efficiency and growth.

</h2>
        </motion.div>
        <br></br>
        <div className="container">
          <motion.div
            variants={options}
            initial="hidden"
            animate="show"
            className="row justify-content-md-center"
          >
            <div className="col col-lg-2 align-self-center">
              <p className="lead">
                <a href="/about" class="btn btn-lg btn-dark">
                  About
                </a>
              </p>
            </div>
            <div className="col-md-auto align-self-center">
              <p className="lead">
                <a href="/services" class="btn btn-lg btn-dark">
                  Services
                </a>
              </p>
            </div>
            <div className="col col-lg-2 align-self-center">
              <p className="lead">
                <a href="/contact" class="btn btn-lg btn-dark">
                  Contact
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default Home;
