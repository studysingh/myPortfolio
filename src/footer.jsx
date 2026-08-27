import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-info">
      <a className="footer-name" href="#home">
        Sandeep Singh
      </a>
      <span className="footer-tagline">Software Engineer · AI Engineer</span>
    </div>

    <div className="footer-links" aria-label="Social links">
      <a
        className="footer-link"
        href="https://github.com/studysingh"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub profile"
      >
        <FiGithub size={18} aria-hidden="true" />
      </a>
      <a
        className="footer-link"
        href="https://www.linkedin.com/in/sandeep-singh-88304825b/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn profile"
      >
        <FiLinkedin size={18} aria-hidden="true" />
      </a>
      <a
        className="footer-link"
        href="mailto:sandeep.singh.pro8@gmail.com"
        aria-label="Send email"
      >
        <FiMail size={18} aria-hidden="true" />
      </a>
    </div>
  </footer>
);

export default Footer;
