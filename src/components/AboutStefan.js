import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { motion } from "framer-motion";
import "../style.css";

const experience = [
  {
    title: "Application Engineer",
    company: "System Logistics (Krones Group)",
    date: "Jan 2025 - Present",
    location: "Montreal, Quebec, Canada",
  },
  {
    title: "Cloud Administrator",
    company: "Jonas Software",
    date: "Jul 2021 - Mar 2025",
    location: "Vancouver, BC, Canada",
  },
  {
    title: "Technical Solutions Specialist - Key Account support",
    company: "Jonas Software",
    date: "Mar 2020 - Jul 2021",
    location: "Vancouver, BC, Canada",
  },
  {
    title: "Sales Representative",
    company: "Pacific Bottleworks Company",
    date: "Jan 2019 - Mar 2020",
    location: "Fort Langley, BC, Canada",
  },
  {
    title: "Account Manager",
    company: "Filcon Electronic GmbH",
    date: "Jan 2016 - Jan 2019",
    location: "Taufkirchen, Germany",
  }
];

const education = [
  {
    school: "Akademie Handel München",
    degree: "Bachelor Professional Trade and Commerce (CCI)",
    years: "2018 - 2019",
  },
  {
    school: "Berufsschule 2 Rosenheim",
    degree: "Diploma Administrative Management (College Diploma)",
    years: "2011 - 2014",
  },
];

function AboutStefan() {
  return (
    <motion.div
      className="aboutpro-section"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
    >
      <div className="aboutpro-container">
        <div className="aboutpro-photo">
          <img src={require("../images/stefan.png")} alt="Stefan Stahuber" height="260" style={{ borderRadius: '1.2rem', width: '100%', maxWidth: 260, objectFit: 'cover' }} />
        </div>
        <div className="aboutpro-main">
          <h1 className="aboutpro-name">Stefan Stahuber</h1>
          <h2 className="aboutpro-title">IT Specialist</h2>
          <p className="aboutpro-intro">
            Hi, I'm Stefan! I enjoy tackling complex problems, optimizing workflows, and leveraging technology to create impactful solutions.<br />
            With a background in Azure administration, data reporting, and automation, I thrive on finding efficiencies and helping businesses make data-driven decisions.<br />
            My goal is to develop scalable, high-performance solutions that bridge the gap between data, automation, and user experience.
          </p>
          <div className="aboutpro-contact">
            <a href="mailto:stahuberstefan@hotmail.com" className="aboutpro-contact-link"><HiOutlineMail /> stahuberstefan@hotmail.com</a>
            <a href="tel:+12363356526" className="aboutpro-contact-link"><FiPhone /> +1 236-335-6526</a>
            <a href="https://www.linkedin.com/in/stefan-stahuber/?locale=en_US" target="_blank" rel="noopener noreferrer" className="aboutpro-contact-link"><FaLinkedin /> LinkedIn</a>
            <a href="https://github.com/Stache20" target="_blank" rel="noopener noreferrer" className="aboutpro-contact-link"><FaGithub /> GitHub</a>
          </div>
          <div className="aboutpro-languages">
            <span>English (Native)</span>
            <span>German (Native)</span>
            <span>French (Intermediate)</span>
          </div>
          <div className="aboutpro-buttons">
            <a href="/Resume%20Stefan%20Stahuber.pdf" className="btn btn-lg btn-dark aboutpro-btn" download>Download Resume</a>
            <a href="/contact" className="btn btn-lg btn-dark aboutpro-btn">Let's Connect</a>
          </div>
        </div>
      </div>
      <div className="aboutpro-details">
        <div className="aboutpro-experience">
          <h3>Experience</h3>
          <ul className="aboutpro-list">
            {experience.map((exp, idx) => (
              <li key={idx} className="aboutpro-list-item">
                <span className="aboutpro-list-title">{exp.title}</span> <span className="aboutpro-list-company">@ {exp.company}</span><br />
                <span className="aboutpro-list-date">{exp.date}</span> <span className="aboutpro-list-location">| {exp.location}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="aboutpro-education">
          <h3>Education</h3>
          <ul className="aboutpro-list">
            {education.map((edu, idx) => (
              <li key={idx} className="aboutpro-list-item">
                <span className="aboutpro-list-title">{edu.degree}</span><br />
                <span className="aboutpro-list-company">{edu.school}</span> <span className="aboutpro-list-date">({edu.years})</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutStefan;
