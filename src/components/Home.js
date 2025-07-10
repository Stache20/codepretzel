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
          <WebPretzelLogo height="300px" width="300px" />
        </div>
        <div style={{ margin: '2rem 0' }} />
        <motion.div variants={title} initial="hidden" animate="show">
          <h1 className="cover-heading">IT Consulting</h1>
          <h2>Helping businesses optimize their technology for efficiency and growth.

</h2>
        </motion.div>
        <div style={{ margin: '1rem 0' }} />
        <div className="container" style={{ marginTop: '3rem' }}>
          <motion.div
            variants={options}
            initial="hidden"
            animate="show"
            className="row justify-content-md-center"
          >
            <div className="col col-lg-2 align-self-center">
              <p className="lead">
                <a href="/about" className="btn btn-lg btn-dark">
                  About
                </a>
              </p>
            </div>
            <div className="col col-lg-2 align-self-center">
              <p className="lead">
                <a href="/services" className="btn btn-lg btn-dark">
                  Services
                </a>
              </p>
            </div>
            <div className="col col-lg-2 align-self-center">
              <p className="lead">
                <a href="/blog" className="btn btn-lg btn-dark">
                  Blog
                </a>
              </p>
            </div>
            <div className="col col-lg-2 align-self-center">
              <p className="lead">
                <a href="/contact" className="btn btn-lg btn-dark">
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
