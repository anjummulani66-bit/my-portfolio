import React from "react";

function Resume() {
  return (
    <section id="resume" className="section">
      <h2>My Resume</h2>
      <p>Download my resume to know more about my education and skills.</p>

      <a
        className="btn"
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer"
      >
        View Resume
      </a>
    </section>
  );
}

export default Resume;