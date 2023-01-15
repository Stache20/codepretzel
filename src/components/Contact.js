import React, { useState } from "react";
import Header from "./Navbar";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import CodePretzelLogo from "./CodePretzelLogo";

function Contact() {
  return (
    <div>
      <Header />
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
