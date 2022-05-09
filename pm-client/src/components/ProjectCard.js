function ProjectCard({project}) {
  return (
    <section className="card-container">
        <section className="card-header">
            <h2 
                className="card-title"
                value={project.title}>{project.title}</h2>
        </section>
        <section className="card-body">
            <p className="card-details"
             value={project.description}>{project.description}</p>
        </section>
        <section className="card-footer">
            <span className="card-owner"
             value={project.client}>{project.client}</span>
        </section>
    </section>
  )
}

export default ProjectCard