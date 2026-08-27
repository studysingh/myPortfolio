import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div>
        <a className="footer-brand" href="#home">
          Sandeep Singh
        </a>
        <p>Software Engineer focused on backend systems, cloud infrastructure, and applied AI workflows.</p>
      </div>
      <div className="footer-links" aria-label="Social links">
        <a href="https://github.com/studysingh" target="_blank" rel="noreferrer" aria-label="GitHub profile">
          <FiGithub aria-hidden="true" />
        </a>
        <a
          href="https://www.linkedin.com/in/sandeep-singh-88304825b/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile"
        >
          <FiLinkedin aria-hidden="true" />
        </a>
        <a href="mailto:sandeep.singh.pro8@gmail.com" aria-label="Email Sandeep Singh">
          <FiMail aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
