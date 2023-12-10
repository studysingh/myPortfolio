import { FaGithub } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-link">
        <a href="https://github.com/studysingh" target="blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/sandeep-singh-88304825b/"
          target="blank"
        >
          <BsLinkedin />
        </a>
        <a target="blank" href="https://www.instagram.com/sandeep_singh_mt/">
          <FaSquareInstagram />
        </a>
        <a href="mailto:studysingh707@gmail.com">
          <IoMdMail />
        </a>
      </div>
      <p>
        &copy; 2023 Sandeep Singh. All Rights Reserved. | Built with ReactJS
      </p>
    </footer>
  );
};
export default Footer;
