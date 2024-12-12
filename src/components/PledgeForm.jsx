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

/////////////

// import { useState } from "react";

// function PledgeForm({ projectId }) {
//   const [formData, setFormData] = useState({ amount: "", comment: "" });

//   const handleChange = (event) => {
//     const { id, value } = event.target;
//     setFormData({ ...formData, [id]: value });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const token = window.localStorage.getItem("token");

//     if (!projectId) {
//       alert("Project ID is missing.");
//       return;
//     }

//     const response = await fetch(`${import.meta.env.VITE_API_URL}/pledges/`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`,
//       },
//       body: JSON.stringify({ ...formData, project: projectId }),
//     });

//     if (response.ok) {
//       alert("Pledge submitted successfully!");
//     } else {
//       alert("Failed to submit pledge.");
//     }
//   };

//   return (
//     <form className="pledge-form" onSubmit={handleSubmit}>
//       <input
//         id="amount"
//         type="number"
//         placeholder="Hours"
//         value={formData.amount}
//         onChange={handleChange}
//       />
//       <input
//         id="comment"
//         type="text"
//         placeholder="Comment"
//         value={formData.comment}
//         onChange={handleChange}
//       />
//       <button type="submit">Submit Pledge</button>
//     </form>
//   );
// }

// export default PledgeForm;

/// V3 ///

// import { useState } from "react";

// function PledgeForm({ projectId }) {
//   const [formData, setFormData] = useState({ amount: "", comment: "" });

//   const handleChange = (event) => {
//     const { id, value } = event.target;
//     setFormData({ ...formData, [id]: value });
//   };

//   // const handleSubmit = async (event) => {
//   //   event.preventDefault();
//   //   const token = window.localStorage.getItem("token");

//   //   // Validate projectId before submitting
//   //   if (!projectId) {
//   //     alert("Project ID is missing. Cannot submit pledge.");
//   //     return;
//   //   }

//   //   const response = await fetch(`${import.meta.env.VITE_API_URL}/pledges/`, {
//   //     method: "POST",
//   //     headers: {
//   //       "Content-Type": "application/json",
//   //       Authorization: `Token ${token}`,
//   //     },
//   //     body: JSON.stringify({ ...formData, project: projectId }),
//   //   });

//   //   if (response.ok) {
//   //     alert("Pledge submitted successfully!");
//   //   } else {
//   //     alert("Failed to submit pledge.");
//   //   }
//   // };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const token = window.localStorage.getItem("token");

//     const response = await fetch(`${import.meta.env.VITE_API_URL}/pledges/`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`,
//       },
//       body: JSON.stringify({ ...formData, project: projectId }),
//     });

//     if (response.ok) {
//       alert("Pledge submitted successfully!");
//       setFormData({ amount: "", comment: "" }); // Reset form
//     } else {
//       alert("Failed to submit pledge.");
//     }
//   };

//   return (
//     <form className="pledge-form" onSubmit={handleSubmit}>
//       <input
//         id="amount"
//         type="number"
//         placeholder="Hours"
//         value={formData.amount}
//         onChange={handleChange}
//       />
//       <input
//         id="comment"
//         type="text"
//         placeholder="Comment"
//         value={formData.comment}
//         onChange={handleChange}
//       />
//       <button type="submit">Submit Pledge</button>
//     </form>
//   );
// }

// export default PledgeForm;

/// V4 ///

// import { useState } from "react";

// function PledgeForm({ projectId }) {
//   const [formData, setFormData] = useState({ amount: "", comment: "" });

//   const handleChange = (event) => {
//     const { id, value } = event.target;
//     setFormData({ ...formData, [id]: value });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const token = window.localStorage.getItem("token");

//     // Check if the token is present
//     if (!token) {
//       alert("You need to be logged in to submit a pledge.");
//       return;
//     }

//     try {
//       const response = await fetch(`${import.meta.env.VITE_API_URL}/pledges/`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Token ${token}`,
//         },
//         body: JSON.stringify({ ...formData, project: projectId }),
//       });

//       if (response.ok) {
//         alert("Pledge submitted successfully!");
//         // Reload the page or handle pledge state update
//         window.location.reload();
//       } else {
//         const errorData = await response.json();
//         console.error("Error submitting pledge:", errorData);
//         alert("Failed to submit pledge.");
//       }
//     } catch (error) {
//       console.error("Network error:", error);
//       alert("Failed to submit pledge due to network error.");
//     }
//   };

//   return (
//     <form className="pledge-form" onSubmit={handleSubmit}>
//       <input
//         id="amount"
//         type="number"
//         placeholder="Hours"
//         value={formData.amount}
//         onChange={handleChange}
//       />
//       <input
//         id="comment"
//         type="text"
//         placeholder="Comment"
//         value={formData.comment}
//         onChange={handleChange}
//       />
//       <button type="submit">Submit Pledge</button>
//     </form>
//   );
// }

// export default PledgeForm;

/// V5 ///

// import { useState } from "react";
// import "./PledgeForm.css";

// function PledgeForm({ projectId }) {
//   const [formData, setFormData] = useState({ amount: "", comment: "" });

//   const handleChange = (event) => {
//     const { id, value } = event.target;
//     setFormData({ ...formData, [id]: value });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const token = window.localStorage.getItem("token");

//     if (!token) {
//       alert("You need to be logged in to submit a pledge.");
//       return;
//     }

//     try {
//       const response = await fetch(`${import.meta.env.VITE_API_URL}/pledges/`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Token ${token}`,
//         },
//         body: JSON.stringify({ ...formData, project: projectId }),
//       });

//       if (response.ok) {
//         alert("Pledge submitted successfully!");
//         setFormData({ amount: "", comment: "" });
//       } else {
//         alert("Failed to submit pledge.");
//       }
//     } catch (error) {
//       console.error("Network error:", error);
//       alert("Network error. Please try again.");
//     }
//   };

//   return (
//     <form className="pledge-form" onSubmit={handleSubmit}>
//       <input
//         id="amount"
//         type="number"
//         placeholder="Hours"
//         value={formData.amount}
//         onChange={handleChange}
//       />
//       <input
//         id="comment"
//         type="text"
//         placeholder="Comment"
//         value={formData.comment}
//         onChange={handleChange}
//       />
//       <button type="submit">Submit Pledge</button>
//     </form>
//   );
// }

// export default PledgeForm;

// v6 //
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

import { Link } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard({ projectData }) {
  if (!projectData || !projectData.id) {
    return null; // or you can return some fallback UI
  }

  const projectLink = `/project/${projectData.id}`;

  return (
    <div className="project-card">
      <Link to={projectLink}>
        <img
          src={projectData.image || "default-image.jpg"}
          alt={projectData.title || "Project Title"}
        />
        <h3>{projectData.title || "Project Title"}</h3>
      </Link>
    </div>
  );
}

export default ProjectCard;
