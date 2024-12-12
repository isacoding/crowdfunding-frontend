// import { useParams } from "react-router-dom";
// import useProject from "../hooks/use-project";
// import PledgeForm from "../components/PledgeForm";

// function ProjectPage() {
//   const { id } = useParams();
//   const { project, isLoading, error } = useProject(id);

//   if (isLoading) {
//     return <p>Loading project details...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   return (
//     <div>
//       <h1>{project.title}</h1>
//       <p>{project.description}</p>
//       <img src={project.image} alt={project.title} />
//       <h3>Goal: {project.goal} hours</h3>
//       <h3>Status: {project.is_open ? "Open" : "Closed"}</h3>

//       <h2>Pledges</h2>
//       <ul>
//         {project.pledges.map((pledge) => (
//           <li key={pledge.id}>
//             {pledge.amount} hours - {pledge.comment || "No comment"}
//           </li>
//         ))}
//       </ul>

//       <PledgeForm projectId={id} />
//     </div>
//   );
// }

// export default ProjectPage;

///////

// import { useParams } from "react-router-dom";
// import useProject from "../hooks/use-project";
// import PledgeForm from "../components/PledgeForm";

// function ProjectPage() {
//   const { id } = useParams();
//   const { project, isLoading, error } = useProject(id);

//   if (isLoading) {
//     return <p>Loading project details...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   if (!project) {
//     return <p>Project not found!</p>;
//   }

//   return (
//     <div>
//       <h1>{project.title}</h1>
//       <p>{project.description}</p>
//       <img src={project.image} alt={project.title} />
//       <h3>Goal: {project.goal} hours</h3>
//       <h3>Status: {project.is_open ? "Open" : "Closed"}</h3>

//       <h2>Pledges</h2>
//       <ul>
//         {project.pledges && project.pledges.length > 0 ? (
//           project.pledges.map((pledge) => (
//             <li key={pledge.id}>
//               {pledge.amount} hours - {pledge.comment || "No comment"}
//             </li>
//           ))
//         ) : (
//           <p>No pledges yet.</p>
//         )}
//       </ul>

//       <PledgeForm projectId={id} />
//     </div>
//   );
// }

// export default ProjectPage;

/// V3 ///

// import { useParams } from "react-router-dom";
// import useProject from "../hooks/use-project";
// import PledgeForm from "../components/PledgeForm";

// function ProjectPage() {
//   const { id } = useParams();
//   const { project, isLoading, error } = useProject(id);

//   // Handle loading state
//   // if (isLoading) {
//   //   return <p>Loading project details...</p>;
//   // }
//   if (isLoading) {
//     return (
//       <div className="project-container">
//         <h1>Loading...</h1>
//         <p>Please wait while we load the project details.</p>
//       </div>
//     );
//   }

//   // Handle error state
//   // if (error) {
//   //   return <p>Error: {error.message}</p>;
//   // }

//   if (error) {
//     return (
//       <div className="project-container">
//         <h1>Error</h1>
//         <p>Unable to load the project. Please try again later.</p>
//       </div>
//     );
//   }

//   // Handle case where project is not found
//   if (!project) {
//     return <p>Project not found!</p>;
//   }

//   return (
//     <div>
//       <h1>{project.title}</h1>
//       <p>{project.description}</p>
//       <img src={project.image} alt={project.title} />
//       <h3>Goal: {project.goal} hours</h3>
//       <h3>Status: {project.is_open ? "Open" : "Closed"}</h3>

//       {/* <h2>Pledges</h2>
//       <ul>
//         {project.pledges && project.pledges.length > 0 ? (
//           project.pledges.map((pledge) => (
//             <li key={pledge.id}>
//               {pledge.amount} hours - {pledge.comment || "No comment"}
//             </li>
//           ))
//         ) : (
//           <p>No pledges yet.</p>
//         )}
//       </ul> */}

//       <h2>Pledges</h2>
//       {project.pledges.length > 0 ? (
//         <ul>
//           {project.pledges.map((pledge) => (
//             <li key={pledge.id}>
//               {pledge.amount} hours - {pledge.comment || "No comment"}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No pledges yet.</p>
//       )}

//       {/* Pass project.id to PledgeForm */}
//       <PledgeForm projectId={project.id} />
//     </div>
//   );
// }

// export default ProjectPage;

/// V4 ///

// import { useParams } from "react-router-dom";
// import useProject from "../hooks/use-project";
// import PledgeForm from "../components/PledgeForm";
// import "./ProjectPage.css";

// function ProjectPage() {
//   const { id } = useParams();
//   const { project, isLoading, error } = useProject(id);

//   // Handle loading state
//   if (isLoading) {
//     return (
//       <div className="project-container">
//         <h1>Loading...</h1>
//         <p>Please wait while we load the project details.</p>
//       </div>
//     );
//   }

//   // Handle error state
//   if (error) {
//     return (
//       <div className="project-container">
//         <h1>Error</h1>
//         <p>Unable to load the project. Please try again later.</p>
//       </div>
//     );
//   }

//   // Handle case where project is not found
//   if (!project) {
//     return (
//       <div className="project-container">
//         <h1>Project Not Found</h1>
//         <p>Sorry, we couldn't find the project you're looking for.</p>
//       </div>
//     );
//   }

//   // Render the project details
//   return (
//     <div className="project-container">
//       <h1>{project.title}</h1>
//       <p className="project-description">{project.description}</p>
//       <img src={project.image} alt={project.title} className="project-image" />
//       <h3>Goal: {project.goal} hours</h3>
//       <h3>Status: {project.is_open ? "Open" : "Closed"}</h3>

//       <h2>Pledges</h2>
//       {project.pledges && project.pledges.length > 0 ? (
//         <ul className="pledge-list">
//           {project.pledges.map((pledge) => (
//             <li key={pledge.id} className="pledge-item">
//               <strong>{pledge.amount} hours</strong> -{" "}
//               {pledge.comment || "No comment"}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No pledges yet.</p>
//       )}

//       {/* Pass project.id to PledgeForm */}
//       <PledgeForm projectId={project.id} />
//     </div>
//   );
// }

// export default ProjectPage;

/// v5 ///

// import { useParams } from "react-router-dom";
// import useProject from "../hooks/use-project";
// import PledgeForm from "../components/PledgeForm";
// import "./ProjectPage.css";

// function ProjectPage() {
//   const { id } = useParams();
//   const { project, isLoading, error } = useProject(id);

//   if (isLoading) {
//     return <p>Loading project details...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   return (
//     <div className="project-page">
//       <h1>{project.title}</h1>
//       <p>{project.description}</p>
//       <img src={project.image} alt={project.title} />
//       <h3>Goal: {project.goal} hours</h3>
//       <h3>Status: {project.is_open ? "Open" : "Closed"}</h3>

//       <h2>Pledges</h2>
//       <ul>
//         {project.pledges.length > 0 ? (
//           project.pledges.map((pledge) => (
//             <li key={pledge.id}>
//               {pledge.amount} hours - {pledge.comment || "No comment"}
//             </li>
//           ))
//         ) : (
//           <p>No pledges yet.</p>
//         )}
//       </ul>

//       <PledgeForm projectId={id} />
//     </div>
//   );
// }

// export default ProjectPage;

/// v6 ///
// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { fetchProject } from "../api/get-project";
// import PledgeForm from "../components/PledgeForm";
// import "./ProjectPage.css";

// function ProjectPage() {
//   const { id } = useParams();
//   const [project, setProject] = useState(null);

//   useEffect(() => {
//     async function loadProject() {
//       const data = await fetchProject(id);
//       setProject(data);
//     }
//     loadProject();
//   }, [id]);

//   if (!project) return <p>Loading project...</p>;

//   return (
//     <div className="project-page">
//       <h1>{project.title}</h1>
//       <p>{project.description}</p>
//       <img src={project.image} alt={project.title} />
//       <h3>Goal: {project.goal} hours</h3>
//       <h3>Status: {project.is_open ? "Open" : "Closed"}</h3>
//       <h2>Pledges</h2>
//       <ul>
//         {project.pledges.map((pledge) => (
//           <li key={pledge.id}>
//             {pledge.amount} hours - {pledge.comment || "No comment"}
//           </li>
//         ))}
//       </ul>
//       <PledgeForm projectId={id} />
//     </div>
//   );
// }

// export default ProjectPage;

// v7 //
// function ProjectPage() {
//   return (
//     <div>
//       <h1>Project Page</h1>
//       <p>Project details will be displayed here.</p>
//     </div>
//   );
// }

// export default ProjectPage;

// v8 //
import { useParams } from "react-router-dom";
import useProject from "../hooks/use-project";
import PledgeForm from "../components/PledgeForm";

function ProjectPage() {
  const { id } = useParams();
  const { project, isLoading, error } = useProject(id);

  if (isLoading) {
    return <p>Loading project details...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img src={project.image} alt={project.title} />
      <h3>Goal: {project.goal} hours</h3>
      <h3>Status: {project.is_open ? "Open" : "Closed"}</h3>

      <h2>Pledges</h2>
      <ul>
        {project.pledges.map((pledge) => (
          <li key={pledge.id}>
            {pledge.amount} hours - {pledge.comment || "No comment"}
          </li>
        ))}
      </ul>

      <PledgeForm projectId={id} />
    </div>
  );
}

export default ProjectPage;
