function ProjectCard({ title, description,tech}) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Built with:{tech}</p>
    </div>
  );
}

export default ProjectCard;