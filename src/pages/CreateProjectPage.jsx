// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function CreateProjectPage() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     goal: "",
//     image: "",
//     is_open: true,
//   });

//   const handleChange = (event) => {
//     const { id, value } = event.target;
//     setFormData({ ...formData, [id]: value });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const token = window.localStorage.getItem("token");

//     const response = await fetch(`${import.meta.env.VITE_API_URL}/projects/`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`,
//       },
//       body: JSON.stringify(formData),
//     });

//     if (response.ok) {
//       navigate("/");
//     } else {
//       alert("Failed to create project.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="title">Title</label>
//       <input id="title" onChange={handleChange} />

//       <label htmlFor="description">Description</label>
//       <textarea id="description" onChange={handleChange} />

//       <label htmlFor="goal">Goal</label>
//       <input id="goal" type="number" onChange={handleChange} />

//       <label htmlFor="image">Image URL</label>
//       <input id="image" onChange={handleChange} />

//       <label htmlFor="is_open">Open for Support</label>
//       <select id="is_open" onChange={handleChange}>
//         <option value={true}>Yes</option>
//         <option value={false}>No</option>
//       </select>

//       <button type="submit">Create Project</button>
//     </form>
//   );
// }

// export default CreateProjectPage;

// v2 //
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./CreateProjectPage.css";

// function CreateProjectPage() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     goal: "",
//     image: "",
//     is_open: true,
//   });

//   const handleChange = (event) => {
//     const { id, value } = event.target;
//     setFormData({ ...formData, [id]: value });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const token = window.localStorage.getItem("token");

//     const response = await fetch(`${import.meta.env.VITE_API_URL}/projects/`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`,
//       },
//       body: JSON.stringify(formData),
//     });

//     if (response.ok) {
//       navigate("/"); // Redirect to homepage after successful creation
//     } else {
//       alert("Failed to create project.");
//     }
//   };

//   return (
//     <form className="create-project-form" onSubmit={handleSubmit}>
//       <h1>Create Project</h1>
//       <label htmlFor="title">Title</label>
//       <input
//         id="title"
//         type="text"
//         placeholder="Project Title"
//         value={formData.title}
//         onChange={handleChange}
//       />
//       <label htmlFor="description">Description</label>
//       <textarea
//         id="description"
//         placeholder="Project Description"
//         value={formData.description}
//         onChange={handleChange}
//       />
//       <label htmlFor="goal">Goal</label>
//       <input
//         id="goal"
//         type="number"
//         placeholder="Goal Hours"
//         value={formData.goal}
//         onChange={handleChange}
//       />
//       <label htmlFor="image">Image URL</label>
//       <input
//         id="image"
//         type="text"
//         placeholder="Image URL"
//         value={formData.image}
//         onChange={handleChange}
//       />
//       <label htmlFor="is_open">Open for Support</label>
//       <select id="is_open" value={formData.is_open} onChange={handleChange}>
//         <option value={true}>Yes</option>
//         <option value={false}>No</option>
//       </select>
//       <button type="submit">Create Project</button>
//     </form>
//   );
// }

// export default CreateProjectPage;

// v2 //

// function CreateProjectPage() {
//   return (
//     <div>
//       <h1>Create a New Project</h1>
//       <p>Project creation form will go here.</p>
//     </div>
//   );
// }

// export default CreateProjectPage;

// v3 //

// import React, { useState } from "react";
// import { useAuth } from "../hooks/use-auth";
// import { Redirect } from "react-router-dom";

// function CreateProjectPage() {
//   const { auth } = useAuth();

//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     goal: "",
//     image: "",
//     is_open: true,
//   });

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [id]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your form submission logic here
//   };

//   // If the user is not authenticated, redirect to the login page
//   if (!auth.token) {
//     return <Redirect to="/login" />;
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="title">Title</label>
//       <input
//         type="text"
//         id="title"
//         placeholder="Project Title"
//         value={formData.title}
//         onChange={handleChange}
//       />
//       <label htmlFor="description">Description</label>
//       <textarea
//         id="description"
//         placeholder="Project Description"
//         value={formData.description}
//         onChange={handleChange}
//       />
//       <label htmlFor="goal">Goal</label>
//       <input
//         type="number"
//         id="goal"
//         placeholder="Funding Goal"
//         value={formData.goal}
//         onChange={handleChange}
//       />
//       <label htmlFor="image">Image URL</label>
//       <input
//         type="text"
//         id="image"
//         placeholder="Image URL"
//         value={formData.image}
//         onChange={handleChange}
//       />
//       <label htmlFor="is_open">Open for Support</label>
//       <select id="is_open" value={formData.is_open} onChange={handleChange}>
//         <option value={true}>Yes</option>
//         <option value={false}>No</option>
//       </select>
//       <button type="submit">Create Project</button>
//     </form>
//   );
// }

// export default CreateProjectPage;

// v4 //
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateProjectPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    goal: "",
    image: "",
    is_open: true,
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = window.localStorage.getItem("token");

    const response = await fetch(`${import.meta.env.VITE_API_URL}/projects/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      navigate("/");
    } else {
      alert("Failed to create project.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input id="title" onChange={handleChange} />

      <label htmlFor="description">Description</label>
      <textarea id="description" onChange={handleChange} />

      <label htmlFor="goal">Goal</label>
      <input id="goal" type="number" onChange={handleChange} />

      <label htmlFor="image">Image URL</label>
      <input id="image" onChange={handleChange} />

      <label htmlFor="is_open">Open for Support</label>
      <select id="is_open" onChange={handleChange}>
        <option value={true}>Yes</option>
        <option value={false}>No</option>
      </select>

      <button type="submit">Create Project</button>
    </form>
  );
}

export default CreateProjectPage;
