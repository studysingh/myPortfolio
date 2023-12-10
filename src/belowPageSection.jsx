import { Link } from "react-router-dom";
const BelowPageSection = () => {
  return (
    <section className="belowPage">
      <img className="belowPageImg" src="./images/pgBelow.png" alt="" />
      <div className="belowPageContent">
        <h1 className="bp-heading">Let's Introduce About Myself</h1>
        <div className="bp-description">
          <p>
            I am Currently pursuing Bachelor of Technology in Computer Science
            and Engineering at IIT(BHU) Varanasi.
          </p>
          <Link className="learn-more" to="/portfolio/about">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};
export default BelowPageSection;
