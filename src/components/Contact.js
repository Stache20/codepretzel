import React from "react";
import Header from "./Navbar";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import WebPretzelLogo from "./WebPretzelLogo";
import { motion } from "framer-motion";

function Contact() {

  

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
  
  const titleFourth = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {delay: 2.5,
      },
    },
  };



  return (
    <div>
      <Header />

      <div className="box">
      <motion.div
      variants={title} initial="hidden" animate="show">
      <h3>Transform Your Vision into Reality</h3>
      </motion.div>
      <br></br>
      <motion.div></motion.div>
      </div>



      <motion.div
      variants={titleFourth} initial="hidden" animate="show"
       className="rowC">
        <div className="mobile">
          <WebPretzelLogo width="300px" height="300px" />
        </div>
        <ContactForm />
      </motion.div>
      <Footer />
    </div>
  );
}

export default Contact;
