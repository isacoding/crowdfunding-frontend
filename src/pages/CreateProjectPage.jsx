import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import "./CreateProjectPage.css";

function CreateProjectPage() {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    goal: "",
    image: "https://via.placeholder.com/300x200",
    is_open: true,
  });

  if (!auth.token) {
    navigate("/login");
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/projects/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${auth.token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        navigate(`/project/${data.id}`);
      }
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  return (
    <div className="create-project-page">
      <h1>Create a New Mentorship Project</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="goal">Time Goal (hours)</label>
          <input
            type="number"
            id="goal"
            value={formData.goal}
            onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
            required
            min="1"
          />
        </div>

        <button type="submit">Create Project</button>
      </form>
    </div>
  );
}

export default CreateProjectPage;
