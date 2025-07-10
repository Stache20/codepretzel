// Reminder: Run 'npm install react-icons' in your project directory before using this component.
import React from "react";
import { motion } from "framer-motion";
import { FaCogs, FaRobot, FaDatabase, FaCode, FaRocket, FaCloud, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaTerminal, FaGit } from "react-icons/fa";
import "../style.css";

const services = [
  {
    icon: <FaCogs size={40} />, // Automation
    title: "Automation & Workflow Optimization",
    text: "Automate the grind. Streamline your workflow, cut the busywork, and let your business run smoother than ever.",
    delay: 0.2,
  },
  {
    icon: <FaRobot size={40} />, // AI
    title: "AI & Data Solutions",
    text: "Smarter decisions, powered by AI. Unlock insights and supercharge your strategy with cutting-edge data solutions.",
    delay: 0.4,
  },
  {
    icon: <FaDatabase size={40} />, // SQL
    title: "SQL & Database Management",
    text: "Data, organized and optimized. Custom queries, crystal-clear reports, and databases that just work.",
    delay: 0.6,
  },
  {
    icon: <FaCode size={40} />, // Web Dev
    title: "Web Development & Customization",
    text: "Websites that wow. Build, enhance, and customize your online presence for real results.",
    delay: 0.8,
  },
  {
    icon: <FaRocket size={40} />, // Code Optimization
    title: "Software & Code Optimization",
    text: "Code that flies. Turbocharge your software for speed, reliability, and future growth.",
    delay: 1.0,
  },
  {
    icon: <FaCloud size={40} />, // Cloud
    title: "Cloud & Infrastructure Consulting",
    text: "Cloud, but smarter. Optimize, migrate, and secure your infrastructure with expert guidance.",
    delay: 1.2,
  },
];

function ServiceCard({ icon, title, text, delay }) {
  const handleClick = () => {
    window.location.href = '/contact';
  };
  return (
    <motion.div
      className="service-card clickable"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.7, type: "spring" }}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
      tabIndex={0}
      role="button"
      aria-label={`Contact us about ${title}`}
    >
      <div className="service-card-content">
        <div className="service-card-icon">{icon}</div>
        <div className="service-card-text">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </div>
    </motion.div>
  );
}

function ContactCTA() {
  return (
    <div className="service-card contact-cta">
      <a href="./contact" style={{ textDecoration: "none" }}>
        <h1 style={{ color: '#fff', marginBottom: '1.5rem' }}>
          Contact us today to find out more about how we can help you with your project.
        </h1>
      </a>
      <div className="row" style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '1.2rem' }}>
        <FaHtml5 size={36} color="#e44d26" />
        <FaCss3Alt size={36} color="#1572b6" />
        <FaJs size={36} color="#f7df1e" />
        <FaReact size={36} color="#61dafb" />
      </div>
      <div className="row" style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
        <FaNodeJs size={36} color="#3c873a" />
        <FaDatabase size={36} color="#b0b0b0" />
        <FaTerminal size={36} color="#fff" />
        <FaGit size={36} color="#f34f29" />
      </div>
    </div>
  );
}

function ServiceContent() {
  return (
    <div className="service-cards-wrapper">
      {services.map((service, idx) => (
        <ServiceCard key={idx} {...service} />
      ))}
      <ContactCTA />
    </div>
  );
}

export default ServiceContent;
