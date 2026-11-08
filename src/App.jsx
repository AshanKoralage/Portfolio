import { useState, useEffect } from "react";
import "./App.css";
import ProjectCard from "./ProjectCard";

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.title = "Charuka's Portfolio";
  }, []);

  useEffect(() => {
    console.log("Theme changed. Dark mode is:", isDark);
  }, [isDark]);

  return (
    <div
      style={{
        backgroundColor: isDark ? "#222" : "#fff",
        color: isDark ? "#fff" : "#000",
        minHeight: "100vh",
      }}
    >
      <h1>My Portfolio</h1>

      <button onClick={() => setIsDark(!isDark)}>
        {isDark ? "Light Mode" : "Dark Mode"}
      </button>

      <ProjectCard title="Project One" description="Description of project one" tech="React" />
      <ProjectCard title="Project Two" description="Description of project two" tech="Node.js" />
      <ProjectCard title="Project Three" description="Description of project three" tech="MySQL" />
    </div>
  );
}

export default App;