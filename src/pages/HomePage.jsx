// import { allProjects } from "../data";
import useProjects from "../hooks/use-projects";
import ProjectCard from "../components/ProjectCard";
import "./HomePage.css";

function HomePage() {
  const { projects } = useProjects();
  // return <h1>This is the home page.</h1>;
  return (
    // <div>
    <div id="project-list">
      {projects.map((projectData, key) => {
        // return <div key={key}>{projectData.title}</div>;
        return <ProjectCard key={key} projectData={projectData} />;
      })}
    </div>
  );
}

export default HomePage;
