import { Link } from "react-router-dom";
const AbovePageSection = () => {
  return (
    <section className="abovePage">
      <div className="abovePageContent">
        <div className="ap-l1 ap">Hello ______________________________</div>
        <div className="ap-l2 ap">I am sandeep singh</div>
        <div className="ap-l3 ap">MERN FULL STACK DEVELOPER</div>
        <div className="ap-l4 ap">
          <a
            className="ap-link-1"
            target="blank"
            href="https://drive.google.com/file/d/1S6NR4Kso670Qhk-zq3xI0NQjrapFfiPU/view?usp=drivesdk"
          >
            Get CV
          </a>
          <Link className="ap-link-2" to="/portfolio/projects">
            Project
          </Link>
        </div>
      </div>
      <img className="abovePageImg" src="./images/pgAbove.png" alt="" />
    </section>
  );
};
export default AbovePageSection;
