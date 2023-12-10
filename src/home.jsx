import { Link } from "react-router-dom";

const Home = () => {
  // imageBasePath gives us the path of the images folder from the root directory
  var imageBasePath =
    window.location.protocol +
    "//" +
    window.location.host +
    "/myPortfolio/public/images/";
  return (
    <>
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
            <Link className="ap-link-2" to="/myPortfolio/projects">
              Project
            </Link>
          </div>
        </div>
        <img
          className="abovePageImg"
          src={imageBasePath + "pgabove.png"}
          alt="img1"
        />
      </section>{" "}
      <section className="belowPage">
        <img
          className="belowPageImg"
          src={imageBasePath + "pgbelow.png"}
          alt="img2"
        />
        {/* <img className="product-img" src="./images/myntra1.png" alt="myntra" /> */}
        <div className="belowPageContent">
          <h1 className="bp-heading">Let's Introduce About Myself</h1>
          <div className="bp-description">
            <p>
              I am Currently pursuing Bachelor of Technology in Computer Science
              and Engineering at IIT(BHU) Varanasi.
            </p>
            <Link className="learn-more" to="/myPortfolio/about">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
