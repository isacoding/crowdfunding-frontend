import useProjects from "../hooks/use-projects";
import ProjectCard from "../components/ProjectCard";
import "./HomePage.css";

function HomePage() {
  const { projects, isLoading, error } = useProjects();

  if (isLoading) {
    return (
      <div className="loading-container">
        <h2>Loading Projects...</h2>
        <p>Discovering available mentorship opportunities</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Error Loading Projects</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div className="homepage-container">
      <section className="hero-section">
        <h1>Available Mentorship Projects</h1>
        <p>Find mentors willing to share their time and expertise</p>
      </section>

      <div className="projects-grid">
        {projects.length > 0 ? (
          projects.map((projectData) => (
            <ProjectCard key={projectData.id} projectData={projectData} />
          ))
        ) : (
          <p className="no-projects">No mentorship projects available yet.</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;
