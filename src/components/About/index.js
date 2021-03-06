import React from "react";

//section with avatar and short bio
function About() {
  return (
    <section className="container">
      <h2 className="top-title">Hi, I'm Bota!</h2>
      <hr></hr>
      <div className="bio">
        <img
          className="mb-5 avatar"
          src="https://avatars.githubusercontent.com/u/89365355?v=4"
          alt="Bota Seri"
        />
        <p>
          I live in Florida and work in a barbershop. Even though I love my
          current job, I decided to start my journey of becoming my better self
          and began studying coding.
        </p>
        <p>
          After my first assignment I understood just how interesting I find it,
          and now I spend almost all of my free time learning new skills and
          applying fresh knowledge to solve challenges.
        </p>
        <p>
          Finally, I like to spend the rest of my free time creating Amigurumies
          for my Etsy store (Gianthearts), petting my cat, and of course,
          enjoying the year-round summer!
        </p>
      </div>
    </section>
  );
}

export default About;
