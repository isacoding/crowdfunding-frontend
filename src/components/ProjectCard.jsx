// import { Link } from "react-router-dom";
// import "./ProjectCard.css";

// function ProjectCard({ projectData }) {
//   const projectLink = `/project/${projectData.id}`;

//   return (
//     <div className="project-card">
//       <Link to={projectLink}>
//         <img src={projectData.image} alt={projectData.title} />
//         <h3>{projectData.title}</h3>
//       </Link>
//     </div>
//   );
// }

// export default ProjectCard;

/// v4 ///
// import { Link } from "react-router-dom";
// import "./ProjectCard.css";

// function ProjectCard({ projectData }) {
//   const projectLink = `/project/${projectData.id}`;

//   return (
//     <div className="project-card">
//       <Link to={projectLink}>
//         <img
//           src={projectData.image || "placeholder.jpg"}
//           alt={projectData.title || "Project"}
//         />
//         <h3>{projectData.title}</h3>
//       </Link>
//     </div>
//   );
// }

// export default ProjectCard;

// v5 //
import { Link } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard({ projectData }) {
  const projectLink = `/project/${projectData.id}`;

  return (
    <div className="project-card">
      <Link to={projectLink}>
        <img src={projectData.image} alt={projectData.title} />
        <h3>{projectData.title}</h3>
      </Link>
    </div>
  );
}

export default ProjectCard;
