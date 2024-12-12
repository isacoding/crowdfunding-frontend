// import useProjects from "../hooks/use-projects";
// import ProjectCard from "../components/ProjectCard";
// import "./HomePage.css";

// function HomePage() {
//   const { projects, isLoading, error } = useProjects();

//   if (isLoading) {
//     return <p>Loading projects...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   return (
//     <div>
//       <h1 className="page-title">Open Projects</h1>
//       <div id="project-list">
//         {projects.length > 0 ? (
//           projects.map((projectData, key) => (
//             <ProjectCard key={key} projectData={projectData} />
//           ))
//         ) : (
//           <p>No projects available</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default HomePage;

/// v2 ///

// import useProjects from "../hooks/use-projects";
// import ProjectCard from "../components/ProjectCard";
// import "./HomePage.css";

// function HomePage() {
//   const { projects, isLoading, error } = useProjects();

//   if (isLoading) {
//     return <p>Loading projects...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   return (
//     <div className="container">
//       <h1 className="page-title">Open Projects</h1>
//       <div id="project-list">
//         {projects.length > 0 ? (
//           projects.map((projectData, key) => (
//             <ProjectCard key={key} projectData={projectData} />
//           ))
//         ) : (
//           <p>No projects available</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default HomePage;

/// v3 ///

// import React from "react";
// import { Link } from "react-router-dom";
// import "./HomePage.css";

// function HomePage({ projects }) {
//   return (
//     <div className="home-container">
//       <h1 className="title">Open Projects</h1>
//       <div className="projects-grid">
//         {projects.map((project) => (
//           <div key={project.id} className="project-card">
//             <img
//               src={project.image}
//               alt={project.title}
//               className="project-image"
//             />
//             <h2 className="project-title">{project.title}</h2>
//             <Link to={`/project/${project.id}`} className="view-project-link">
//               View Project
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default HomePage;

/// v4 ///
// import { useEffect, useState } from "react";
// import ProjectCard from "../components/ProjectCard";
// import { fetchProjects } from "../api/get-projects";
// import "./HomePage.css";

// function HomePage() {
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function loadProjects() {
//       const data = await fetchProjects();
//       setProjects(data);
//       setLoading(false);
//     }
//     loadProjects();
//   }, []);

//   if (loading) return <p>Loading projects...</p>;

//   return (
//     <div className="homepage">
//       <h1>Open Projects</h1>
//       <div className="projects-grid">
//         {projects.map((project) => (
//           <ProjectCard key={project.id} project={project} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default HomePage;

// v5 //
// import useProjects from "../hooks/use-projects";
// import ProjectCard from "../components/ProjectCard";
// import "./HomePage.css";

// function HomePage() {
//   const { projects, isLoading, error } = useProjects();

//   if (isLoading) {
//     return <p>Loading projects...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   return (
//     <div className="homepage">
//       <h1>Open Projects</h1>
//       <div className="projects-grid">
//         {projects.length > 0 ? (
//           projects.map((project) => (
//             <ProjectCard key={project.id} projectData={project} />
//           ))
//         ) : (
//           <p>No projects available.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default HomePage;

// v6 //
// function HomePage() {
//   return (
//     <div>
//       <h1>Welcome to Crowdfunding App</h1>
//       <p>This is the homepage.</p>
//     </div>
//   );
// }

// export default HomePage;

// v7 //
import useProjects from "../hooks/use-projects";
import ProjectCard from "../components/ProjectCard";
import "./HomePage.css";

function HomePage() {
  const { projects, isLoading, error } = useProjects();

  if (isLoading) {
    return <p>Loading projects...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1 className="page-title">Open Projects</h1>
      <div id="project-list">
        {projects.length > 0 ? (
          projects.map((projectData, key) => (
            <ProjectCard key={key} projectData={projectData} />
          ))
        ) : (
          <p>No projects available</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;
