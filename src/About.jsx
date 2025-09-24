// File: About.jsx | Author: Omer Yousif | StudentID: 301093426 | Date: 2025-09-23
export default function About() {
  return (
    <section>
      <h1>About Me</h1>
      <div className="about-grid">
        <img className="portrait" src="/me.png" alt="My photo" />
        <div>
          <p>Hello, my name is <strong>Omer Yousif</strong>. I’m a Software Engineering student specializing in AI.</p>
          <p>I enjoy building React front-ends and MERN apps.</p>
          <a className="btn" href="/resume.pdf" target="_blank" rel="noreferrer">View My Resume (PDF)</a>
        </div>
      </div>
    </section>
  )
}
