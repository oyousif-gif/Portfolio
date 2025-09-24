// File: Projects.jsx | Author: Omer Yousif | StudentID: 301093426 | Date: 2025-09-23
function ProjectCard({ img, title, desc }) {
  return (
    <article className="card">
      <img src={img} alt={title} />
      <div className="card-body">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section>
      <h1>My Projects</h1>
      <div className="grid three">
        <ProjectCard
          img="/project1.png"
          title="Project 1 – React Router"
          desc="Single-page app with multiple routes and clean layout."
        />
        <ProjectCard
          img="/project2.png"
          title="Project 2 – Node.js API"
          desc="REST endpoints and async JS patterns."
        />
        <ProjectCard
          img="/project3.png"
          title="Project 3 – MERN App"
          desc="MongoDB + Express + React + Node full-stack demo."
        />
      </div>
    </section>
  )
}
