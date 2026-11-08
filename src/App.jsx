import "./App.css";
import ProjectCard from "./ProjectCard";

function App() {
  return (
    <div>
      <h1>My Portfolio</h1>

      <ProjectCard title="Project One" description="Description of project one" />
      <ProjectCard title="Project Two" description="Description of project two" />
      <ProjectCard title="Project Three" description="Description of project three" />
    </div>
  );
}

export default App;