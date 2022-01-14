import React from "react";


// Individual Card that will be used multiple times in the portfolio section 
function ProjectCards(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
        </div>
        <hr></hr>
      <div className="content">
        <p className="card-title">{props.name}</p>
       
        <p class="proj-icons-container">
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
        </p>
      </div>
    
    </div>
  );
}

export default ProjectCards;
