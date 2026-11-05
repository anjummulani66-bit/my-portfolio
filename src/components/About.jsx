import React from "react";

function About() {
  return (
    <section id="about" className="section about">
      <div>
        <p className="tag">WELCOME TO MY PORTFOLIO</p>
        <h1>Hi, I'm Anjum Mulla</h1>
        <h2>Frontend Developer</h2>
        <p>
          I am a passionate frontend developer and a student
          interested in building responsive and user-friendly
          web applications using React, JavaScript, HTML and CSS.
        </p>
        <a className="btn" href="#projects">View My Projects</a>
      </div>
      <img
        src="https://placehold.co/300x300?text=Your+Photo"
        alt="Portfolio profile"
        loading="lazy"
      />
    </section>
  );
}

export default About;