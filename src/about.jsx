const About = () => {
  return (
    <section className="about">
      <img className="abt-img" src="./images/sandeep1.jpg" alt="sandeep" />
      <div className="abt-content">
        <p>
          I am <span>Sandeep Singh</span> currently pursuing{" "}
          <span>
            Bachelor of Technology in Computer Science and Engineering at
            IIT(BHU) Varanasi.
          </span>
        </p>
        <p>
          I have a keen{" "}
          <span>interest in Data Structures and Algorithms (DSA)</span>. Solving
          intricate DSA problems is not just a hobby for me; it's a fascinating
          journey into the realm of efficient algorithms, optimization, and
          logical thinking. I find the process of dissecting complex problems
          and devising elegant solutions both challenging and rewarding. Whether
          it's tackling algorithmic puzzles, participating in coding
          competitions, or contributing to open-source projects, I am
          continuously honing my problem-solving skills to become a proficient
          software engineer.
        </p>
        <p>
          Beyond DSA , I also have a strong foundation over{" "}
          <span>
            web development technologies like reactjs , nodejs , bootstrap
          </span>{" "}
          etc.
        </p>
        <p>
          As an enthusiastic and dedicated learner I like about learning and
          applying new technologies to create innovative solutions . I enjoy
          tackling challenges and solving problems. My goal is to contribute to
          the ever-evolving field of technology and make a positive impact.
        </p>
        <div className="abt-link-container">
          <h2>Important Links</h2>{" "}
          <ul>
            <li>
              <a
                className="abt-link"
                target="blank"
                href="https://drive.google.com/file/d/1RPQj7Jx9ETfh7FblsR9aKA-JLT9__1b0/view"
              >
                reactJs Certificate
              </a>
            </li>
            <li>
              <a
                className="abt-link"
                target="blank"
                href="https://codeforces.com/profile/studysingh"
              >
                Codeforces
              </a>
            </li>
            <li>
              <a
                className="abt-link"
                target="blank"
                href="https://leetcode.com/studysingh/"
              >
                Leetcode
              </a>
            </li>
            <li>
              <a
                className="abt-link"
                target="blank"
                href="https://auth.geeksforgeeks.org/user/studysinlsa/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user"
              >
                GeeksforGeeks
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default About;
