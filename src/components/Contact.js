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

 


  return (
    <div>
      <Header />
    <div className="coverPage">
      <motion.div
      variants={title} initial="hidden" animate="show"
       className="inner cover text-center">
        <h3>Transform Your Vision into Reality</h3>
        <div className="mobile">
          <WebPretzelLogo width="300px" height="300px" />
        </div>
      </motion.div>
      
      <motion.div
      variants={titleSecond} initial="hidden" animate="show"
       className="box">
      <div>
        <ContactForm />
        </div>
        </motion.div>
        </div>
      <Footer />
    </div>
  );
}

export default Contact;
