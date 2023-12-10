const Projects = () => {
  return (
    <section className="project-container">
      <div className="project">
        <h2>Myntra-Clone</h2>
        <div className="project-details">
          <div className="project-description">
            The Myntra Clone project is a React-based web application that
            replicates the core functionalities and user interface of the Myntra
            e-commerce platform. The project utilizes web development
            technologies such as React, Redux, React Router, Node.js, Bootstrap,
            etc. Data is fetched from a locally hosted server. The application
            includes navigation features, and changes made, such as adding
            products to the bag, are dynamically reflected.
            <a
              className="project-link"
              href="https://github.com/studysingh/myntraClone"
              target="blank"
            >
              Github
            </a>
          </div>
          <img
            className="product-img"
            src="./images/myntra1.png"
            alt="myntra"
          />
        </div>
      </div>
      <div className="project">
        <h2>Todo Project</h2>
        <div className="project-details">
          <div className="project-description">
            This website is a simple and intuitive platform designed to help
            users organize their tasks and manage their daily activities
            efficiently. With a clean and user-friendly interface, this website
            makes task management a breeze, allowing users to stay focused and
            organized.Users can add their task and, after completing it, delete
            it from the site .{" "}
            <a
              className="project-link"
              href="https://github.com/studysingh/h_todo"
              target="blank"
            >
              Github
            </a>
          </div>
          <img className="product-img" src="./images/todo.png" alt="todo" />
        </div>
      </div>
    </section>
  );
};
export default Projects;
