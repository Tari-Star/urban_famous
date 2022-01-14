import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

// Individual Cards
function ProjectCards(props) {
  return (
    <div className="card">
      <img class="img-container" alt={props.name} src={props.image} />
      <div className="t-content">
      <p className="project-icon">{props.name}</p>
      <a href={props.github}>
        <img
          class="project-icon"
          src="https://img.icons8.com/fluent/48/000000/github.png"
          alt="GitHub Repo"
        />
      </a>
      <a href={props.deploy}>
        <img
          class="project-icon"
          src="https://img.icons8.com/fluent/48/000000/domain.png"
          alt="Deployed Application"
        />
      </a>
      </div>
    </div>
  );
}

export default ProjectCards;
