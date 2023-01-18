import React, { useState } from "react";
import Header from "./Navbar";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import CodePretzelLogo from "./CodePretzelLogo";

function Contact() {
  return (
    <div>
      <Header />
      <div className="box">
      <h3>Transform Your Vision into Reality with Professional Web Services and bring your ideas alive </h3>
      <br></br>
      <h6>Our services include website design, application development, content management, e-commerce solutions, and more. </h6>
      <br></br>
      <h6>We use the latest technologies and tools to ensure that your website is responsive, secure, and performs well. Our team of experienced professionals is committed to helping you create an online presence that is tailored to your unique needs and objectives.</h6>

      </div>
      <div className="rowC">
        <div className="mobile">
          <CodePretzelLogo width="300px" height="300px" />
        </div>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
