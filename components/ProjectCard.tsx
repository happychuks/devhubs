const ProjectCard = () => {
    return (
      <div className="border border-gray-300 rounded p-4 shadow hover:shadow-lg transition-shadow duration-300">
        <h2 className="text-xl font-semibold">Project Title</h2>
        <p className="mt-2">Short description of the project.</p>
        <button className="mt-4 bg-blue-500 text-white p-2 rounded">View Details</button>
      </div>
    );
  };
  
  export default ProjectCard;
  