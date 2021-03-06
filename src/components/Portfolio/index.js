import React from "react";
import ProjectCards from "../../components/Project";
import portfolio from "../../portfolio.json";

function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}
// Component displays all project cards
function Portfolio() {
  return (
    <section className="container">
      <div className="project">
        <h2 className="top-title">Portfolio</h2>
        <hr></hr>
      </div>

      <Wrapper id="card-data">
        {portfolio.map((project) => (
          <ProjectCards
            key={project.id}
            image={project.image}
            name={project.name}
            github={project.github}
            deploy={project.deploy}
          />
        ))}
      </Wrapper>
    </section>
  );
}

export default Portfolio;
