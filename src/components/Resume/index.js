import React from "react";

// link to a downloadable resume and a list of the proficiencies
function Resume() {
  return (
    <section className="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>
      <div>
        <div>
          <a
            href="https://github.com/Tari-Star/urban_famous/raw/main/docx/Bota_Seri_Resume.docx"
            className="link"
          >
            <h3>Download my Resume</h3>
          </a>
        </div>
      </div>

      <div className="justify-content-center">
        <div>
          <h2 className="top-title">Front-end Proficiencies</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>HandleBars</li>
          </ul>
          <h2 className="top-title">Back-end Proficiencies</h2>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
