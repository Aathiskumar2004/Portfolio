const ProjectCard = ({ project }) => {
  return (
    <div className="card bg-base-200 shadow">
      <div className="card-body">
        <h3 className="card-title">{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
