import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <span className="name">Sandeep Singh</span>
      <nav className="nav-bar">
        <Link to="/myPortfolio/" className="nav-link">
          Home
        </Link>
        <Link to="/myPortfolio/projects" className="nav-link">
          Projects
        </Link>{" "}
        <Link to="/myPortfolio/about" className="nav-link">
          About
        </Link>
      </nav>
    </header>
  );
};
export default Header;
