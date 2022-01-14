import React from "react";

function Resume() {
  return (
    <section class="container">
      <h2 className="tt">Resume</h2>
      <hr></hr>
      <div>
        <div class="mt-5">
          <h2 className="tt">Bota Seri</h2>
          <ul>
            <li>
              Morbi tristique justo vel turpis sollicitudin, et tristique velit
              convallis. In hac habitasse platea dictumst. Phasellus mattis nunc
              sed orci consequat laoreet.
            </li>
          </ul>
          <p class ="mt-5">
              < a href="https://www.linkedin.com/in/botaseri/">
                  <img
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="inkedIn"
              />
              </a>
          </p>
          <a href="https://github.com/fondofhats/react-portfolio/raw/main/docs/Bota_Seri_Resume.docx" class = "link">
              Download Resume
          </a>
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Proficiencies</h2>
          <ul>
            <li>
            HTML, CSS (Bootstrap, HandleBars), JavaScript, jQuery, React.js, IndexedDB,<br />
            Node.js, Express.js, SQL, Sequelize, MongoDB, Mongoose, NoSQL, APIs.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
